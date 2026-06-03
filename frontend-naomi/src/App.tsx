import { useEffect, useState } from "react"

import { MovieCard } from "@/components/movie/MovieCard"
import { getPopularMovies } from "@/services/tmdb.service"
import type { Movie } from "@/types/movie"

function App() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    getPopularMovies()
      .then(setMovies)
      .catch(console.error)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-black">
            Cine<span className="text-red-500">SpoilerS</span>
          </h1>

          <nav className="flex gap-6 text-sm text-zinc-400">
            <a className="hover:text-white transition-colors">
              Cartelera
            </a>

            <a className="hover:text-white transition-colors">
              Mi carrito
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <h2 className="text-4xl font-black">
            🎬 Películas en{" "}
            <span className="text-red-500">
              Cartelera
            </span>
          </h2>

          <p className="mt-2 text-zinc-400">
            Descubre las películas más populares del momento.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App