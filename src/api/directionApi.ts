import axios from 'axios'

export const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoicmRneHoiLCJhIjoiY2xpbm1scnhlMG1iMjNsdGg5cXRiMGo4MCJ9.i3Pp79Om18SQ3JJL3D6zsg'
    }
})

export default directionsApi