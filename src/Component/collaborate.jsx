import Wrapper from "../Component/wrapper";
import collaborate from "../assets/image/hero-chemxpert.png";

const Collaborate = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16 lg:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-center justify-between gap-10 lg:gap-20">
          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative pt-10 lg:pt-16">
            <img
              src={collaborate}
              alt="collaborate Illustration"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto rounded-lg shadow-2xl transition-transform duration-300 transform hover:scale-105"
            />
            <div className="absolute inset-0 rounded-lg border-1 border-transparent hover:border-black transition duration-300"></div>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 flex flex-col gap-8">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-pink-600">
              Collaborative Research <span className="text-red-400">"ChemXPERT"</span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-300 mx-auto lg:mx-0">
              At Labwox, we believe in the power of collaboration to advance
              knowledge and solve complex environmental and analytical challenges.
              We partner with academic institutions and industry leaders to conduct
              pioneering research across a range of specialized areas.
            </p>

            <div className="flex justify-start lg:justify-start sm:justify-start">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-block px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-600 hover:bg-neutral-900 text-white font-light text-sm rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Collaborate;
