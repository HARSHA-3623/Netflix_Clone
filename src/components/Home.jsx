import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src="/Assets/Background.jpg"
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-black/60"></div>
        <div className="absolute top-0 left-0 w-full p-4 md:p-8">
          <div className="flex flex-row justify-between items-center max-w-[980px] mx-auto pt-8 lg:pt-0">
            <img
              src="/Assets/logo.svg"
              alt=""
              className="w-20 sm:w-28 md:w-40"
            />
            <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
              <div className="relative">
                <div className="flex items-center border border-white/40 rounded-md px-1 sm:px-2 md:px-3 py-1">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-white mr-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                  </svg>
                  <select className="bg-transparent text-white text-xs sm:text-sm md:text-base appearance-none pr-4 sm:pr-6 focus:outline-none">
                    <option value="en" className="bg-black">
                      English
                    </option>
                    <option value="hi" className="bg-black">
                      हिंदी
                    </option>
                  </select>
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 absolute right-1 sm:right-2 text-white pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <button
                onClick={() => navigate("/signin")}
                className="bg-red-600 text-white px-2 sm:px-3 md:px-4 py-1 md:py-2 rounded-md text-xs sm:text-sm md:text-base font-medium hover:bg-red-700 transition-colors"
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="mt-64 md:mt-28 text-center text-white max-w-[650px] mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:font-extrabold font-bold mb-4">
              Unlimited movies, TV shows and more
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-5 lg:text-xl lg:font-semibold">
              Starts at ₹149. Cancel at any time.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 lg:text-lg">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 max-w-[720px] mx-auto">
              <input
                type="email"
                placeholder="Email address"
                className="w-full sm:w-96 px-4 py-3 bg-black/40 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-gray-400"
              />
              <button className="w-full sm:w-auto whitespace-nowrap bg-red-600 text-white px-6 py-3 rounded-md text-lg md:text-2xl font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                Get Started
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
