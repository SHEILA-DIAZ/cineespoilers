import type { Movie } from "@/types/movie"

type Props = {
  movie: Movie
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"

export function MovieCard({ movie }: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:scale-[1.02]">
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="h-[340px] w-full object-cover"
      />

      <div className="space-y-2 p-4">
        <h3 className="line-clamp-1 text-sm font-semibold text-white">
          {movie.title}
        </h3>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            {movie.release_date?.split("-")[0]}
          </span>

          <span className="rounded-full bg-yellow-500 px-2 py-1 text-black font-bold">
            ⭐ {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </article>
  )
}