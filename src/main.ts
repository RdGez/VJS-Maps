import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl';

if ( !navigator.geolocation ) throw new Error('Geolocation is not available')

const { VUE_MAP_BOX_KEY } = process.env
mapboxgl.accessToken = VUE_MAP_BOX_KEY

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
