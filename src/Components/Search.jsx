import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ adjustSearchTerm, getUserInfo, searchTerm }) => (
  <div className="searchComponent">
    <form onSubmit={getUserInfo}>
      <input
        type="text"
        placeholder="Search for a user..."
        onChange={event => adjustSearchTerm(event.target.value)}
        value={searchTerm}
      /> <br />
      <button type="submit" className="submitButton">Search</button>
    </form>
  </div>
);

Search.propTypes = {
  adjustSearchTerm: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default Search;
