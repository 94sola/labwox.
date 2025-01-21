import vision from "../assets/image/shared-vision.png";
import expert from "../assets/image/expert.png";
import analysis from "../assets/image/analysis.png";
import collaborative from "../assets/image/collaborationplaning.png";

const Chem = () => {
  return (
    <div className="bg-black px-6 md:px-12 pt-12 pb-8">
      {/* Title Section */}
      <div className="text-white text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          How Chemxpert Works
        </h2>
      </div>

      {/* Box Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Box 1 */}
        <div className="flex flex-col md:flex-row items-center bg-zinc-900 text-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gray-100 flex items-center justify-center rounded-xl p-4 w-20 h-20 md:w-24 md:h-24 mr-0 md:mr-6">
            <img
              src={vision}
              alt="Shared Vision"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Share Your Vision
            </h3>
            <p className="text-gray-400">
              Present your research idea or concept for consideration.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col md:flex-row items-center bg-zinc-900 text-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gray-100 flex items-center justify-center rounded-xl p-4 w-20 h-20 md:w-24 md:h-24 mr-0 md:mr-6">
            <img
              src={collaborative}
              alt="Collaborative Planning"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Collaborative Planning
            </h3>
            <p className="text-gray-400">
              We co-design the study, aligning our resources with your
              objectives.
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col md:flex-row items-center bg-zinc-900 text-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gray-100 flex items-center justify-center rounded-xl p-4 w-20 h-20 md:w-24 md:h-24 mr-0 md:mr-6">
            <img
              src={analysis}
              alt="Advanced Analysis"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Advanced Analysis
            </h3>
            <p className="text-gray-400">
              Gain access to leading laboratories and state-of-the-art
              instrumentation.
            </p>
          </div>
        </div>

        {/* Box 4 */}
        <div className="flex flex-col md:flex-row items-center bg-zinc-900 text-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gray-100 flex items-center justify-center rounded-xl p-4 w-20 h-20 md:w-24 md:h-24 mr-0 md:mr-6">
            <img
              src={expert}
              alt="Expert Support"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Expert Support
            </h3>
            <p className="text-gray-400">
              Receive guidance on method development, data interpretation, and
              more.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-14 border-t-gray-700 w-full" />
    </div>
  );
};

export default Chem;
