<template>
  <section class="cards">
    <article class="card" v-for="ride in rides" :key="ride.id">
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
        <p class="distance">
          {{ ride.route.distance }} Km
        </p>
        <a class="website" :href="ride.website" target="_blank">
          {{ ride.website }}
        </a>
        <p class="elevation">
          {{ ride.route.elevation }} m
        </p>
      </section>
    </article>
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
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  grid-gap: 1.5rem;
  padding: 10px;
}

.card {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 40% 50% 10%;
  grid-template-areas:
    "header"
    "body"
    "footer";
  width: 320px;
  height: 250px;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
  padding: 10px;
}

.card * {
  min-width: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card *:hover {
    text-overflow: clip;
    white-space: normal;
    word-break: break-all;
    overflow: visible;
}

.card:hover {
  transform: scale(1.005);
  border: .1px solid #b217b4;
}

.card .header {
  display: grid;
  grid-area: "header";
  grid-template-columns: 100%;
  grid-template-rows: 50% 20% 30%;
  grid-template-areas:
    "title"
    "subtitle"
    "tags";
  cursor: pointer;
  text-align: left;
}

.card .header .title {
  grid-area: "title";
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
  text-align: left;
  font-size: 1.25rem;
  margin: 0 auto;
  white-space: pre-wrap;
}

.card .header .subtitle {
  grid-area: subtitle;
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
  text-align: left;
  font-size: 0.75rem;
  margin: 0;
}

.card .header .tags {
  grid-area: tags;
  text-align: left;
  margin: auto 0;
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-area: body;
  cursor: pointer;
}

.card .body .desc {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
  text-align: left;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  margin-top: .5rem;
  text-overflow: ellipsis;
}

.card .footer {
  display: grid;
  grid-area: footer;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 100%;
  grid-template-areas: "distance website elevation";
  font-size: small;
  text-align: center;
}

.card .footer .distance {
  margin: 0;
  grid-area: distance;
  text-align: left;
}

.card .footer .website {
  grid-area: website;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card .footer .elevation {
  margin: 0;
  grid-area: elevation;
  text-align: right;
}

.card:hover {
  transform: scale(1.05);
  border: .1px solid #b217b4;
}
</style>
