export default async function handler(req, res) {
  const { repos, username } = req.body;

  // connect to db and update
  let result = {};

  res.status(200).json(result);
}
