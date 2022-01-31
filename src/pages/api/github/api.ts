import { AxiosRequestInstance } from 'utils/index';

export async function getLimit() {
  return AxiosRequestInstance.get(`https://api.github.com/rate_limit`)
    .then((res) => {
      return res.data.rate;
    })
    .catch((error) => {
      throw Error('get github api limit error:' + error);
    });
}

export async function getRepos(username) {
  return AxiosRequestInstance.get(`https://api.github.com/users/${username}/repos`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw Error(`get ${username} github repo info failed` + error);
    });
}

export async function getStars(username) {
  return AxiosRequestInstance.get(`https://api.github.com/users/${username}/starred`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw Error(`get starred projects for user ${username} failed` + error);
    });
}

export async function getUser(username) {
  return AxiosRequestInstance.get(`https://api.github.com/users/${username}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw Error(`get ${username} info failed` + error);
    });
}
