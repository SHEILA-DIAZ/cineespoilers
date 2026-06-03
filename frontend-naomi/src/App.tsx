import { useEffect } from "react"

import { Button } from "@/components/ui/button"
import { getPopularMovies } from "@/services/tmdb.service"

function App() {
  useEffect(() => {
    getPopularMovies()
      .then((data) => console.log("Películas TMDB:", data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 bg-black/80 px-6 py-4">
        <h1 className="text-xl font-bold">
          🎟️ Cine<span className="text-red-500">SpoilerS</span>
        </h1>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-3xl font-bold">
          Bienvenido a <span className="text-red-500">CineSpoilerS</span>
        </h2>

        <Button variant="destructive" className="mt-4">
          Click me
        </Button>
      </section>
    </main>
  )
}

export default App