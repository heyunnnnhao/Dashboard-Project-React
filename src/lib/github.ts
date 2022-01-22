import { AxiosRequestInstance } from 'utils/request';

export async function getGithubApiLimit() {
  return await AxiosRequestInstance.get('/api/github/limit')
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function getGithubUserInfo(username) {
  return await AxiosRequestInstance.post('/api/github/user', { username })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function getUserStarredRepos(username) {
  return await AxiosRequestInstance.post('/api/github/star', { username })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function getGithubUserRepos(username) {
  return await AxiosRequestInstance.post('/api/github/star', { username })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function updateMyReposToDB(username) {
  const repos = await getGithubUserRepos(username);

  return await AxiosRequestInstance.post('/api/github/update', { repos })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
}
