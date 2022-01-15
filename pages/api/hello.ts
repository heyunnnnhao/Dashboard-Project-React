// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import isEmpty from 'lodash.isempty';
import axios from 'axios';

import { AxiosRequestInstance } from 'utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  AxiosRequestInstance
    .get('../../public/data/data.json')
    .then((response) => {
      res.send(response);
    })
    .catch((e) => {
      res.send(e);
    });
  // const raw = require('../../public/data/data.json');

  // if (isEmpty(raw)) res.status(404).json(raw);
  // res.status(200).json(raw);
}
