import { Link } from 'react-router-dom';
import Wrapper from "../Component/wrapper";
import environment from "../assets/image/environ.png";
import food from "../assets/image/food.png";
import phy from "../assets/image/phy.png";
import mdv from "../assets/image/mdv.png";

const Application = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen py-12 px-6 md:px-10 text-white">
      <Wrapper>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-700">
            Application Notes
          </h1>
        </div>

        {/* Content Section with Animated Line */}
        <div className="relative flex flex-row items-stretch justify-between gap-12 lg:gap-16 h-[600px] md:h-[700px]">
          {/* Left Column */}
          <div className="flex flex-col gap-12 w-full md:w-[45%] lg:w-[40%]">
            <Card
              imgSrc={environment}
              title="Environmental Pollutants"
              linkTo="/pollutant"
              description="Detect and quantify pollutants such as heavy metals, pesticides, VOCs, and SVOCs."
            />

            <Card
              imgSrc={mdv}
              title="Method Development and Validation"
              linkTo="/mdv"
              description="Tailored support for creating and refining analytical methods."
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-12 w-full md:w-[45%] lg:w-[40%]">
            <Card
              imgSrc={food}
              title="Food and Water Contaminants"
              linkTo="/contaminant"
              description="Comprehensive analysis of water contaminants, including THMs and heavy metals."
            />
            <Card
              imgSrc={phy}
              title="Phytochemical Characterization"
              linkTo="/phyto"
              description="Profiling plant materials for beneficial compounds and contaminants."
            />
          </div>

          {/* Animated Line Section */}
          <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1/12 flex items-center justify-center">
            <svg className="h-full w-full">
              {/* Animate the line across dots */}
              <line
                className="moving-line"
                x1="50%"
                y1="10%"
                x2="50%"
                y2="90%"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="6"
              />

              {/* Dots */}
              <circle className="animated-dot" cx="50%" cy="10%" r="8" />
              <circle className="animated-dot" cx="50%" cy="37%" r="8" />
              <circle className="animated-dot" cx="50%" cy="63%" r="8" />
              <circle className="animated-dot" cx="50%" cy="90%" r="8" />
            </svg>
          </div>
        </div>
      </Wrapper>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes line-animate {
          0% {
            stroke-dasharray: 200 200;
            stroke-dashoffset: 200;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        /* Animate the line only on Desktop */
        @media (max-width: 768px) {
          .moving-line {
            display: none; /* Hide line animation on mobile */
          }
        }

        /* Animate Line only for large devices */
        .moving-line {
          stroke-dasharray: 200 200;
          stroke-dashoffset: 200;
          animation: line-animate 3s ease-in-out forwards;
        }

        /* Bounce animation for dots */
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        /* Apply dot bounce effect with adjusted size */
        .animated-dot {
          fill: red;
          animation: bounce 1.5s ease-in-out infinite;
        }

        /* Responsiveness for screen sizes */
        @media (max-width: 768px) {
          .animated-dot {
            r: 6; /* Slightly smaller dots on mobile devices */
          }
        }

        /* Full responsive section */
        .graphics-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

/* Reusable Card Component */
const Card = ({ imgSrc, title, linkTo, description }) => (
  <div className="flex flex-col items-center text-center space-y-4">
    <img src={imgSrc} alt={title} className="w-20 md:w-24 h-auto" />
    <Link to={linkTo}>
      <h3 className="cursor-pointer text-xl md:text-2xl font-bold hover:text-gray-300 after:content-[''] after:block after:h-[2px] after:bg-red-600 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 after:mt-1">
        {title}
      </h3>
    </Link>
    <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xs">
      {description}
    </p>
  </div>
);

export default Application;
