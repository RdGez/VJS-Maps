import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/api';
import { Feature, PlacesResponse } from '@/interfaces/places';


const actions: ActionTree<PlacesState, StateInterface> = {
  getInitialLocation({ commit }) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => commit('setUserLocation', { lng: coords.longitude, lat: coords.latitude }),
      (error) => console.error(error)
    )
  },
  async searchPlaces({ commit, state }, query: string): Promise<Feature[]> {
    if (query.length < 3) {
      commit('setPlaces', [])
      return []
    }
    if (!state.userLocation) throw new Error('User location not set')
    
    commit('setLoadingPlaces')
    const { data } = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation?.join(','),
      }
    })

    commit('setPlaces', data.features)
    return data.features
  }
}

export default actions;
