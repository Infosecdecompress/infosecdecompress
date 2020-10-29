import React, { Component } from "react"
import Axios from "axios"
import * as JsSearch from "js-search"

class Search extends Component {
  state = {
    itemList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
  }
  /**
   * React lifecycle method to fetch the data
   */
  async componentDidMount() {
    Axios.get("/feed-1.json")
      .then(result => {
        const feedData = result.data
        this.setState({ itemList: feedData.items })
        this.rebuildIndex()
      })
      .catch(err => {
        this.setState({ isError: true })
        console.log("====================================")
        console.log(`Something bad happened while fetching the data\n${err}`)
        console.log("====================================")
      })
  }

  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { itemList } = this.state
    const dataToSearch = new JsSearch.Search("id")
    /**
     *  defines a indexing strategy for the data
     * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("id")

    dataToSearch.addIndex("title") // sets the index attribute for the data
    dataToSearch.addIndex("custom_elements") // sets the index attribute for the data

    dataToSearch.addDocuments(itemList) // adds the data to be searched
    this.setState({ search: dataToSearch, isLoading: false })
  }

  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { itemList, searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? itemList : searchResults
    return (
      <div>
        <div style={{ margin: "0 auto" }}>
          <form onSubmit={this.handleSubmit}>
            <div style={{ margin: "0 auto" }}>
              <input
                id="Search"
                value={searchQuery}
                onChange={this.searchData}
                placeholder="搜尋文章"
                style={{ margin: "0 auto", width: "250px" }}
              />
            </div>
          </form>
          <div id="result">
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                borderRadius: "4px",
                border: "1px solid #d3d3d3",
              }}
            >
              <tbody>
                {queryResults.map(item => {
                  return (
                    <tr key={`row_${item.id}`}>
                      <td
                        style={{
                          fontSize: "14px",
                          border: "1px solid #d3d3d3",
                        }}
                      >
                        {item.title}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
export default Search