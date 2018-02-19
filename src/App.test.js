import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import App from './App';
import UserBadge from './Components/UserBadge';
import RepoList from './Components/RepoList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('generates a user badge for user sfreeman422', () => {
  const tree = renderer
    .create(<UserBadge userObj={
      {
      avatar_url: 'https://avatars3.githubusercontent.com/u/16405652?v=4',
      followers: 30,
      following: 38,
      name: 'Steven Freeman',
    }}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('generates an error message and octocat picture for a missing user', () => {
  const tree = renderer
    .create(<UserBadge userObj={
      {
        avatar_url: '/images/Octocat.jpg',
        message: 'Not Found',
      }
    }
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
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
