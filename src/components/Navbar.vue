<template>
  <section class="navbar">
    <nav>
      <router-link :to="{ name: 'RideList' }">Ride</router-link>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'Navbar',
  setup() {
  }
};
</script>

<style>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
}

nav {
  align-items: center;
  font-weight: bold;
  max-width: 1200px;
  margin: 0 auto;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
