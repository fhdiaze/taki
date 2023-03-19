<template>
  <section class="header">
    <h2 class="title">{{ ride.name }}</h2>
    <h3 class="subtitle">{{ formatDateTime(ride.startAt) }}</h3>
    <section class="tags">
      <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
    </section>
  </section>
  <section class="body">
    <p class="cardDesc">{{ ride.description }}</p>
  </section>

  <section class="footer">
    <section>
      {{ ride.route.distance }} Km
    </section>
    <section class="website">
      {{ ride.website }}
    </section>
    <section>
      {{ ride.route.elevation }} m
    </section>
  </section>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    ride: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      tags: this.assemblyTags(),
    };
  },
  methods: {
    formatDateTime(instant) {
      return moment(instant).format('YYYY/MM/DD HH:mm');
    },
    assemblyTags() {
      const tags = [];
      tags.push(this.ride.discipline);
      tags.push(this.ride.category);

      return tags;
    }
  }
};
</script>
