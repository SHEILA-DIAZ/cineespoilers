import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import type { Movie } from '@/types/movie'

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-red-500 transition-all cursor-pointer group overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-black/70 text-yellow-400 border-0">
            ⭐ {movie.vote_average.toFixed(1)}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-white font-semibold text-sm truncate">{movie.title}</h3>
        <p className="text-zinc-400 text-xs mt-1">{movie.release_date?.slice(0, 4)}</p>
      </CardContent>
    </Card>
  )
}