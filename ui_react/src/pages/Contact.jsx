import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='flex justify-center items-center h-[595px] bg-gradient-to-br from-green-400 to-yellow-300 relative overflow-hidden'>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="crops-animate absolute top-[40%] left-[20%] w-10 h-10 bg-yellow-900 rounded-full opacity-50 animate-crop1"></div>
        <div className="crops-animate absolute top-[60%] left-[70%] w-10 h-10 bg-yellow-900 rounded-full opacity-50 animate-crop1"></div>
        <div className="crops-animate absolute top-[10%] left-[80%] w-10 h-10 bg-yellow-900 rounded-full opacity-50 animate-crop1"></div>
        <div className="crops-animate absolute top-[5%] left-[5%] w-10 h-10 bg-yellow-900 rounded-full opacity-50 animate-crop1"></div>
        <div className="crops-animate absolute top-[30%] right-[30%] w-8 h-8 bg-green-900 rounded-full opacity-70 animate-crop2"></div>
        <div className="crops-animate absolute bottom-[10%] left-1/4 w-6 h-6 bg-yellow-800 rounded-full opacity-70 animate-crop3"></div>
        <div className="crops-animate absolute bottom-[30%] right-[10%] w-5 h-5 bg-green-500 rounded-full opacity-50 animate-crop4"></div>
        <div className="crops-animate absolute bottom-[30%] left-[10%] w-5 h-5 bg-green-900 rounded-full opacity-50 animate-crop4"></div>
      </div>

      {/* Hamburger icon */}
     

      {/* Contact Form */}
      <div className="mx-auto w-[40%] p-8 rounded border-black border-2 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className='w-[100%]'>
          <div className="mb-4">
            <label htmlFor="name" className="block">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full px-4 py-2 rounded border-black border-2 focus:border-green-500 focus:outline-none" required />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block">Mobile Number:</label>
            <input type="tel" id="mobile" name="mobile" placeholder="Enter your mobile number" className="w-full px-4 py-2 rounded border-black border-2 focus:border-green-500 focus:outline-none" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" className="w-full px-4 py-2 rounded border-black border-2 focus:border-green-500 focus:outline-none" required />
          </div>
          <div className="mb-4">
            <label htmlFor="query" className="block">Query:</label>
            <textarea id="query" name="query" placeholder="Enter your query" rows="5" className="w-full px-4 py-2 rounded border-black border-2 focus:border-green-500 focus:outline-none" required></textarea>
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
