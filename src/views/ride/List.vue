<template>
  <section>
    <form @submit.prevent="find">
      <label for="country">Country: </label>
      <input id="country" type="text" v-model="filter.country">
      <label for="type">Type: </label>
      <input id="type" type="text" v-model="filter.type">
      <button>Find</button>
    </form>
  </section>
  <section class="cards">
    <section class="card" v-for="ride in rides" :key="ride.id">
      <Card :ride="ride"></Card>
    </section>
  </section>
</template>

<script>
import * as ride from '../../composable/ride';
import Card from './Card.vue';

export default {
  components: {
    Card,
  },
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
