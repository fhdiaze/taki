<template>
  <section>
      <form class="search" @submit.prevent="find">
        <input id="search" type="search" placeholder="Search" v-model="filter.search">
        <button value="search">&nbsp;</button>
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
        search: null
      },
      rides: [],
    };
  },
  methods: {
    async find() {
      const filter = {
        name: this.filter.search,
        description: this.filter.search,
        city: this.filter.search,
        country: this.filter.search
      };

      this.rides = await ride.find(filter);
    },
  },
  async mounted() {
    this.rides = await ride.find({});
  }
};
</script>
