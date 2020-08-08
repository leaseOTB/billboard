import {getAllBuildings} from '../../lib/api'

const All = async(req, res) => {
  const data = await getAllBuildings()
  res.send(data)
}

export default All