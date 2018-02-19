/* eslint no-undef: 0 */
import search from './search';

test('search returns valid results when passed user string', () => {
  expect(search('sfreeman422')).resolves.toBe({
    name: expect.any(String),
    avatar_url: expect.any(String),
    followers: expect.any(Number),
    following: expect.any(Number),
  });
});

test('search returns error when passed invalid search criteria', () => {
  expect(search({})).rejects.toBe({
    error: expect.any(Boolean),
    errorMessage: expect.any(String),
  });
  expect(search([])).rejects.toBe({
    error: expect.any(Boolean),
    errorMessage: expect.any(String),
  });
  expect(search(1)).rejects.toBe({
    error: expect.any(Boolean),
    errorMessage: expect.any(String),
  });
});
