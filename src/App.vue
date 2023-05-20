<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
main {
  margin: 0 auto;
  max-width: 95%;
  min-height: 100vh;
  padding: 10px;
}
</style>
