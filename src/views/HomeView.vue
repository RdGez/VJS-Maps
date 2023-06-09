<template>
  <MapView />
  <MyLocationBtn />
  <SearchBar />
</template>

<script lang="ts">
import { usePlacesStore } from '@/composables/usePlacesStore';
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    MapView: defineAsyncComponent(() => import('@/components/mapView/MapView.vue')),
    MyLocationBtn: defineAsyncComponent(() => import('@/components/myLocationBtn/MyLocationBtn.vue')),
    SearchBar: defineAsyncComponent(() => import('@/components/searchBar/SearchBar.vue')),
  },
  setup() {
    usePlacesStore();
  },
});
</script>
