import { motion } from "framer-motion";
import { FaFlask, FaMicroscope, FaVial, FaGlobe } from "react-icons/fa";

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
    title: "Environmental Contaminant Analysis",
    description: "Detect and quantify pollutants in air, soil, and water with cutting-edge methodologies.",
    icon: <FaGlobe className="text-gray-400 text-6xl" />,
  },
  {
    id: 4,
    title: "Phytochemical & Food Safety Testing",
    description: "Comprehensive training on natural compound identification and food/water safety assessment.",
    icon: <FaFlask className="text-gray-400 text-6xl" />,
  },
];

const TrainingSection = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold uppercase tracking-wide"
        >
          Elevate Your Expertise
        </motion.h2>
        <p className="text-2xl md:text-3xl mt-4 text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Labwox provides specialized analytical training for laboratories, industries, and academic institutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {trainingPrograms.map((program) => (
          <motion.div
            key={program.id}
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)" }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 p-10 rounded-xl shadow-lg flex flex-col items-center text-center border border-gray-700"
          >
            {program.icon}
            <h3 className="text-3xl font-semibold mt-6">{program.title}</h3>
            <p className="mt-4 text-lg text-gray-400">{program.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-800 text-white font-bold text-xl px-8 py-4 rounded-lg shadow-lg hover:bg-gray-700"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default TrainingSection;

