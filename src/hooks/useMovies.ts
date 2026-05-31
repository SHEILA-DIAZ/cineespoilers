import { useEffect, useState } from 'react'
import { tmdb } from '@/lib/tmdb'
import type { Movie, TMDBResponse } from '@/types/movie'

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    tmdb.get<TMDBResponse>('/movie/popular')
      .then(res => setMovies(res.data.results))
      .catch(() => setError('Error al cargar películas'))
      .finally(() => setLoading(false))
  }, [])

  return { movies, loading, error }
}