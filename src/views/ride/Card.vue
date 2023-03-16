<template>
  <section class="cardContent">
    <h2 class="cardTitle">{{ ride.name }}</h2>
    <section class="cardTags">
      <span class="cardTag" v-for="tag in tags" :key="tag">{{ tag }}</span>
    </section>
    <p class="cardDesc">{{ ride.description }}</p>
  </section>

  <section class="cardFooter">
    <section class="cardFooterDate">
      {{ formatDateTime(ride.startAt) }}
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
      tags: ['race', 'hard'],
      link: 'te'
    };
  },
  methods: {
    formatDateTime(instant) {
      return moment(instant).format('YYYY/MM/DD HH:mm');
    }
  }
};
</script>
