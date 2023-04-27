<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>
main {
  margin: 0 auto;
  max-width: 95%;
  min-height: 100vh;
  padding: 10px;
}
</style>
