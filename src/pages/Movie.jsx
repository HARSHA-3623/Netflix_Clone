import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useState } from "react";
import movies from "../MoviesList";

function Movie() {
  const { slug } = useParams();
  const movie = movies.find((m) => m.slug === slug);
  const [isMuted, setIsMuted] = useState(true);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="relative h-screen bg-black overflow-hidden pb-16 sm:pb-20">
      {/* Background Trailer */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full scale-125 sm:scale-135">
          <ReactPlayer
            url={movie.trailer}
            playing={true}
            loop={true}
            muted={isMuted}
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            config={{
              youtube: {
                playerVars: {
                  controls: 0,
                  modestbranding: 1,
                  showinfo: 0,
                  rel: 0,
                  cc_load_policy: 0,
                },
              },
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        {/* Mute/Unmute Button */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-20 sm:bottom-24 right-4 sm:right-8 z-20 text-white hover:scale-110 transition-transform"
        >
          {isMuted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06M6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
              <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
              <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11" />
            </svg>
          )}
        </button>
      </div>

      {/* Header */}
      <div className="relative z-10 w-full px-4 sm:px-8 py-4 sm:py-6">
        <Link to="/feed" className="text-white hover:text-red-600">
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
      </div>

      {/* Movie Info */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-16 sm:pb-20 px-4 sm:px-8 max-w-[800px]">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-2 sm:mb-4">
          {movie.title}
        </h1>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base text-white/80 mb-3 sm:mb-6">
          <span>{movie.releaseYear}</span>
          <span className="hidden sm:inline">•</span>
          <span>{movie.duration}</span>
          <span className="hidden sm:inline">•</span>
          <span>{movie.language}</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-yellow-400">IMDb {movie.imdbRating}</span>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {movie.genre.map((g) => (
            <span
              key={g}
              className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 text-white rounded-full text-xs sm:text-sm"
            >
              {g}
            </span>
          ))}
        </div>
        <button className="inline-flex items-center gap-1.5 sm:gap-2 bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-red-700 transition-colors w-fit text-sm sm:text-base">
          <span>Play Now</span>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Movie;
