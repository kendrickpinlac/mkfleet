import { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative z-50">
            <button
                type="button"
                className="text-gray-900"
                onClick={toggleMenu}
            >
                <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-50">
                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Home
                    </Link>
                    <Link to="/Cars" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Cars
                    </Link>
                    <Link to="/Services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Services
                    </Link>
                    <Link to="/Contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Contact
                    </Link>
                    <Link to="/About" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        About MKFLEET
                    </Link>
                    <Link to="/SignUp" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Sign In
                    </Link>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
