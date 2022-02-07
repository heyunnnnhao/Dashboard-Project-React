import * as githubApi from 'api/github/api';

export async function getGithubApiLimit() {
  return await githubApi
    .getLimit()
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function updateUserToDB(username) {
  const apiCallRemaining = await githubApi.getLimit().then((res) => {
    return res.remaining;
  });

  if (apiCallRemaining < 1) throw Error('rate limit exceeds');

  const myInfo: any = await githubApi.getUser(username);

  const myRepos: any = await githubApi.getRepos(username);

  const myStarred: any = await githubApi.getStars(username);

  const data = {
    ...myInfo,
    repos: myRepos,
    starred: myStarred,
  };
  
  return await githubApi
    .updateUser(username, data)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
}
