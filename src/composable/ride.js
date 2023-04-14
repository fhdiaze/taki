import { config } from './config';

/**
 * Gets rides that match a filter
 * @param {object} cursor The query cursor
 * @param {Object} cursor.query The filter query
 * @param {string} cursor.query.name The name of the ride
 * @param {string} cursor.query.description The description of the ride
 * @param {string} cursor.query.city The city of the ride
 * @param {string} cursor.query.country The country of the ride
 */
const find = async (cursor) => {
  try {
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cursor)
    };
    const response = await fetch(`${config.wero.url}/ride.find`, options);
    const page = await response.json();
    const rides = page.items;

    return rides;
  } catch (err) {
    console.log(err.message);
  }
};

/**
 * Gets the rides with the specified id if any
 */
const get = async (rideId) => {
  try {
    const data = await fetch(`${config.wero.url}/ride.get?rideId=${rideId}`);

    if (!data.ok) {
      throw new Error('Error getting a ride');
    }

    const ride = await data.json();

    return ride;
  } catch (err) {
    console.log(err.message);
  }
};

export { find, get };
