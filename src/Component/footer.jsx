import { Link } from 'react-router-dom';
import Wrapper from './wrapper';
import arrow  from  '../assets/image/right-arrow.png'
import facebook  from  '../assets/image/facebook.png'
import linkedin from  '../assets/image/linkedin.png'
import  instagram from  '../assets/image/instagram.png'


const Footer = () => {
    return (
        <div className='bg-black'>
            <Wrapper>
                <footer className="bg-black text-white px-2 sm:px-12 lg:px-24 py-8 sm:py-12 lg:py-16">
                    <div className="flex flex-col lg:flex-row justify-between gap-12">
                        <div className="flex-1">
                            <Link to="/">
                                <p className="par text-3xl font-bold sm:text-2xl">
                                    labwox<span className="text-red-600 text-4xl font-extrabold sm:text-2xl">.</span>
                                </p>
                            </Link>
                            <h1 className="text-2xl lg:text-4xl font-bold mt-6">
                                Expanding <span className="text-red-600 italic">Research</span> Frontiers
                            </h1>
                            <p className="text-white/50 mt-4">
                                © Labwox Limited, all rights reserved. <br />
                                Registered office: 2B Awori Close, Akora Villas off Adeniyi Jones, Ikeja, Lagos
                            </p>
                            <div className="mt-4 space-x-4">
                                <a href="#privacy" className="underline">Privacy Policy</a>
                                <a href="#terms" className="underline">Terms & Conditions</a>
                            </div>
                        </div>

                        {/* Links Section */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Company Links */}
                            <div>
                                <h2 className="text-lg font-bold">Company</h2>
                                <ul className="mt-2 text-white/50 space-y-2">
                                    <li><a href="#/about" className="hover:text-white">About Us</a></li>
                                    <li><a href="#/services" className="hover:text-white">Services</a></li>
                                    <li><a href="#terms" className="hover:text-white">Terms & Conditions</a></li>
                                    <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
                                </ul>
                            </div>

                            {/* Contact Section */}
                            <div>
                                <h2 className="text-lg font-bold">Contact Us</h2>
                                <ul className="mt-2 text-white/50 space-y-2">
                                    <li><a href="mailto:info@labwox.com.ng" className="underline hover:text-white">info@labwox.com.ng</a></li>
                                    <li>(+234)9034956049</li>
                                </ul>
                            </div>
                            <div className="mt-8 lg:mt-0 mb-12">
                                <p className="text-white text-lg lg:text-2xl font-medium lg:leading-6 mb-6">
                                    Sign up for insights
                                </p>

                                <ul className="text-white/50 space-y-6 lg:text-base text-sm leading-relaxed">
                                    <li>
                                        Join our mailing list to get the inside track on Labwox.
                                    </li>

                                    <li>
                                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                                            <input 
                                                type="email" 
                                                name="email" 
                                                id="email" 
                                                placeholder="enter your email" 
                                                className="flex-1 bg-transparent border-b border-white/50 text-white/50 outline-none placeholder:text-white/50 focus:border-orange focus:ring-0"
                                            />
                                            <button 
                                                type="button" 
                                                className="flex items-center gap-2 bg-transparent text-white/50 px-4 py-2 rounded-md hover:bg-orange/90 transition"
                                            >
                                                <span className='cursor-pointer hover:text-white'>Join</span>
                                                <img 
                                                    src={arrow} 
                                                    alt="Arrow"
                                                    className="w-6 h-6 cursor-pointer"
                                                />
                                            </button>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="flex flex-col gap-4">
                                            <a 
                                                href="https://web.facebook.com/labwoxltd/" 
                                                className="flex items-center gap-2 text-white/50 hover:text-white transition"
                                                rel="noreferrer"
                                            >
                                                <img src={facebook} alt="facebook-logo" className="w-6 h-6" />
                                                <span>Facebook</span>
                                            </a>
                                            <a 
                                                href="https://www.instagram.com/labwoxltd5/" 
                                                className="flex items-center gap-2 text-white/50 hover:text-white transition"
                                                rel="noreferrer"
                                            >
                                                <img src={instagram} alt="instagram-logo" className="w-6 h-6" />
                                                <span>Instagram</span>
                                            </a>
                                            <a 
                                                href="https://www.linkedin.com/company/labwox/" 
                                                className="flex items-center gap-2 text-white/50 hover:text-white transition"
                                                target="_blank" 
                                                rel="noreferrer"
                                            >
                                                <img src={linkedin} alt="linkedin-logo" className="w-6 h-6" />
                                                <span>LinkedIn</span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </Wrapper>
        </div>
    );
};

export default Footer;
