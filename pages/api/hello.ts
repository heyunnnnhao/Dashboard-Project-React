// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { appendHeader } from 'utilities';

type Data = {
  readonly code: number;
  readonly msg: string;
  data: any;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const raw = require('../../public/data/data.json');
  if (!raw) res.status(404).json(appendHeader(raw, false));
  res.status(200).json(appendHeader(raw, true));
}
