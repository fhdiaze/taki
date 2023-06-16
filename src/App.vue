<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/TakiHeader.vue'
import Footer from '@/components/TakiFooter.vue'
</script>

<style scoped>
main {
  margin: 0 auto;
  max-width: 95%;
  min-height: 100vh;
  padding: 10px;
}
</style>
