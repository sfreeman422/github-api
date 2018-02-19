import fetch from 'isomorphic-fetch';

async function search(searchTerm) {
  console.log(searchTerm);
  console.log(typeof searchTerm);
  if (typeof searchTerm !== 'string') {
    return { error: true, errorMessage: 'Search Term was not a string' };
  }
  const userObj = await (await
    fetch(`https://api.github.com/users/${searchTerm}`)
      .then(response => response.json())
      .catch(e => ({
        error: true, errorMessage: e.message,
      })));
  if (userObj.message === 'Not Found') {
    userObj.avatar_url = '/images/Octocat.jpg';
  }
  const userRepos = await (await
    fetch(`https://api.github.com/users/${searchTerm}/repos`)
      .then(response => response.json())
      .catch(e => ({
        error: true, errorMessage: e.message,
      })));
  return {
    userObj,
    userRepos,
  };
}

export default search;

