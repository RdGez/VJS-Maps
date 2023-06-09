import axios from 'axios'

export const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'en',
        access_token: 'pk.eyJ1IjoicmRneHoiLCJhIjoiY2xpbm1scnhlMG1iMjNsdGg5cXRiMGo4MCJ9.i3Pp79Om18SQ3JJL3D6zsg'
    }
})

export default searchApi