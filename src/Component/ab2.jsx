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
        "We embrace new technologies and approaches to analytical chemistry, and we are committed to continuously improving our practices and services.",
      imgSrc: ab2a,
    },
    {
      alt: "How We Do This",
      title: "How We Do This",
      description:
        "Labwox aggregates the services of a network of commercial analytical laboratories and provides a one-stop shop for scientists and professionals who require analytical testing services to support their work.",
      imgSrc: ab2a,
    },
  ];

  return (
    <div className="font-serif py-12 px-4 sm:px-8 lg:px-16 bg-black text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif leading-tight">
          Explore Our Core Values
        </h1>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-gray-100 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
          >
            {/* Card Image */}
            <img
              src={card.imgSrc}
              alt={card.alt}
              className="w-full h-48 object-cover"
            />

            {/* Card Text */}
            <div className="py-6 px-6 text-black">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
                {card.title}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Callout Section */}
      <div className="bg-white text-black mx-auto mt-16 p-10 sm:p-16 lg:p-20 rounded-lg max-w-6xl">
        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-medium text-center leading-relaxed">
          We enable greatness in analytical research everywhere.
        </h3>
      </div>

      {/* Horizontal Line */}
      <hr className="mt-12 border-t-gray-600" />
    </div>
  );
};

export default Ab2;
