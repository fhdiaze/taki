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
