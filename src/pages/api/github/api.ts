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
  try {
    const result = await AxiosRequestInstance.get(`https://api.github.com/users/${username}/repos`);
    return result.data;
  } catch (error) {
    throw Error(`get ${username} github repo info failed` + error);
  }
}

export async function getStars(username) {
  try {
    const result = await AxiosRequestInstance.get(`https://api.github.com/users/${username}/starred`);
    return result.data;
  } catch (error) {
    throw Error(`get starred projects for user ${username} failed` + error);
  }
}

export async function getUser(username) {
  try {
    const result = await AxiosRequestInstance.get(`https://api.github.com/users/${username}`);
    return result.data;
  } catch (error) {
    throw Error(`get ${username} info failed` + error);
  }
}
