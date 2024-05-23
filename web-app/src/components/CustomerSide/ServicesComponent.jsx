import React from 'react';
import logo from '../../Assets/logo2portrait.png';

const Services = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
          {/* Image Section */}
          <div className="pr-12 sm:pr-0">
            <div className="relative max-w-xs mb-12">
              <img
                className="logo"
                src={logo}
                alt="Logo"
                style={{ maxHeight: '50rem', width: 'auto' }}
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                onClick={(e) => e.preventDefault()}
                onDoubleClick={(e) => e.preventDefault()}
                onSelect={(e) => e.preventDefault()}
              />
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Grow your business with Celebration.</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;