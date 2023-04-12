<template>
  <section class="cards">
    <section class="card" v-for="ride in rides" :key="ride.id">
      <section class="header">
        <h2 class="title">{{ ride.name }}</h2>
        <h3 class="subtitle">{{ formatDateTime(ride.startAt) }}</h3>
        <section class="tags">
          <span class="tag" v-for="tag in assemblyTags(ride)" :key="tag">{{ tag }}</span>
        </section>
      </section>
      <section class="body">
        <p class="desc">{{ ride.description }}</p>
      </section>

      <section class="footer">
        <p>
          {{ ride.route.distance }} Km
        </p>
        <a class="website" :href="ride.website" target="_blank">
          {{ ride.website }}
        </a>
        <p>
          {{ ride.route.elevation }} m
        </p>
      </section>
    </section>
  </section>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    rides: {
      type: Array,
      required: true,
    }
  },
  methods: {
    formatDateTime(instant) {
      return moment(instant).format('YYYY/MM/DD HH:mm');
    },
    assemblyTags(ride) {
      const tags = [];
      tags.push(ride.discipline);
      tags.push(ride.category);

      return tags;
    }
  }
};
</script>

<style scoped>
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 1.5rem;
}

.card {
  width: 300px;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  background-color: #ffffff;
}

.card:hover {
  transform: scale(1.005);
  border: .1px solid #b217b4;
}

.card .header {
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  justify-content: space-between;
  width: 85%;
  margin-top: 1rem;
  cursor: pointer;
}

.card .header .title {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
  text-align: left;
  font-size: 1.25rem;
  margin-top: .5rem;
  margin-bottom: 0;
}

.card .header .subtitle {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
  text-align: left;
  font-size: 0.75rem;
  margin: 0;
}

.card .header .tags {
  text-align: left;
  margin: 5px 0;
}

.card .header .tags .tag {
  font-weight: 500;
  font-size: .8rem;
  --tw-text-opacity: 1;
  color: rgb(55 48 163 / var(--tw-text-opacity));
  border-radius: 9999px;
  margin-right: 0.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(224 231 255 / var(--tw-bg-opacity));
  padding-left: .75rem;
  padding-right: .75rem;
}

.card .body {
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  justify-content: space-between;
  width: 85%;
  cursor: pointer;
}

.card .body .desc {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
  text-align: left;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  margin-top: .5rem;
}

.card .footer {
  display: flex;
  font-size: small;
  justify-content: space-between;
  width: 85%;
  margin-bottom: .8rem;
}

.card .footer p {
  margin: 0;
}

.card .footer .website {
  flex-grow: 2;
  margin: 0;
}

.card:hover {
  transform: scale(1.05);
  border: .1px solid #b217b4;
}
</style>
