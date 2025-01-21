import { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Habeebat Abdullahi",
    title: "Director, Laboratory Services",
    organisation: "Lagos State Environmental Protection Agency",
    text: "Labwox helped in upskilling key technical staff in GCMS and MPAES analyses and have continued to be of immense help in the development of key methodologies. They have been an absolutely reliable technical partner."
  },
  {
    id: 2,
    name: "David Ikenebome",
    title: "Director, Laboratory Services",
    organisation: "Standards Organization of Nigeria",
    text: "Labwox played a key role in helping us achieve international accreditation for pesticide residue analysis. The Labwox team has also been instrumental in developing several methodologies in the aspects of food contaminant testing."
  },
  {
    id: 3,
    name: "Dr Anifowoshe Adebanjo",
    title: "Department of Environmental Chemistry",
    organisation: "Osun State University",
    text: "Working with Labwox has helped my group accomplish our research goals. The Labwox team has always shown a strong grasp of their primary area of competence which has always aligned with our research interests. We've been able to publish several works with the guidance of the Labwox team."
  },
  {
    id: 4,
    name: "Prof. TA Adedosu",
    title: "Director, Laboratory Services",
    organisation: "Ladoke Akintola University of Technology Ogbomoso, Oyo State",
    text: "Labwox has shown very strong competence in aspects of GCMS relating to petroleum geochemistry. They have been instrumental in the analytical method development process necessary to execute modern research strategies."
  }
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const delay = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, delay);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center font-sans bg-black text-white py-16 px-4 md:px-12 lg:px-32 rounded-xl shadow-xl">
      <h1 className="text-6xl md:text-7xl font-bold mb-6 text-center">What Our Clients Say</h1>
      
      <div className="relative w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[index].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-white text-black p-8 md:p-10 rounded-lg shadow-xl text-center"
          >
            <h3 className="text-4xl font-bold text-gray-900">{testimonials[index].name}</h3>
            <p className="text-xl text-black">{testimonials[index].title}</p>
            <p className="text-2xl font-semibold text-gray-600">{testimonials[index].organisation}</p>
            
            <FaQuoteLeft className="text-gray-700 text-4xl mt-4" />
            <p className="text-lg md:text-xl italic mt-4">{testimonials[index].text}</p>
            <FaQuoteRight className="text-gray-700 text-4xl mt-4" />
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 md:h-4 md:w-4 rounded-full transition duration-300 ${i === index ? "bg-white" : "bg-gray-500"}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
