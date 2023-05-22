<script setup lang="ts">
import { ref } from 'vue';
import * as ride from '../../composable/ride';

const props = defineProps({
  rideId: {
    type: Number,
    required: true,
  }
});

const race = ref(null);
</script>

<template></template>
