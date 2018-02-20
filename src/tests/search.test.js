/* eslint no-undef: 0 */
import search from '../utils/search';

let successObj;

function runSuccessTests() {
  test('search returns valid userObj when passed a valid user string', () => {
    expect(successObj).toHaveProperty('userObj');
    expect(successObj.userObj).toHaveProperty('avatar_url', expect.any(String));
    expect(successObj.userObj).toHaveProperty('followers', expect.any(Number));
    expect(successObj.userObj).toHaveProperty('following', expect.any(Number));
    expect(successObj.userObj).toHaveProperty('name', expect.any(String));
  });
  test('search returns a valid userRepos when passed a valid user string', () => {
    expect(successObj).toHaveProperty('userRepos');
    expect(successObj.userRepos[0]).toHaveProperty('name', expect.any(String));
    expect(successObj.userRepos[0]).toHaveProperty('description', expect.any(String));
    expect(successObj.userRepos[0]).toHaveProperty('git_url', expect.any(String));
    expect(successObj.userRepos[0]).toHaveProperty('stargazers_count', expect.any(Number));
    expect(successObj.userRepos[0]).toHaveProperty('forks_count', expect.any(Number));
    expect(successObj.userRepos[0]).toHaveProperty('open_issues_count', expect.any(Number));
    expect(successObj.userRepos[0]).toHaveProperty('size', expect.any(Number));
  })
}

async function getSuccess() {
  successObj = await search('sfreeman422');
  runSuccessTests();
}
getSuccess();

test('search returns error when passed invalid search criteria', () => {
  expect(search({})).rejects.toEqual(Error({
    error: expect.any(Boolean),
    errorMessage: expect.any(String),
  }));
  expect(search([])).rejects.toEqual(Error({
    error: expect.any(Boolean),
    errorMessage: expect.any(String),
  }));
  expect(search(1)).rejects.toEqual(Error({
    error: expect.any(Boolean),
    errorMessage: expect.any(String),
  }));
});
