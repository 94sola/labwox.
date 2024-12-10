
import beverages from '../assets/image/beverages.jpg';
import Wrapper from '../Component/wrapper';

const HeavyMetals = () => {
    return (
        <Wrapper>
            {/* Header Section */}
            <div className="py-4 flex flex-col lg:flex-row items-start justify-between mt-5 gap-2">
                <div className="lg:w-1/2 px-2">
                    <h1 className="text-start text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold leading-tight text-gray-900 pt-14">
                        Analysis of Heavy Metals in Beverages by ICP-OES
                    </h1>
                    
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center lg:justify-end px-2">
                    <img
                        src={beverages}
                        alt="Beverages analysis by ICP-OES"
                        className="rounded-lg shadow-lg object-cover w-[90%] "
                    />
                </div>
            </div>

            {/* Navigation Section */}
            <div className=''>
                <header className="mt-16 w-full bg-gray-800 rounded-md shadow-md">
                    <nav className="flex justify-between items-center py-3 px-8 lg:py-2 xl:px-12">
                        <ul className="flex flex-wrap gap-2 md:gap-4 lg:gap-6 xl:gap-8 font-medium text-sm md:text-base lg:text-lg text-red-700">
                            {["Abstract", "Introduction", "Experimental", "Results and Discussion", "Conclusion", "Featured Products"].map((item) => (
                                <li
                                    key={item}
                                    className="hover:text-black text-red-500 transition-transform transform hover:scale-105 duration-300 hover:underline"
                                >
                                    <a href={`#${item.replace(/\s+/g, '-').toLowerCase()}`}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>

            
                <div className="py-14 w-[50%]">
                    <h4 className="mt-6 font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-gray-800 mb-4">
                        Introduction
                    </h4>
                    <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                        Nonalcoholic beverages serve as an essential food source for adults and children worldwide. Inductively Coupled Plasma-Optical Emission Spectrometry (ICP-OES) is a powerful tool for identifying harmful elemental pollutants in these beverages.
                    </p>
                    
                </div>

                <hr className="border-t-2 border-gray-300" />

                <div className="py-14  w-[50%]">
                    <h4 className="font-semibold text-lg sm:text-xl md:text-2xl text-gray-800 mb-4">Samples</h4>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
                        Packaged beverage samples were collected from vendors, filtered, and diluted 40:1 with Type 1 deionized water.
                    </p>
                    
                </div>

                <hr className="border-t-2 border-gray-300" />

                <div className='py-14'>
                    <h4 className="font-semibold text-lg sm:text-xl md:text-2xl text-gray-800 mb-4">
                        Table 1: Reagents and Consumables
                    </h4>
                    <div className="overflow-x-auto">
                        <table className="w-[41%] table-auto bg-white shadow-md rounded-lg overflow-hidden">
                            <thead className="bg-gray-400">
                                <tr>
                                    <th className="px-4 py-2 text-left text-sm md:text-base font-medium text-gray-700">CONSUMABLE</th>
                                    <th className="px-4 py-2 text-left text-sm md:text-base font-medium text-gray-700">MANUFACTURER</th>
                                    <th className="px-4 py-2 text-left text-sm md:text-base font-medium text-gray-700">CATALOG NUMBER</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="px-4 py-2 text-sm md:text-base text-gray-700">Agilent Calibration Mix Majors</td>
                                    <td className="px-4 py-2 text-sm md:text-base text-gray-700">Agilent, USA</td>
                                    <td className="px-4 py-2 text-sm md:text-base text-gray-700">6610030700</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-2 text-sm md:text-base text-gray-700">Agilent Calibration Mix2</td>
                                    <td className="px-4 py-2 text-sm md:text-base text-gray-700">Agilent, USA</td>
                                    <td className="px-4 py-2 text-sm md:text-base text-gray-700">6610030600</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-sm md:text-base text-gray-700">Type 1 Deionized Water</td>
                                    <td className="px-4 py-2 text-sm md:text-base text-gray-700">Scharlau, Spain</td>
                                    <td className="px-4 py-2 text-sm md:text-base text-gray-700">AG00152500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </Wrapper>
    );
};

export default HeavyMetals;
