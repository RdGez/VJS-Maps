import { StateInterface } from "@/store"
import { computed } from "vue"
import { useStore } from "vuex"
import Mapboxgl from 'mapbox-gl';
import { Feature } from "@/interfaces/places";
import { LngLat } from "@/store/map/actions";

export const useMapStore = () => {
    const store = useStore<StateInterface>()

    return {
        map: computed(() => store.state.map.map),
        distance: computed(() => store.state.map.distance),
        duration: computed(() => store.state.map.duration),
        isMapReady: computed(() => store.getters["map/isMapReady"]),
        setMap: (map: Mapboxgl.Map) => store.commit("map/setMap", map),
        setPlaceMarkers: (placeMarkers: Feature[]) => store.commit("map/setPlaceMarkers", placeMarkers),
        getRouteBetweenPoints: (start: LngLat, end: LngLat) => store.dispatch("map/getRouteBetweenPoints", { start, end }),
    }
}