// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import isEmpty from 'lodash.isempty';
import { appendResponseHeader } from 'utils';

type Data = {
  readonly code: number;
  readonly msg: string;
  data: any;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const raw = require('../../public/data/data.json');
  if (isEmpty(raw)) res.status(404).json(appendResponseHeader(raw, false));
  res.status(200).json(appendResponseHeader(raw, true));
}
