import React from 'react';
import renderer from 'react-test-renderer';
import RepoList from './RepoList';

it('generates a repo list for a found user', () => {
  const tree = renderer
    .create(<RepoList userRepos={
      [
        {
          name: 'Test Repo 1',
          description: 'Test description 1',
          git_url: 'git://github.com/sfreeman422/testRepo1',
          stargazers_count: 1,
          forks_count: 1,
          open_issues_count: 1,
          size: 1,
        },
        {
          name: 'Test Repo 2',
          description: 'Test description 2',
          git_url: 'git://github.com/sfreeman422/testRepo2',
          stargazers_count: 2,
          forks_count: 2,
          open_issues_count: 2,
          size: 2,
        },
        {
          name: 'Test Repo 3',
          description: 'Test description 3',
          git_url: 'git://github.com/sfreeman422/testRepo3',
          stargazers_count: 3,
          forks_count: 3,
          open_issues_count: 3,
          size: 3,
        },
      ]
    }
    />)
    .toJSON();
});
