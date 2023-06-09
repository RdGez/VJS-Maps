<template>
  <button v-show="isBtnReady" @click="onMyLocationClick" class="button">
    <img
      class="location-icon"
      src="@/assets/currentLocation.svg"
      alt="Current Location"
    />
  </button>
</template>

<script lang="ts">
import { useMapStore } from "@/composables/useMapStore";
import { usePlacesStore } from "@/composables/usePlacesStore";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "MyLocationBtn",
  setup() {
    const { userLocation, isUserLocationReady } = usePlacesStore()
    const { map, isMapReady } = useMapStore()

    return {
      isBtnReady: computed<boolean>(() => isUserLocationReady.value && isMapReady.value),
      onMyLocationClick: () => {
        if (isUserLocationReady.value) {
          map.value?.flyTo({
            center: userLocation.value,
            zoom: 15,
          });
        }
      }
    };
  },
});
</script>

<style scoped>
button {
  position: fixed;
  top: 20px;
  right: 30px;
}

.button {
  display: flex;
  justify-content: center;
  background-color: #fff;
  border: none;
  border-radius: 100%;
  height: 40px;
  width: 40px;
}

.button:hover {
  cursor: pointer;
  background-color: #cdcdcd;
}

.location-icon {
  align-self: center;
}
</style>
