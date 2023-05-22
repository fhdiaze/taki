<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { get, type Ride } from '../../composable/ride';

const props = defineProps({
  rideId: {
    type: String,
    required: true,
  }
});

let ride: Ride = ref(null);

onMounted(async () => ride = await get(props.rideId))
</script>

<template>
  <h3>In progress {{ ride.name }}</h3>
</template>
