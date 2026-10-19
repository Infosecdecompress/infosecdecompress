import { useMemo, useState } from "react";

import { graphql, useStaticQuery } from "gatsby";
import * as JsSearch from "js-search";

import { toPlainText } from "@/utils";

import * as styles from "./Search.module.scss";

interface SearchQueryResult {
  allMarkdownRemark: {
    edges: Array<{
      node: {
        rawMarkdownBody: string | null;
        frontmatter: {
          slug: string;
          title: string;
        };
      };
    }>;
  };
}

interface SearchItem {
  id: string;
  url: string;
  title: string;
  content: string;
}

const tokenizer: JsSearch.ITokenizer = {
  tokenize: (text) => text.split(/\s+/).filter(Boolean),
};

const createSearchEngine = (items: Array<SearchItem>) => {
  const engine = new JsSearch.Search("id");
  engine.tokenizer = tokenizer;
  engine.indexStrategy = new JsSearch.PrefixIndexStrategy();
  engine.sanitizer = new JsSearch.LowerCaseSanitizer();
  engine.searchIndex = new JsSearch.TfIdfSearchIndex("title");
  engine.addIndex("title");
  engine.addIndex("content");
  engine.addDocuments(items);

  return engine;
};

const Search = () => {
  const data = useStaticQuery<SearchQueryResult>(graphql`
    query SearchQuery {
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

  const items = useMemo<Array<SearchItem>>(
    () =>
      (data?.allMarkdownRemark?.edges ?? []).map(({ node }) => ({
        id: node.frontmatter.slug,
        url: node.frontmatter.slug,
        title: node.frontmatter.title,
        content: toPlainText(node.rawMarkdownBody ?? ""),
      })),
    [data],
  );

  const engine = useMemo(
    () => (items.length > 0 ? createSearchEngine(items) : null),
    [items],
  );

  const [query, setQuery] = useState("");
  const results = useMemo<Array<SearchItem>>(
    () => (query && engine ? (engine.search(query) as Array<SearchItem>) : []),
    [engine, query],
  );

  return (
    <div className={styles.search}>
      <form role="search" onSubmit={(event) => event.preventDefault()}>
        <input
          id="search"
          type="search"
          className={styles.input}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="搜尋文章"
          aria-label="搜尋文章"
        />
      </form>
      {query !== "" && (
        <table id="result" className={styles.results}>
          <tbody>
            {results.map((item) => (
              <tr key={item.id}>
                <td className={styles.result}>
                  <a href={item.url}>{item.title}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Search;
