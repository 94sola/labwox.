import arrow from "../assets/image/down-arrow.png";
import collaboration from "../assets/image/collaboration.png";
import network from "../assets/image/network.png";
import support from "../assets/image/support.png";

const WhyPartner = () => {
  return (
    <div className="bg-neutral-900 min-h-screen font-sans text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center relative">
      {/* Horizontal Line Across the Top */}
      <hr className="absolute top-0 left-0 w-full border-t-2 border-gray-500" />

      {/* Left Section: Title & Description */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
          Why Partner <br /> with Us
        </h1>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md">
          Discover how our expertise and resources can elevate your projects and ensure exceptional results.
        </p>
      </div>
         {/* Vertical Divider Connected to Horizontal Line */}
      <div className="hidden md:block absolute top-0 left-1/2 w-[2px] -mx-28 bg-gray-500 h-full"></div>

      {  /* Right Section: Features */} 
      {/* Right Section: Features with Arrow Divider */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-12 mt-10 md:mt-0">
        {[{
            img: support,
            title: "Technical Expertise",
            desc: "Our team brings deep knowledge and practical experience in analytical chemistry, environmental science, and laboratory operations."
          },
          {
            img: network,
            title: "Comprehensive Network",
            desc: "Leveraging our established network of state-of-the-art laboratory facilities, we deliver precise, reliable results."
          },
          {
            img: collaboration,
            title: "Collaborative Approach",
            desc: "We work alongside your team, fostering joint publications, grant applications, and impactful research outcomes."
          }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <img
              src={item.img}
              alt={item.title}
              className="w-28 md:w-32 h-auto transform hover:scale-110 transition duration-300"
            />
            <h3 className="text-3xl font-bold text-white">{item.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              {item.desc}
            </p>

            {/* Image Arrow Divider Between Sections */}
            {index < 2 && (
              <div className="flex justify-center items-center my-6">
                <img src={arrow} alt="Arrow Divider" className="w-10 md:w-12 h-auto opacity-60" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyPartner;
