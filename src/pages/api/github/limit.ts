import { AxiosRequestInstance } from 'utils/index';

export default async function handler(req, res) {
  try {
    const result = await AxiosRequestInstance.get(`https://api.github.com/rate_limit`);
    res.status(200).json(result.data.resources.core);
  } catch (error) {
    throw Error('get github api limit error:' + error);
  }
}
