import { ActionTree } from 'vuex';
import { MapState } from './state';
import { StateInterface } from '../index';
import { directionsApi } from '@/api';
import { DirectionsResponse } from '@/interfaces/directions';

export type LngLat = [number, number];

const actions: ActionTree<MapState, StateInterface> = {
    async getRouteBetweenPoints( { commit }, { start, end } ) {
        const { data } = await directionsApi.get<DirectionsResponse>(`/${start.join(',')};${end.join(',')}`);
        commit('setRoutePolyline', data.routes[0].geometry.coordinates);
        commit('setDistanceDuration', {
            distance: data.routes[0].distance,
            duration: data.routes[0].duration
        })
    }
}

export default actions;
