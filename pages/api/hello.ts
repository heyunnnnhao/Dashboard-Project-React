// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  code: number;
  data: any;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const raw = require('../../public/data/data.json');
  if (!raw) res.status(404).json({ code: -1, msg: 'FAIL', data: null });
  res.status(200).json({ code: 0, msg: 'SUCCESS', data: raw  });
}
