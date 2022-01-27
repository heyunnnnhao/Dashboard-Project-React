import { AxiosRequestInstance } from 'utils/index';
import { MY_GITHUB_USERNAME } from 'constant';

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
  return await AxiosRequestInstance.get(`/api/github/user?username=${username}`)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function getUserStarredRepos(username) {
  return await AxiosRequestInstance.get(`/api/github/star?username=${username}`)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function getGithubUserRepos(username) {
  return await AxiosRequestInstance.post(`/api/github/repo?username=${username}`)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function updateMyReposToDB(username = MY_GITHUB_USERNAME) {
  const reposResponse: any = await getGithubUserRepos(username);

  const { data: repos } = reposResponse;

  return await AxiosRequestInstance.post('/api/github/updatedb', { repos, username })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
}
