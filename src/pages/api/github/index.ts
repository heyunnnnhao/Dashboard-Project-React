import * as api from './api';
import * as db from './db';

export async function getGithubApiLimit() {
  return await api
    .getLimit()
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function updateUserToDB(username) {
  const myInfo: any = await api.getUser(username);

  const myRepos: any = await api.getRepos(username);

  const myStarred: any = await api.getStars(username);

  const data = {
    ...myInfo,
    repos: myRepos,
    starred: myStarred,
  };
  return await db
    .updateUser(username, data)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
}
