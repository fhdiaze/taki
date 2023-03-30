/**
 * Gets rides that match a filter
 */
const find = async (filter) => {
  try {
    const body = {
      size: 1
    };
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    };
    const response = await fetch('http://localhost:7878/api/ride.find', options);
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
    const data = await fetch(`http://localhost:7878/api/ride.get?rideId=${rideId}`);

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
