import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full opacity-100 bg-black">
      <section className="py-12">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
            <div className="xl:flex xl:items-center xl:justify-start">
              <h1 className="text-4xl text-orange-500 font-bold">MKFLEET</h1>
              <p className="mt-5 text-sm text-white xl:ml-6 xl:mt-0">© Copyright 2024 MKFLEET</p>
            </div>

            <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
              <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
                {/* Links go here */}
                <li>
                  <a href="#" title="" className="text-sm text-white transition-opacity duration-200 hover:text-opacity-80 focus:text-opacity-80"> About </a>
                </li>

                <li>
                  <a href="#" title="" className="text-sm text-white transition-opacity duration-200 hover:text-opacity-80 focus:text-opacity-80"> Services </a>
                </li>

                <li>
                  <a href="#" title="" className="text-sm text-white transition-opacity duration-200 hover:text-opacity-80 focus:text-opacity-80"> Privacy Policy </a>
                </li>

                <li>
                  <a href="#" title="" className="text-sm text-white transition-opacity duration-200 hover:text-opacity-80 focus:text-opacity-80"> Terms & Conditions </a>
                </li>

                <li>
                  <a href="#" title="" className="text-sm text-white transition-opacity duration-200 hover:text-opacity-80 focus:text-opacity-80"> Support </a>
                </li>
              </ul>

              <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20"></div>
              <ul className="flex items-center justify-center space-x-8 xl:justify-end">
                {/* Social media icons go here */}
                <li>
                  <a href="#" title="" className="block text-white transition-opacity duration-200 hover:text-opacity-80 focus:text-opacity-80">
                    <FaFacebook />
                  </a>
                </li>

                <li>
                  <a href="#" title="" className="block text-white transition-opacity duration-200 hover:text-opacity-80 focus:text-opacity-80">
                    <FaTwitter />
                  </a>
                </li>

                <li>
                  <a href="#" title="" className="block text-white transition-opacity duration-200 hover:text-opacity-80 focus:text-opacity-80">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
