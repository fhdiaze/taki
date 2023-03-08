/**
 * Gets races that match a filter
 */
const find = async (country) => {
  try {
    const raceFindResponse = await fetch('http://localhost:7878/api/race.find');
    const page = await raceFindResponse.json();
    const races = page.items;

    return races;
  } catch (err) {
    console.log(err.message);
  }
};

/**
 * Gets the race with the specified id if any
 */
const get = async (raceId) => {
  try {
    const data = await fetch(`http://localhost:7878/api/race.get?raceId=${raceId}`);

    if (!data.ok) {
      throw new Error('Error getting a race');
    }

    const race = await data.json();

    return race;
  } catch (err) {
    console.log(err.message);
  }
};

export { find, get };
