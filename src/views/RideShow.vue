<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import { get, type Ride } from '../../services/ride';

const props = defineProps({
  rideId: {
    type: String,
    required: true,
  }
});

let ride: Ref<Ride | null> = ref(null);

onMounted(async () => ride.value = await get(props.rideId))
</script>

<template>
  <h3>In progress {{ ride?.name }}</h3>
</template>
