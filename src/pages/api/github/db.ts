import database from 'db/database';

export async function updateUser(username, data) {
  const db = await database('github');

  return await db
    .collection('users')
    .replaceOne({ login: username }, data)
    .then((res) => {
      return JSON.parse(JSON.stringify(res));
    });
}
