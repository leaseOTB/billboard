// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {getBuildingByBBL} from '../../lib/api'

const Building = async(req, res) => {
  const data = await getBuildingByBBL(req.params.id)
  res.send(data[0])
}

export default Building