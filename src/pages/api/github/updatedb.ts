export default async function handler(req, res) {
  const { data, username } = req.body;

  // connect to db and update
  let result = {};

  res.status(200).json(data);
}
