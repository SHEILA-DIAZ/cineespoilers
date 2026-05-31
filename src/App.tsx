import { Layout } from '@/components/layout/Layout'
import { MovieCard } from '@/components/ui/MovieCard'
import { useMovies } from '@/hooks/useMovies'

function App() {
  const { movies, loading, error } = useMovies()

  if (loading) return (
    <Layout>
      <p className="text-zinc-400 text-center mt-20">Cargando películas...</p>
    </Layout>
  )

  if (error) return (
    <Layout>
      <p className="text-red-500 text-center mt-20">{error}</p>
    </Layout>
  )

  return (
    <Layout>
      <h2 className="text-2xl font-bold text-white mb-6">
        🎬 Películas en <span className="text-red-500">Cartelera</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </Layout>
  )
}

export default App