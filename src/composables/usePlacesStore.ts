import { StateInterface } from "@/store"
import { computed, onMounted } from "vue"
import { useStore } from "vuex"

export const usePlacesStore = () => {
  const store = useStore<StateInterface>()
  
  onMounted(() => {
    if (!store.getters["places/isUserLocationReady"]) {
      store.dispatch("places/getInitialLocation")
    }
  })

  return {
    places: computed(() => store.state.places.places ),
    isLoading: computed(() => store.state.places.isLoading ),
    userLocation: computed(() => store.state.places.userLocation ),
    isLoadingPlaces: computed(() => store.state.places.isLoadingPlaces ),
    isUserLocationReady: computed(() => store.getters["places/isUserLocationReady"] ),
    searchPlaces: (query: string) => store.dispatch("places/searchPlaces", query),
  }
}
