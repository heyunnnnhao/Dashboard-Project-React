import { MongoClient } from 'mongodb';
import { DBUrl } from '../utils/constants';

global.mongo = global.mongo || {};

export default async function database() {
  if (!global.mongo.client) {
    global.mongo.client = new MongoClient(DBUrl);
  }
  await global.mongo.client.connect();

  const db = global.mongo.client.db();

  return db;
}
