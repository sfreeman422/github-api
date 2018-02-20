import React from 'react';
import PropTypes from 'prop-types';

const UserBadge = ({ userObj }) => (
  <div className="userBadge">
    {userObj.avatar_url ?
      <img src={userObj.avatar_url} className="badgeAvatar" alt="GitHub User Profile" />
      : null}
    {userObj.message ?
      <p className="error">{userObj.message} <br /> Please try again.</p>
      : null}
    {userObj.name ?
      <h1>{userObj.name}</h1>
      : null}
    {userObj.followers && userObj.following ?
      <p>Followers: {userObj.followers} / Following: {userObj.following}</p>
      : null}
  </div>
);

UserBadge.propTypes = {
  userObj: PropTypes.shape({
    avatar_url: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    name: PropTypes.string,
  }),
};

UserBadge.defaultProps = {
  userObj: {
    avatar_url: '/images/Octocat.jpg',
    followers: 0,
    following: 0,
    name: '',
  },
};

export default UserBadge;
