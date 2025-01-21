import xpert from "../assets/image/xpert1.jpg";
import Wrapper from "./wrapper";

const Chem = () => {
  return (
    <Wrapper>
      <div className="bg-black px-6 md:px-12 py-12">
        {/* Container with two side-by-side sections */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          {/* Section 1 */}
          <div className="bg-gray-50 pt-8 w-full lg:w-[45%] rounded-lg shadow-2xl">
            {/* Text Section */}
            <div className="px-6">
              <h3 className="text-3xl md:text-4xl font-bold font-serif text-gray-800 mb-6">
                Pollutant Analysis
              </h3>
              <p className="text-gray-700 mb-8 text-lg md:text-xl font-serif leading-relaxed">
                Design layouts with a powerful yet intuitive UI. Transform your
                creative vision into reality, from pixel-perfect adjustments to
                dynamic animations.
              </p>
            </div>

            {/* Image Section */}
            <div className="relative group rounded-lg overflow-hidden shadow-lg">
              <img
                className="object-cover w-full h-64 md:h-80"
                alt="xpert1"
                src={xpert}
              />
              <div className="absolute inset-0 bg-black/50 flex items-end pb-4 justify-center">
                <a
                  href="/pollutant"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-lg md:text-xl font-semibold hover:underline"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Section 2 (Same functionality as Section 1) */}
          <div className="bg-gray-50 pt-8 w-full lg:w-[45%] rounded-lg shadow-2xl">
            {/* Text Section */}
            <div className="px-6">
              <h3 className="text-3xl md:text-4xl font-bold font-serif text-gray-800 mb-6">
                Water Quality Testing
              </h3>
              <p className="text-gray-700 mb-8 text-lg md:text-xl font-serif leading-relaxed">
                Ensure accurate water quality assessments with advanced tools
                and data-driven insights to maintain environmental compliance.
              </p>
            </div>

            {/* Image Section */}
            <div className="relative group rounded-lg overflow-hidden shadow-lg">
              <img
                className="object-cover w-full h-64 md:h-80"
                alt="xpert1"
                src={xpert}
              />
              <div className="absolute inset-0 bg-black/50 flex items-end pb-4 justify-center">
                <a
                  href="/water-quality"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-lg md:text-xl font-semibold hover:underline"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Chem;
