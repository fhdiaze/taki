<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    Navbar,
    Header,
    Footer,
  },
};
</script>

<style>
main {
  margin: 0 auto;
  max-width: 95%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main section {
  padding: 10px;
}
</style>
