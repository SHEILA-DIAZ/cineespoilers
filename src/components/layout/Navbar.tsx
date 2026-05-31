import { Film } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Film className="text-red-500 w-6 h-6" />
          <span className="text-white font-bold text-xl tracking-tight">
            Cine<span className="text-red-500">Spoilers</span>
          </span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="/" className="hover:text-white transition-colors">Cartelera</a>
          <a href="/cart" className="hover:text-white transition-colors">🎟️ Mi carrito</a>
        </nav>
      </div>
      <Separator className="bg-zinc-800" />
    </header>
  )
}