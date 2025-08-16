import { CircleUser } from "lucide-react";
import { Settings } from "lucide-react";

const HomePage = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat font-sans text-white p-4 sm:p-6 md:p-8"
      style={{
        backgroundImage: `url('/HomeBg.jpg')`,
        textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0  bg-opacity-50 z-0"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between max-w-7xl mx-auto">
        {/* Sticky Header/Navbar */}
        <header className="fixed top-0 left-0 right-0 w-full flex justify-between items-center py-4 px-6 z-20  backdrop-blur-sm">
          <div className="flex items-center space-x-4 group cursor-pointer">
            <CircleUser className="h-8 w-8 text-white group-hover:text-cyan-300 transition-colors duration-300" />
            <span className="text-xl font-bold tracking-wider group-hover:text-cyan-300 transition-colors duration-300">
              Dhoni
            </span>
          </div>
          <nav className="flex items-center space-x-6 md:space-x-10 text-lg">
            <a
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Rules
            </a>
            <a
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Tutorial
            </a>
            <a
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <Settings />
            </a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center w-full text-center">
          <div className="flex flex-col space-y-6">
            <button className="px-8 py-3 bg-transparent border-2 border-cyan-400 rounded-lg text-2xl font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,255,255,0.8)]">
              Play with AI
            </button>

            <button className="px-6 py-1.5 bg-transparent border-2 border-cyan-400 rounded-lg text-xl font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,255,255,0.8)]">
              Change Mode
            </button>
          </div>
        </main>

        {/* Empty div to balance flexbox since footer is removed */}
        <div className="w-full py-4 px-6 invisible"></div>
      </div>
    </div>
  );
};

export default HomePage;
