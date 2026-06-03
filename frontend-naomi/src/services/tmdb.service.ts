const TMDB_BASE_URL = import.meta.env.VITE_TMDB_BASE_URL
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY

export async function getPopularMovies() {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=es-ES&page=1`
  )

  if (!response.ok) {
    throw new Error("Error al obtener películas")
  }

  return response.json()
}