import React from 'react';
import logo from '../../Assets/logo2portrait.png';

const Hero = () => {
    return (
        <>
        <div className="bg-gray-50 min-h-screen pt-24 flex flex-col"> {/* Added pt-24 to match the height of the header */}
            <section className="flex-grow pb-24 sm:pb-32 lg:pt-8 lg:pb-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                        <div>
                            <div className="text-center lg:text-left">
                                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">Magu Klowi Transport Services</h1>
                                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">Embark on your journey hassle-free with our all-inclusive car rental service, where every ride comes with a trusted driver. Experience comfort, convenience, and peace of mind as you explore the world around you. Whether it's a scenic road trip or a bustling city adventure, we're here to elevate your travel experience. Sit back, relax, and let us drive you towards unforgettable memories.</p>
                                <div className="mt-4">
                                    <button type="button" className="inline-flex justify-center px-4 py-2 text-base font-bold text-white bg-orange-500 border border-transparent rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">BOOK NOW!</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                className="logo"
                                src={logo}
                                alt=""
                                style={{ maxHeight: '40rem', width: 'auto', paddingLeft: '5rem' }}
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                onClick={(e) => e.preventDefault()}
                                onDoubleClick={(e) => e.preventDefault()}
                                onSelect={(e) => e.preventDefault()}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default Hero;
