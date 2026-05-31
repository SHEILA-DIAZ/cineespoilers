import axios from 'axios'

export const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '68178dec4b90119c963b027af71742e1',
    language: 'es-PE',
  },
})