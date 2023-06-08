import { MutationTree } from 'vuex';
import { PlacesState } from './state';

interface ICoords {
  lng: number;
  lat: number;
}

const mutation: MutationTree<PlacesState> = {
  setUserLocation( state: PlacesState, { lng, lat }: ICoords ) {
    state.userLocation = [ lng, lat ];
    state.isLoading = false;
  }
}


export default mutation;