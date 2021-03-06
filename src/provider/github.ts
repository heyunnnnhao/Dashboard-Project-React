import { AxiosRequestInstance } from 'utils/index';
import database from 'src/database';

const baseGithubUrl = 'https://api.github.com/';

export async function getLimit() {
  return AxiosRequestInstance.get(baseGithubUrl + `rate_limit`)
    .then((res) => {
      return res.data.rate;
    })
    .catch((error) => {
      throw Error('get github api limit error:' + error);
    });
}

export async function getRepos(username) {
  return AxiosRequestInstance.get(baseGithubUrl + `users/${username}/repos`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw Error(`get ${username} github repo info failed` + error);
    });
}

export async function getStars(username) {
  return AxiosRequestInstance.get(baseGithubUrl + `users/${username}/starred`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw Error(`get starred projects for user ${username} failed` + error);
    });
}

export async function getUser(username) {
  return AxiosRequestInstance.get(baseGithubUrl + `users/${username}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw Error(`get ${username} info failed` + error);
    });
}

export async function updateUser(username, data) {
  const db = await database('github');

  return await db
    .collection('users')
    .replaceOne({ login: username }, data)
    .then((res) => {
      return JSON.parse(JSON.stringify(res));
    });
}
