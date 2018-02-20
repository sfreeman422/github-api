import React from 'react';
import renderer from 'react-test-renderer';
import UserBadge from '../Components/UserBadge';

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
