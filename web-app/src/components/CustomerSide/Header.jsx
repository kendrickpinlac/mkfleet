import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';
import 'tailwindcss/tailwind.css';


const Header = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`py-4 md:py-6 fixed top-0 w-full z-10 transition-colors duration-500 ${scrolling ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <Link to="/" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                            <h1 className='text-4xl font-extrabold transition-colors duration-300 hover:text-orange-300 text-orange-500'>MKFLEET</h1>
                        </Link>
                    </div>

                    <div className="lg:hidden">
                        <DropDown />
                    </div>

                    <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
                        <Link to="/" title="" className="text-base font-medium transition-colors duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Home </Link>

                        <Link to="/Cars" title="" className="text-base font-medium transition-colors duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Cars </Link>

                        <Link to="/Services" title="" className="text-base font-medium transition-colors duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Services </Link>

                        <Link to="/Contact" title="" className="text-base font-medium transition-colors duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Contact </Link>

                        <Link to="/About" title="" className="text-base font-medium transition-colors duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> About</Link>
                    </div>

                    <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                        <Link to="/SignIn" title="" className="px-5 py-2 text-base font-bold leading-7 transition-colors duration-200 bg-orange-500 border border-transparent rounded-xl hover:bg-orange-400 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500" role="button"> Sign In </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
