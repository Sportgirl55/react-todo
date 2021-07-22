import React, { Component } from "react";
import './SearchPanel.scss'

export default class SearchPanel extends Component {
  state = {
    term: ''
  };

  onSearch = (e) => {
    const term = e.target.value
    this.setState({ term });
    this.props.onSearch(term);
  };

  render() {
    return (
      <form
        className="search-input-form">
        <input
          className="search-input form-control"
          type="search"
          placeholder="Type to search"
          onChange={this.onSearch}  
          value={this.state.term}
        />
      </form>
    )
  }


};

