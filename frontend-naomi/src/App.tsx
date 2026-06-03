import { Button } from "@/components/ui/Button"

function App() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold text-white">
        Cine<span className="text-red-500">SpoilerS</span>
      </h1>

      <Button>
        Comprar Ticket
      </Button>
    </main>
  )
}

export default App