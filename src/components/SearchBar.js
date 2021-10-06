import React from "react";
// import httpClient from "../apis/httpClient";

class SearchBar extends React.Component {
  state = { term: "" };

  onSearchSubmit = (e) => {
    e.preventDefault();

    // console.log(this.state.term);
    this.props.onFormSubmit(this.state.term);

    // httpClient.get(`/search?`)
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSearchSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
