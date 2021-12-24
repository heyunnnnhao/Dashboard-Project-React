// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import isEmpty from 'lodash.isempty';

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const raw = require('../../public/data/data.json');
  if (isEmpty(raw)) res.status(404).json(raw);
  res.status(200).json(raw);
}
