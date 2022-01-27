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
  const myInfo: any = await getGithubUserInfo(username);

  const myRepos: any = await getGithubUserRepos(username);

  const myStarred: any = await getUserStarredRepos(username);

  const data = {
    ...myInfo.data,
    repos: myRepos.data,
    starred: myStarred.data,
  };

  return await AxiosRequestInstance.post('/api/github/updatedb', { data, username })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
}
