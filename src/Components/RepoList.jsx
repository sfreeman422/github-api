import React from 'react';
import UserRepo from './UserRepo';

const RepoList = ({ userRepos }) => (
  <div className="repoList">
    {userRepos.map((userRepo, index) => <UserRepo repoInfo={userRepo} key={`userRepo-${index}`} />)}
  </div>
)

export default RepoList;
