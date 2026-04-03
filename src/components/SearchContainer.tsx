import React, { useState, useMemo } from "react";

import { useStaticQuery, graphql } from "gatsby";
import * as JsSearch from "js-search";

const Search = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        limit: 1000
        sort: { frontmatter: { date: DESC } }
        filter: {
          frontmatter: { template: { eq: "post" }, draft: { ne: true } }
        }
      ) {
        edges {
          node {
            rawMarkdownBody
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `);

  const itemList = useMemo(
    () =>
      data.allMarkdownRemark.edges.map(({ node }) => ({
        id: node.frontmatter.slug,
        url: node.frontmatter.slug,
        title: node.frontmatter.title,
        content: node.rawMarkdownBody
          .replace(/(\((.*?)\))|(\#)|(\*)|(\[)|(\])/g, " ")
          .replace(/(?:\\[rn]|[\r\n]+)|(\\)+/g, " ")
          .replace(/\s\s+/g, " "),
      })),
    [data],
  );

  const searchEngine = useMemo(() => {
    if (itemList.length === 0) return null;

    const REGEX = /\s+/;
    const tokenizer = {
      tokenize(text) {
        return text.split(REGEX).filter((t) => t);
      },
    };
    const engine = new JsSearch.Search("id");
    engine.tokenizer = tokenizer;
    engine.indexStrategy = new JsSearch.PrefixIndexStrategy();
    engine.sanitizer = new JsSearch.LowerCaseSanitizer();
    engine.searchIndex = new JsSearch.TfIdfSearchIndex("title");
    engine.addIndex("title");
    engine.addIndex("content");
    engine.addDocuments(itemList);
    return engine;
  }, [itemList]);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchData = (e) => {
    const query = e.target.value;
    const results = searchEngine ? searchEngine.search(query) : [];
    setSearchQuery(query);
    setSearchResults(results);
    const status = document.getElementById("result");
    if (query !== "") {
      status.style.display = "block";
    } else {
      status.style.display = "none";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const queryResults = searchQuery === "" ? itemList : searchResults;

  return (
    <div style={{ margin: "5px auto" }}>
      <div style={{ margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <div style={{ margin: "0 auto" }}>
            <input
              id="Search"
              value={searchQuery}
              onChange={searchData}
              placeholder="搜尋文章"
              style={{
                margin: "0 auto",
                width: "250px",
                padding: "5px 5px",
                display: "inline-block",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxSizing: "border-box",
              }}
            />
          </div>
        </form>
        <div>
          <table
            id="result"
            style={{
              width: "250px",
              borderCollapse: "collapse",
              borderRadius: "4px",
              border: "1px solid #ccc",
              display: "none",
            }}
          >
            <tbody>
              {queryResults &&
                queryResults.map((item) => (
                  <tr key={`row_${item.id}`}>
                    <td
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      <a href={item.url}>{item.title}</a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Search;
