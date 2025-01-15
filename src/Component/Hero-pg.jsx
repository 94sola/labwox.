import hero from "../assets/image/hero-bg.jpg";

function Hero() {
  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      ></div>

      {/* Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/20"></div>

      {/* Text Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 lg:px-8">
        <div className="max-w-7xl">
          <h1 className=" chem text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight font-serif mb-4 lg:mb-6 text-transparent bg-clip-text bg-white animate-fade-in">
            Advancing Science, Together
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 mb-6 lg:mb-8 animate-fade-in delay-150">
            We empower researchers with cutting-edge tools and collaborative opportunities to achieve breakthrough results.
          </p>
          <button className="px-3 md:px-4 py-1.5 md:py-2 bg-black text-white font-semibold rounded-full hover:bg-red-900 transition duration-300 text-base md:text-lg lg:text-xl mt-3">
          Start a Project
        </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-in-out forwards;
          }

          .delay-150 {
            animation-delay: 0.15s;
          }

          .delay-300 {
            animation-delay: 0.3s;
          }
        `}
      </style>
    </div>
  );
}

export default Hero;
