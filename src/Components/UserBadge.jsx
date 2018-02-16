import React from 'react';
import PropTypes from 'prop-types';

const UserBadge = ({ userObj }) => (
  <div className="userBadge">
    {userObj.avatar_url ? <img src={userObj.avatar_url} className="badgeAvatar" alt="GitHub User Profile" /> : null}
    {userObj.message === 'Not Found' ? <p className="error">Woops! It looks like that user is not on GitHub. <br /> Please try again.</p> : null}
    {userObj.name ? <h1>{userObj.name}</h1> : null}
    {userObj.followers && userObj.following ? <p>Followers: {userObj.followers} / Following: {userObj.following}</p> : null}
    {userObj.followers && !userObj.following ? <p>Followers: {userObj.followers}</p> : null}
    {userObj.following && !userObj.followers ? <p>Following: {userObj.following}</p> : null}
  </div>
);

UserBadge.propTypes = {
  userObj: PropTypes.objectOf(PropTypes.shape({
    avatar_url: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
};

export default UserBadge;
