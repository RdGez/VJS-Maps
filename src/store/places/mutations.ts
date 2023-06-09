import { MutationTree } from 'vuex';
import { PlacesState } from './state';
import { Feature } from '@/interfaces/places';

interface ICoords {
  lng: number;
  lat: number;
}

const mutation: MutationTree<PlacesState> = {
  setUserLocation( state: PlacesState, { lng, lat }: ICoords ) {
    state.userLocation = [ lng, lat ];
    state.isLoading = false;
  },
  setLoadingPlaces( state: PlacesState ) {
    state.isLoadingPlaces = true;
  },
  setPlaces( state: PlacesState, places: Feature[] ) {
    state.places = places;
    state.isLoadingPlaces = false;
  }
}


export default mutation;