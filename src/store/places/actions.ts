import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesState, StateInterface> = {
  getInitialLocation({ commit }) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => commit('setUserLocation', { lng: coords.longitude, lat: coords.latitude }),
      (error) => console.error(error)
    )
  }
}

export default actions;
