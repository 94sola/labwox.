import Wrapper from "./wrapper";

const Lab3 = () => {
  const cards = [
    {
      href: "https://resources.franklincovey.com/c/brief-franklincovey?x=3Zbqrh&lb-mode=overlay",
      bgColor: "bg-gray-600",
      title: "A Brief LabSoft Overview",
      text: "Discover how LabSoft has revolutionized laboratory operations for professionals across Nigeria, delivering advanced analytical solutions to enhance efficiency and accuracy.",
      img: "https://www.franklincovey.com/wp-content/uploads/2024/07/brief-fc-overview_310x230.jpg",
    },
    {
      href: "https://resources.franklincovey.com/c/develop-leaders-at-a?x=3Zbqrh&lb-mode=overlay",
      bgColor: "bg-red-600",
      title: "Enhance Expertise at All Levels with LabSoft",
      text: "LabSoft’s comprehensive solutions, including ongoing analytical support and reporting journeys, provide tailored insights and workflows delivered through diverse platforms to meet the unique needs of laboratory professionals.",
      img: "https://www.franklincovey.com/wp-content/uploads/2024/06/develop-leaders_310x230.jpg",
    },
    {
      href: "https://resources.franklincovey.com/c/enhance-existing-str?x=3Zbqrh&lb-mode=overlay",
      bgColor: "bg-blue-400",
      title: "Optimize Current Workflows with LabSoft",
      text: "See how LabSoft’s data-driven approach fosters lasting improvements, providing customizable solutions for diverse laboratory needs.",
      img: "https://www.franklincovey.com/wp-content/uploads/2024/06/enhance-existing-strategies_310x230.jpg",
    },
    {
      href: "https://resources.franklincovey.com/c/impact-admin-platform-overview?x=3Zbqrh&lb-mode=overlay",
      bgColor: "bg-purple-500",
      title: "LabSoft Analytics & Admin Platform Overview",
      text: "Discover how LabSoft’s Analytics Platform transforms laboratory processes with automated reporting, real-time insights, and customizable workflows.",
      img: "https://www.franklincovey.com/wp-content/uploads/2024/06/impact-platform_310x230.jpg",
    },
  ];

  return (
    <Wrapper>
      <div className="bg-black text-white py-12 px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Learn more about ${card.title}`}
              className={`block p-4 sm:p-6 ${card.bgColor} rounded-lg shadow-lg hover:shadow-xl transition duration-300`}
            >
              <div className="flex flex-col justify-between h-full">
                <h2 className="text-lg sm:text-xl font-bold mb-4">{card.title}</h2>
                <p className="text-sm sm:text-base mb-4">{card.text}</p>
                <div
                  className="h-48 sm:h-56 lg:h-64 bg-cover bg-center bg-no-repeat rounded-md shadow-md"
                  style={{ backgroundImage: `url(${card.img})` }}
                ></div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-white mt-12">
          <hr className="my-12 border-t-gray-800 w-full" />
          <h2 className="font-serif font-medium text-xl sm:text-3xl lg:text-3xl xl:text-4xl leading-snug">
            The LabSoft App addresses critical challenges faced by laboratory professionals by streamlining the generation of analytical reports post-analysis. It empowers lab managers to enhance their impact by delivering precise, actionable insights to clients with efficiency, all while providing a seamless and intuitive user experience.
          </h2>
        </div>
      </div>
      <hr className="mt-10 border-t-gray-800 w-full" />
    </Wrapper>
  );
};

export default Lab3;
