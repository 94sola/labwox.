import hero from "../assets/image/heroImg.png";

function LandingPage() {
  return (
    <div className="bg-black text-white relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      ></div>

      {/* Overlay Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>

      {/* Text Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[75vh] text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-500 animate-fade-in">
            Unique Solutions for Research
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8 animate-fade-in delay-150 align-middle">
            Labwox is a premier science consulting firm dedicated to driving
            excellence in laboratory operations and collaborative research. Our
            mission is to empower academic and industrial laboratories with
            cutting-edge solutions and partnerships that streamline processes
            and push the boundaries of scientific discovery.
          </p>
          <button className="px-6 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition duration-300 animate-fade-in delay-300">
            Learn More
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

export default LandingPage;
