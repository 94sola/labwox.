import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cre from "../assets/image/IMG-20241016-WA0002.jpg";
import pre from "../assets/image/IMG-20241016-WA0003.jpg";
import pri from "../assets/image/IMG-20241016-WA0004.jpg";
import nur from "../assets/image/IMG-20241016-WA0005.jpg";
import after from "../assets/image/IMG-20241016-WA0006.jpg";
import crea from "../assets/image/IMG-20241016-WA0007.jpg";
import nurs from "../assets/image/IMG-20241016-WA0008.jpg";
import afters from "../assets/image/IMG-20241016-WA0009.jpg";
import prise from "../assets/image/IMG-20241016-WA0010.jpg";
import afte from "../assets/image/IMG-20241016-WA0011.jpg";
import creas from "../assets/image/IMG-20241016-WA0012.jpg";


const images = [crea, nurs, afters, afte, creas, prise, cre, after, pri, nur, pre];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="bg-white py-16 px-6 sm:px-10 lg:px-16 min-h-screen flex flex-col items-center">
            {/* Section Header */}
            <motion.h1 
                className="text-6xl sm:text-7xl font-bold text-black text-center mb-12 relative inline-block"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Our Media
            </motion.h1>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
                {images.map((image, index) => (
                    <motion.div 
                        key={index} 
                        className="overflow-hidden rounded-lg shadow-lg relative cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        onClick={() => setSelectedImage(image)}
                    >
                        <motion.img 
                            src={image} 
                            alt="Gallery Image" 
                            className="w-full h-60 object-cover transition-transform duration-700 transform hover:scale-110"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Fullscreen Image */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50 cursor-pointer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img 
                            src={selectedImage} 
                            alt="Fullscreen" 
                            className="w-auto h-full max-h-screen object-contain"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
