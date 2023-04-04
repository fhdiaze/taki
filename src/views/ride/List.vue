<template>
  <section class="filters">
    <button v-on:click="showFilter = !showFilter">Filter</button>
    <section v-show="showFilter">
      <form @submit.prevent="find">
        <label for="country">Country: </label>
        <input id="country" type="text" v-model="filter.country">
        <label for="format">Format: </label>
        <input id="format" type="text" v-model="filter.format">
        <button>Apply</button>
      </form>
    </section>
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
        format: null,
      },
      showFilter: true,
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
