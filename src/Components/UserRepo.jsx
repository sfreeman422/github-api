import React from 'react';
import PropTypes from 'prop-types';

// Name, Description, Git URL, Number of Stars, Forks Count, Number of Open Issues, Repository Size
const UserRepo = ({ repoInfo }) => (
  <div className="repoInfo">
    <h2>{repoInfo.name}</h2>
    <p id="description">{repoInfo.description}</p>
    <span className="icons"><i className="fas fa-star" title="stars" /> {repoInfo.stargazers_count}</span>
    <span className="icons"><i className="fas fa-code-branch" title="forks" /> {repoInfo.forks_count}</span>
    <span className="icons"><i className="fas fa-exclamation-triangle" title="issues" /> {repoInfo.open_issues_count}</span>
    <p id="repoSize">Size: {repoInfo.size}kb</p>
    <p id="gitUrl">Git Url: <a href={repoInfo.git_url}>{repoInfo.git_url}</a></p>
  </div>
);

UserRepo.propTypes = {
  repoInfo: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    git_url: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    open_issues_count: PropTypes.number,
    size: PropTypes.number,
  })).isRequired,
};
export default UserRepo;
