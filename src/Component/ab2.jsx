//import React from "react";
import ab2a from "../assets/image/ab2a.png";

const Ab2 = () => {
  const cards = [
    {
      alt: "Our Goal",
      title: "Our Goal",
      description:
        "We aim to help African scientists and researchers produce better research and improve their proficiency in the chemical sciences.",
      imgSrc: ab2a,
    },
    {
      alt: "Our Vision",
      title: "Our Vision",
      description:
        "Labwox is poised to offer science professionals a research method for scientists which opens up new vistas for training and analytical testing.",
      imgSrc: ab2a,
    },
    {
      alt: "How We Do This",
      title: "How We Do This",
      description:
        "Labwox aggregates the services of a network of commercial analytical laboratories and provides a one-stop shop for scientists and professionals who require analytical testing services to support their work.",
      imgSrc: ab2a,
    },
    {
      alt: "Our Careers",
      title: "Our Careers",
      description:
        "We are committed to providing the best possible care for researchers, and we believe that the following values are essential to achieving that goal.",
      imgSrc: ab2a,
    },
    {
      alt: "Investor Relations",
      title: "Investor Relations",
      description:
        "Profitability and growth give us the freedom to fulfill our mission and vision.",
      imgSrc: ab2a,
    },
    {
      alt: "Corporate Responsibility Report",
      title: "Corporate Responsibility Report",
      description:
        "Our commitment to sustainability and good corporate citizenship.",
      imgSrc: ab2a,
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Explore Our Core Values</h1>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="clickable-card flex flex-col justify-between bg-gray-100 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Card Text */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>

            {/* Card Image */}
            <div>
              <img
                src={card.imgSrc}
                alt={card.alt}
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Horizontal Line */}
      <hr className="mt-12 border-t-2 border-gray-300" />
    </section>
  );
};

export default Ab2;
