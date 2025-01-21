import { motion } from "framer-motion";
import { FaFlask, FaMicroscope, FaVial, FaGlobe, FaClipboardCheck } from "react-icons/fa";

const trainingPrograms = [
  {
    id: 1,
    title: "Advanced Pesticide Analysis",
    description: "Precision training on pesticide residue detection using state-of-the-art analytical tools.",
    icon: <FaVial className="text-gray-400 text-6xl" />,
  },
  {
    id: 2,
    title: "Method Development & Validation",
    description: "Master the science of developing and validating robust analytical methods for accurate results.",
    icon: <FaMicroscope className="text-gray-400 text-6xl" />,
  },
  {
    id: 3,
    title: "Pollutant Research",
    description: "Detect and quantify pollutants in air, soil, and water with cutting-edge methodologies.",
    icon: <FaGlobe className="text-gray-400 text-6xl" />,
  },
  {
    id: 4,
    title: "Phytochemical Research",
    description: "Comprehensive training on natural compound identification and food/water safety assessment.",
    icon: <FaFlask className="text-gray-400 text-6xl" />,
  },
  {
    id: 5,
    title: "Food Contaminant Research",
    description: "Comprehensive insights into compliance standards, audit processes, and laboratory quality management systems.",
    icon: <FaClipboardCheck className="text-gray-400 text-6xl" />,
  },
];

const TrainingSection = () => {
  return (
    <section className="w-full bg-gray-950 text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold uppercase tracking-wide text-zinc-500"
        >
          Elevate Your Expertise
        </motion.h2>
        <p className="text-2xl md:text-3xl mt-4 text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Labwox provides specialized analytical training for laboratories, industries, and academic institutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        {trainingPrograms.map((program) => (
          <motion.div
            key={program.id}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 30px rgba(34, 36, 35, 0.041)" }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 p-10 rounded-2xl shadow-xl flex flex-col items-center text-center border border-gray-800 hover:border-neutral-400 transition-all duration-300"
          >
            {program.icon}
            <h3 className="text-3xl font-semibold mt-6 text-white">{program.title}</h3>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">{program.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="bg-zinc-600 text-white font-bold text-xl px-10 py-4 rounded-full shadow-lg hover:bg-neutral-500 transition-all duration-300"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default TrainingSection;
