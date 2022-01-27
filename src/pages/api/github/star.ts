import { AxiosRequestInstance } from 'utils/index';

export default async function handler(req, res) {
  const { username } = req.query;

  try {
    const result = await AxiosRequestInstance.get(`https://api.github.com/users/${username}/starred`);
    res.status(200).send(result.data);
  } catch (error) {
    throw Error(`get starred projects for user ${username} failed` + error);
  }
}
