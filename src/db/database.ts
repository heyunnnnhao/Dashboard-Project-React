import { MongoClient } from 'mongodb';
import { DBUrl } from 'constant';
global.mongo = global.mongo || {};

export default async function database(databaseName) {
  if (!global.mongo.client) {
    global.mongo.client = new MongoClient(DBUrl);
  }

  await global.mongo.client.connect();

  const db =  global.mongo.client.db(databaseName);

  return await db;
}
