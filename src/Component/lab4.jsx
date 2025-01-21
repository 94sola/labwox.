import React, { useState } from "react";

const Lab4 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const labItems = [
    {
      title: "Project Management Made Easy",
      content:
        "Organize your lab’s activities seamlessly with tools for task delegation, progress tracking, and deadline management.",
    },
    {
      title: "Streamlined Reporting",
      content:
        "Generate comprehensive reports with a few clicks, ensuring accuracy and professional presentation every time.",
    },
    {
      title: "Data Security and Compliance",
      content:
        "Labsoft ensures your data is secure and complies with industry standards for quality assurance and reporting.",
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug">
            Why Choose Labsoft?
          </h2>
        </div>

        {/* Accordion Section */}
        <div className="col-span-1 lg:col-span-2 bg-white text-black rounded-lg shadow-lg py-8 px-6">
          <ul className="space-y-6">
            {labItems.map((item, index) => (
              <li
                key={index}
                className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
              >
                {/* Accordion Header */}
                <button
                  className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 font-medium text-black flex justify-between items-center transition duration-300"
                  onClick={() => toggleLab(index)}
                >
                  {item.title}
                  <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
                </button>
                {/* Accordion Content */}
                {openIndex === index && (
                  <div className="px-6 py-4 bg-white text-gray-800 text-lg leading-relaxed">
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

export default Lab4;
