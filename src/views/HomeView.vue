<template>
  <MapView />
</template>

<script lang="ts">
import { usePlacesStore } from '@/composables/usePlacesStore';
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    MapView: defineAsyncComponent(() => import('@/components/mapView/MapView.vue')),
  },
  setup() {
    usePlacesStore();
  },
});
</script>
