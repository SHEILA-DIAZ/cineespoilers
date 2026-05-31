import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import { tmdb } from '@/lib/tmdb'

function App() {
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await tmdb.get('/movie/popular')
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching popular movies:', error)
      }
    }

    fetchPopularMovies()
  }, [])

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-white">
        Bienvenido a <span className="text-red-500">CineSpoilerS</span>
      </h1>
      <Button className="mt-4 bg-red-600 hover:bg-red-700 text-white">
        Click me
      </Button>
    </Layout>
  )
}

export default App