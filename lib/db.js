import {ObjectId} from 'mongodb'

export async function getBuilding(req, id) {

  console.log('pulling ', id)
  const data = await req.db.collection('buildings').findOne({
    "_id": ObjectId(id),
  });
  console.log(data)
  if (!data) return null;
  
  return data
}