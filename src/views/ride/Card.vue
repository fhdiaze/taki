<template>
  <section class="cardContent">
    <h2 class="cardTitle">{{ ride.name }}</h2>
    <section class="cardTags">
      <span class="cardTag" v-for="tag in tags" :key="tag">{{ tag }}</span>
    </section>
    <p class="cardDesc">{{ ride.location.address }}</p>
  </section>

  <section class="cardFooter">
    <section class="cardFooterDate">
      {{ ride.location.region }}
    </section>
  </section>
</template>

<script>
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
  }
};
</script>
