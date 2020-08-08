const API_URL = process.env.GQL_URI
const PASSWORD = process.env.GQL_PASSWORD

const fetchAPI = async(query, {variables} = {}) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': PASSWORD
    },
    body: JSON.stringify({
      query,
      variables
    })
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
  }
  return json.data
}


export const getBuildingByBBL = async(BBL) => {
  const data = await fetchAPI(
    `
      query BuildingByBBL($BBL: Int) {
        buildings(where: {BBL: {_eq: $BBL}}) {
          BBL
          INCREASE
          STREET_ADDRESS
          ZIP
        }
      }
    `,
    {
      variables: {
        BBL
      }
    }
  )
  return data?.buildings[0]
}

export const getAllBuildings = async() => {
  const data = await fetchAPI(
    `
    query GetAllBuildings {
      buildings {
        BBL
      }
    }`
  )
  return data?.buildings
}


