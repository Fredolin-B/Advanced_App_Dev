import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSeedling } from 'react-icons/fa'; // Import the seedling icon from Font Awesome

const Navbar = () => {
    const [hovered, setHovered] = useState(false);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
        { name: 'Logout', path: '/login' }
    ];

    return (
        <div className='h-[10vh] w-screen flex flex-row justify-center items-center bg-gray-800 text-white'>
            <div className='w-[80%] h-full flex flex-row justify-center items-center'>
                <div className='w-3/4 flex items-center'>
                    <FaSeedling className="text-3xl mr-2" /> {/* Use the FaSeedling icon */}
                    <span className="text-4xl font-bold">
                        {'AGrow'.split('').map((letter, index) => (
                            <span
                                key={index}
                                className={`cursor-pointer inline-block ${hovered ? 'scale-animation' : ''}`}
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                            >
                                {letter}
                            </span>
                        ))}
                    </span>
                </div>

                <div className='w-3/12 flex flex-row justify-center'>
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        {links.map((link, index) => (
                            <li key={index} className='cursor-pointer'>
                                <NavLink to={link.path} activeClassName='text-blue-500' className='text-white'>
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
