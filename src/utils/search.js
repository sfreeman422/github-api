import fetch from 'isomorphic-fetch';

async function search(searchTerm) {
  const userObj = await (await
    fetch(`https://api.github.com/users/${searchTerm}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } throw Error('No Response from Github. Please try again.');
      }))
    .catch(e => ({
      error: true, errorMessage: e.message,
    }));
  if (userObj.message === 'Not Found') {
    userObj.avatar_url = '/images/Octocat.jpg';
  }
  const userRepos = await (await
    fetch(`https://api.github.com/users/${searchTerm}/repos`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } throw Error('No response from Github. Please try again.');
      }))
    .catch(e => ({
      error: true, errorMessage: e.message,
    }));
  return {
    userObj,
    userRepos,
  };
}

export default search;

