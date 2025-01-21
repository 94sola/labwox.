import React, { useState } from "react";

const Chem = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const labItems = [
    {
      title: "Access World-Class Resources",
      content:
        "Partner with top-tier analytical laboratories.",
    },
    {
      title: "Leverage Expertise",
      content:
        "Collaborate with seasoned scientists skilled in method development and advanced analysis.",
    },
    {
      title: "Focus on Your Research",
      content:
        "Let us handle the technical and logistical challenges so you can concentrate on the science.",
    },
    {
        title: "Drive Innovation Without Financial Barriers:",
        content:
          "Chemxpert covers the costs of key research activities to ensure accessibility..",
      },
  ];

  const toggleLab = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    
      <div className="bg-black py-16 px-6 sm:px-12 lg:px-24">
        {/* Section Title and Accordion Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Title Section */}
          <div className="col-span-1 flex items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-white leading-snug">
              Why Choose Chemxpert?
            </h2>
          </div>

          {/* Accordion Section */}
          <div className="col-span-1 lg:col-span-2 font-serif bg-white text-black rounded-lg shadow-lg py-8 px-6">
            <ul className="space-y-6">
              {labItems.map((item, index) => (
                <li
                  key={index}
                  className="border border-black text-white rounded-lg overflow-hidden shadow-sm"
                >
                  {/* Accordion Header */}
                  <button
                    className="w-full text-left px-6 py-4 bg-black hover:bg-gray-200 hover:text-neutral-900 font-medium text-white flex justify-between items-center transition duration-300"
                    onClick={() => toggleLab(index)}
                  >
                    {item.title}
                    <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
                  </button>
                  {/* Accordion Content */}
                  {openIndex === index && (
                    <div className="px-6 py-4 bg-neutral-800 text-white font-normal text-base leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-12 border-t border-gray-700 w-full" />
      </div>
  );
};

export default Chem;
