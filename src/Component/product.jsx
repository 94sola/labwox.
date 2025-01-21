import arrow from "../assets/image/right-arrow1.png";
import { Link } from "react-router-dom";
import method from "../assets/image/method.jpg";
import pollutant from "../assets/image/pollutant.jpg";
import food from "../assets/image/food-con.jpg";
import phyto from "../assets/image/phyto.jpg";

function Chemx() {
  const cards = [
    {
      to: "/mdv",
      title: "Method Development and Validation",
      img: method,
    },
    {
      to: "/pollutant",
      title: "Pollutants",
      img: pollutant,
    },
    {
      to: "/contaminant",
      title: "Food Contaminants",
      img: food,
    },
    {
      to: "/phyto",
      title: "Phytochemicals",
      img: phyto,
    },
  ];

  return (
    <div className="chemxpert text-white bg-black overflow-hidden pt-14 pb-7 flex-col items-center">
      {/* Header Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between py-8 px-6 sm:pr-12 md:pr-24 lg:pr-32 sm:pl-8 md:pl-20 lg:pl-24 bg-neutral-800 hover:bg-white hover:text-black font-sans transition duration-300 shadow-lg group">
        <div className="text-left">
          <h1 className="text-[60px] sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-loose">
            CHEMXPERT
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed mt-2">
            Advancing Research Through Collaboration
          </h2>
        </div>

        {/* Button & Arrow - Now at Start on Mobile */}
        <div className="flex items-center gap-8 mt-8 md:mt-0">
          <Link to="/lab">
            <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-white hover:text-black transition duration-300 text-base sm:text-lg lg:text-xl shadow-md">
              Learn More
            </button>
          </Link>
          <div className="transition duration-300 filter invert group-hover:invert-0">
            <img src={arrow} alt="right-arrow"  />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-12 px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Link
              key={index}
              to={card.to}
              className="block rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="relative group cursor-pointer">
                {/* Image */}
                <div
                  className="h-64 sm:h-72 md:h-80 lg:h-96 bg-cover bg-center rounded-md shadow-md transition duration-300 grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${card.img})` }}
                ></div>

                {/* Title Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-4 rounded-b-md transition-opacity duration-300 group-hover:bg-opacity-80">
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal pb-10 text-white flex items-center gap-2 group-hover:text-red-400">
                    {card.title}
                    <img src={arrow} alt="arrow" className="w-5 h-5 sm:w-7 sm:h-7 transition duration-300 filter invert" />
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chemx;
