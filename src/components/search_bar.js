import React, { Component } from 'react';

// Functional component -> because it is literary function
// const SearchBar = () => {
//   return <input />;
// };

// Class component -> JS object with properties and methods
class SearchBar extends Component {

  constructor(props) {
    super(props);
    // Only in constructor we use this method for setting state,
    // anywhere else we use this.setState
    this.state = { term: '' };
  }

  render() {
    // Use this for calling longer event handler like one below
    // return <input onChange={this.onInputChange} />;

    // Shorter version replaces Event handler below
    return (
      <div className="search-bar col-md-12">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // Longer event handler for changes on input field
  // onInputChange(event) {
  //   console.log(event.target.value);
  //   this.setState({ term: event.target.value });
  // }
}

export default SearchBar;
