import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import movies from "../MoviesList";
import Moviecard from "../components/Moviecard";

function Feed() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    // Clear any auth tokens/state
    localStorage.removeItem('token');
    // Redirect to signin page
    navigate('/signin');
  };

  return (
    <>
      <div className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 bg-black/90 pt-12">
        <div className="flex flex-row justify-between items-center max-w-[1200px] mx-auto">
          <div className="flex items-center">
            <img src="/Assets/logo.svg" alt="" className="w-20 sm:w-28 md:w-32" />
          </div>
          <div className="relative">
            <div 
              className="flex items-center gap-1 sm:gap-2 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-red-600 flex items-center justify-center">
                <span className="text-white text-sm sm:text-xl font-medium">
                  {location?.state?.user?.name?.charAt(0) || "U"}
                </span>
              </div>
              <span className="text-white text-xs sm:text-base">
                {location?.state?.user?.name || "User"}
              </span>
              <svg 
                className={`w-2 h-2 sm:w-4 sm:h-4 text-white transition-transform ${showDropdown ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-32 sm:w-48 bg-black/95 border border-gray-800 rounded-md shadow-lg">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <h1 className="text-white text-md  sm:text-lg lg:text-2xl font-medium text-center px-6 py-2 sm:py-6">
        Welcome{" "}
        <span className="text-red-600">{location?.state?.user?.name},</span> Now
        you can watch your favorite movies
      </h1>

      <div className="w-full px-2 sm:px-4 md:px-8 py-4 sm:py-6 bg-black/90">
        <div className="mt-4 sm:mt-6 md:mt-8 pb-8 sm:pb-12">
          {Array.from(new Set(movies.flatMap((movie) => movie.genre))).map(
            (genre) => (
              <div key={genre} className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl text-red-600 font-medium mb-3 sm:mb-4 px-4 sm:px-8 text-center">
                  {genre}
                </h2>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4">
                  {movies
                    .filter((movie) => movie.genre.includes(genre))
                    .map((movie) => (
                      <Link 
                        key={movie.slug} 
                        to={`/${movie.slug}`}
                        className="transform transition-all duration-300 hover:scale-105 sm:hover:scale-105 hover:z-10 rounded-lg"
                      >
                        <Moviecard poster={movie.poster} title={movie.title} />
                      </Link>
                    ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Feed;
