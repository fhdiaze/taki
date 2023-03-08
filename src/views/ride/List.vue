<template>
  <section class="container">
    <section>
      <form @submit.prevent="find">
        <label for="country">Country: </label>
        <input id="country" type="text" v-model="filter.country">
        <label for="type">Type: </label>
        <input id="type" type="text" v-model="filter.type">
        <button>Find</button>
      </form>
    </section>
    <section>
      <section>
        <table>
          <thead>
            <th>Name</th>
            <th>Country</th>
            <th>Region</th>
            <th>City</th>
          </thead>
          <tbody>
            <tr v-for="ride in rides" :key="ride.id">
              <td>{{ ride.name }}</td>
              <td>{{ ride.location.country }}</td>
              <td>{{ ride.location.region }}</td>
              <td>{{ ride.location.city }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  </section>
</template>

<script>
import * as ride from '../../composable/ride';

export default {
  data() {
    return {
      filter: {
        country: null,
        type: null,
      },
      rides: [],
    };
  },
  methods: {
    async find() {
      this.rides = await ride.find(this.country);
    },
  },
  async mounted() {
    this.rides = await ride.find(this.country);
  }
};
</script>
