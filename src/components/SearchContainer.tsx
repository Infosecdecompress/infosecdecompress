import React, { Component } from "react";

import Axios from "axios";
import * as JsSearch from "js-search";

class Search extends Component {
  state = {
    itemList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
  };

  /**
   * React lifecycle method to fetch the data
   */
  async componentDidMount() {
    Axios.get("/feed-1.json")
      .then((result) => {
        const feedData = result.data;
        this.setState({ itemList: feedData.items }, () => {
          this.rebuildIndex();
        });
      })
      .catch(() => {
        this.setState({ isError: true });
      });
  }

  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    var REGEX = /\s+/; // Split on spaces
    const tokenizer = {
      tokenize(text) {
        return text.split(REGEX).filter(
          (text) => text, // Filter empty tokens
        );
      },
    };
    const { itemList } = this.state;
    const dataToSearch = new JsSearch.Search("id");
    dataToSearch.tokenizer = tokenizer;
    /** PrefixIndexStrategy   AllSubstringsIndexStrategy ExactWordIndexStrategy  */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();
    /** defines the search index  https://github.com/bvaughn/js-search#configuring-the-search-index*/
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("title");
    dataToSearch.addIndex("title"); // sets the index attribute for the data
    dataToSearch.addIndex("content"); // sets the index attribute for the data
    dataToSearch.addDocuments(itemList); // adds the data to be searched
    this.setState({ search: dataToSearch, isLoading: false });
  };

  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = (e) => {
    const { search } = this.state;
    const queryResult = search.search(e.target.value);
    this.setState({ searchQuery: e.target.value, searchResults: queryResult });
    var status = document.getElementById("result");
    if (e.target.value !== "") {
      status.style.display = "block";
    } else {
      status.style.display = "none";
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { itemList, searchResults, searchQuery } = this.state;
    const queryResults = searchQuery === "" ? itemList : searchResults;
    return (
      <div style={{ margin: "5px auto" }}>
        <div style={{ margin: "0 auto" }}>
          <form onSubmit={this.handleSubmit}>
            <div style={{ margin: "0 auto" }}>
              <input
                id="Search"
                value={searchQuery}
                onChange={(evt) => this.searchData(evt)}
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
  }
}
export default Search;
