<template>
  <div v-show="isMapReady" class="search-bar">
    <input
      type="text"
      placeholder="Search place..."
      class="form-control"
      v-model="searchTerm"
    />
    <SearchResults />
  </div>
</template>

<script>
import { computed, defineAsyncComponent, ref } from 'vue';
import { useMapStore } from '@/composables/useMapStore';
import { usePlacesStore } from '@/composables/usePlacesStore';

export default {
  name: "SearchBar",
  components: {
    SearchResults: defineAsyncComponent(() => import('@/components/searchResults/SearchResults.vue')),
  },
  setup() {
    const { searchPlaces } = usePlacesStore()
    const { isMapReady } = useMapStore()
    const deboucedTimeout = ref()
    const debouncedValue = ref('')
    
    return {
      isMapReady,
      searchTerm: computed({
        get: () => debouncedValue.value,
        set: (value) => {
          if (deboucedTimeout.value) clearTimeout(deboucedTimeout.value)
          deboucedTimeout.value = setTimeout(() => {
            searchPlaces(value)
          }, 800);
        },
      }),
    };
  },
};
</script>

<style scoped>
.search-bar {
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 999;
  width: 322px;
}

.search-bar input {
  width: 300px;
  height: 30px;
  padding: 0 10px;
  border-radius: 5px;
}

.search-bar input:focus {
  box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  outline: solid rgb(13 110 253 / 25%);
}
</style>
