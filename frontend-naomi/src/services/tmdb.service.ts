import type { Movie } from "@/types/movie"

const TMDB_BASE_URL = import.meta.env.VITE_TMDB_BASE_URL
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY

type TMDBResponse = {
  results: Movie[]
}

export async function getPopularMovies(): Promise<Movie[]> {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=es-ES&page=1`
  )

  if (!response.ok) {
    throw new Error("Error al obtener películas")
  }

  const data: TMDBResponse = await response.json()

  return data.results
}