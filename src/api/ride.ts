import { config } from './config'

interface Route {
  elevation: Number
  distance: Number
}

interface Ride {
  id: string
  name: string
  discipline: string
  category: string
  startAt: moment.Moment
  description: string
  website: string
  route: Route
}

/**
 * Gets rides that match a filter
 * @param {Object} cursor The query cursor
 * @param {Object} cursor.query The filter query
 * @param {string} cursor.query.name The name of the ride
 * @param {string} cursor.query.description The description of the ride
 * @param {string} cursor.query.city The city of the ride
 * @param {string} cursor.query.country The country of the ride
 */
const find = async (cursor: Object) => {
  try {
    const options: RequestInit = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cursor)
    }
    const response = await fetch(`${config.wero.url}/ride.find`, options)
    const page = await response.json()
    const rides = page.items

    return rides
  } catch (err: any) {
    console.log(err.message)
  }
}

/**
 * Gets the rides with the specified id if any
 */
const get = async (rideId: string): Promise<Ride> => {
  const data = await fetch(`${config.wero.url}/ride.get?rideId=${rideId}`)

  if (!data.ok) {
    throw new Error('Error getting a ride')
  }

  const ride = await data.json()

  return ride
}

export type { Ride, Route }
export { find, get }
