import { AxiosRequestInstance } from 'utils/request';

export default async function handler(req, res) {
  let result;

  try {
    result = await AxiosRequestInstance.get(`https://api.github.com/rate_limit`);
  } catch (error) {
    throw Error('get github api limit error:' + error);
  }

  res.json(result.data.resources.core);
}
