import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'

function App() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-white">
        Bienvenido a <span className="text-red-500">CineSpoilerS</span>
      </h1>
      <Button className="mt-4 bg-red-600 hover:bg-red-700 text-white">
        🎭 Spoilers Ocultos
      </Button>
    </Layout>
  )
}

export default App