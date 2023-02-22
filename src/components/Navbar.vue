<template>
  <div class="navbar">
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'RaceFind' }">Race</router-link>
    </nav>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
  }
};
</script>

<style>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}

nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

nav .links {
  margin-left: auto;
}

nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
</style>
