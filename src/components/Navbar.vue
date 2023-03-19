<template>
  <section class="navbar">
    <nav>
      <router-link :to="{ name: 'RideList' }">Rides</router-link>
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
