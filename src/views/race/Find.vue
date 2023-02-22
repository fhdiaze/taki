<template>
  <div>
    <form @submit.prevent="find">
      <label>Country: </label>
      <input type="text" v-model="country"/>
      <button>Find</button>
    </form>
  </div>
  <div>
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Country</th>
          <th>Region</th>
          <th>City</th>
        </thead>
        <tbody>
          <tr v-for="race in races" :key="race.id">
            <td>{{ race.name }}</td>
            <td>{{ race.location.country }}</td>
            <td>{{ race.location.region }}</td>
            <td>{{ race.location.city }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      country: null,
      races: [],
    }
  },
  methods: {
    async callFind(country) {
      try {
        const raceFindResponse = await fetch('http://localhost:7878/api/race.find');
        const page = await raceFindResponse.json();
        const races = page.items;

        return races;
      } catch (err) {
        console.log(err.message);
      }
    },
    async find() {
      this.races = await this.callFind(this.country);
    },
  },
  async mounted() {
    this.races = await this.callFind(this.country);
  }
};
</script>
