import Mapboxgl from 'mapbox-gl';

export interface MapState {
  markers: Mapboxgl.Marker[];
  distance?: number;
  duration?: number;
  map?: Mapboxgl.Map;
}

function state(): MapState {
  return {
      map: undefined,
      markers: [],
      distance: undefined,
      duration: undefined
  }
}

export default state;