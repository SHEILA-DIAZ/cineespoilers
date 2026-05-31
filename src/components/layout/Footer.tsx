import { Film } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="mt-auto">
      <Separator className="bg-zinc-800" />
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between text-zinc-500 text-sm">
        <div className="flex items-center gap-2">
          <Film className="w-4 h-4 text-red-500" />
          <span>CineSpoilerS © 2025</span>
        </div>
        <span>Powered by TMDB</span>
      </div>
    </footer>
  )
}