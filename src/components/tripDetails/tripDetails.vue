<template>
  <div v-if="isMapReady && distance && duration" class="card-container">
    <h4>Distance: {{ distance }} km</h4>
    <h4>Duration: {{ duration }} min</h4>
  </div>
</template>

<script>
import { useMapStore } from "@/composables/useMapStore";

export default {
  setup() {
    const { distance, duration, isMapReady } = useMapStore();

    return {
      distance,
      duration,
      isMapReady
    };
  },
};
</script>

<style>
.card-container {
  position: fixed;
  padding: 10px;
  bottom: 50px;
  right: 20px;
  border-radius: 10px;
  background-color: #fff;
  z-index: 99;
}
</style>
