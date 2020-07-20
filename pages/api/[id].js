// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
  
import nextConnect from 'next-connect';
import middleware from '../../middleware/middleware';
import { getBuilding } from '../../lib/db';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const data = await getBuilding(req, req.query.id);
  res.send({ data });
});

export default handler;