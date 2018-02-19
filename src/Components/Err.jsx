import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';

const Err = ({ errorMessage }) => (
  <div className="error">
    <img src="images/Octocat.jpg" alt="Octocat" className="badgeAvatar" />
    <p>{errorMessage}</p>
    <Search />
  </div>
);

Err.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default Err;
