import React, { Component } from 'react';
import { func } from 'prop-types';


export default class Searchbar extends Component {

  static propTypes = {
    onSearch: func.isRequired,
  };


  state = { inputValue: '' };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSearch(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus={true}
          placeholder="Search movies"

          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>

    )
  }
};