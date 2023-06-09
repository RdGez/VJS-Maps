<template>
  <div v-if="!isUserLocationReady" class="loading">
    <div class="spinner"></div>
  </div>

  <div v-show="isUserLocationReady" class="map-container" ref="mapElement" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { usePlacesStore } from "@/composables/usePlacesStore";
import { useMapStore } from "@/composables/useMapStore";
import Mapboxgl from "mapbox-gl";

export default defineComponent({
  name: "MapView",
  setup() {
    const mapElement = ref<HTMLDivElement>();
    const { isUserLocationReady, userLocation } = usePlacesStore();
    const { setMap } = useMapStore();

    const initMap = async () => {
      if (!mapElement.value) return;
      if (!userLocation.value) return;

      await Promise.resolve();
      const map = new Mapboxgl.Map({
        container: mapElement.value,
        style: "mapbox://styles/mapbox/dark-v11",
        center: userLocation.value,
        zoom: 15,
      });

      const myLocationMarker = new Mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .addTo(map);

      setMap(map);
    };

    onMounted(() => {
      if (isUserLocationReady) return initMap();
    });

    watch(
      isUserLocationReady,
      (isReady) => {
        if (isReady) initMap();
      },
      { immediate: true }
    );

    return {
      mapElement,
      isUserLocationReady,
    };
  },
});
</script>

<style scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top-color: #333;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
}

.map-container {
  width: 100%;
  height: 100vh;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
