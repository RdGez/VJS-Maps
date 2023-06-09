<template>
  <ul v-if="places.length > 0" class="list-group">
    <li
      v-for="place in places"
      :key="place.id"
      class="list-group-item"
      :class="{ active: activePlace === place.id }"
      @click="onPlaceClick(place)"
    >
      <h4>{{ place.text }}</h4>
      <p>{{ place.place_name }}</p>
      <button :class="place.id === activePlace ? 'btn' : 'btn-outline '">
        <img src="@/assets/location.svg" alt="Location" />
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { usePlacesStore } from "@/composables/usePlacesStore";
import { ref, watch } from "vue";
import { Feature } from "@/interfaces/places";
import { useMapStore } from '@/composables/useMapStore';

export default {
  name: "SearchResults",
  setup() {
    const { isLoadingPlaces, places } = usePlacesStore();
    const { map, setPlaceMarkers } = useMapStore()
    const activePlace = ref("");
    
    watch( places, (newPlaces) => {
      activePlace.value = ''
      setPlaceMarkers(newPlaces)
    })

    return {
      isLoadingPlaces,
      places,
      activePlace,
      onPlaceClick: (place: Feature) => {
        const [ lng, lat ] = place.center

        activePlace.value = place.id;
        map.value?.flyTo({
          center: [lng, lat],
          zoom: 12,
        });
      },
    };
  },
};
</script>

<style scoped>
.list-group {
  padding: 0;
  text-align: start;
  width: 100%;
}

.list-group-item {
  background-color: #fff;
  border: none;
  list-style: none;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 12px;
}

.list-group-item:hover {
  cursor: pointer;
  background-color: #ebebeb;
}
.list-group-item h4,
p {
  margin: 0;
}

.btn {
  margin-top: 10px;
  border: none;
  background-color: #42b983;
  width: 100%;
  padding: 5px;
}

.btn:hover {
  background-color: #3da26d;
  cursor: pointer;
}

.btn-outline {
  background-color: #fff;
  border: 1px solid #42b983;
  color: #42b983;
  margin-top: 10px;
  padding: 5px;
  width: 100%;
}

.btn-outline:hover {
  background-color: #3da26d;
  cursor: pointer;
}

.active {
  background-color: #ebebeb;
}
</style>
