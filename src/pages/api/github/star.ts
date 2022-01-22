import { AxiosRequestInstance } from '../../../utils/request';

export default async function handler(req, res) {
  const result = await AxiosRequestInstance.get(`https://api.github.com/users/${req.body.username}/starred`);

  res.status(200).json(result.data);
}
