/* eslint object-curly-newline: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';

const Err = ({ errorMessage, searchTerm, adjustSearchTerm, search }) => (
  <div className="error">
    <img src="images/Octocat.jpg" alt="Octocat" className="badgeAvatar" />
    <p>{errorMessage}</p>
    <Search adjustSearchTerm={adjustSearchTerm} search={search} searchTerm={searchTerm} />
  </div>
);

Err.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  adjustSearchTerm: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

export default Err;
