import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Profile = () => {

    const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="h-[595px] flex items-center p-4 border border-gray-300 rounded-md">
    <div className="fixed top-6 left-6 z-10">
        <button onClick={toggleSidebar} className="text-white hover:text-white focus:outline-none">
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`w-1/6  transition-all duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Loan Options */}
        <h2 className="text-xl font-semibold mb-4">Welcome</h2>
        <ul className="space-y-2">
        <li><div className="text-black-700 font-bold"><Link to='/loan'>About Us</Link></div></li>
          <li><div className="text-black-700 font-bold"><Link to='/apply'>Loan Application Form</Link></div></li>
          <li><div className="text-black-700 font-bold"><Link to='/profile'>Profile</Link></div></li>
          <li><div className="text-black-700 font-bold"><Link to='/login'>Logout</Link></div></li>
        </ul>
      </div>
      {/* User Icon */}
      
      
      {/* User Information */}
      <div className="flex items-center h-full">
        {/* User Icon Box */}
        <div className="flex justify-center items-center p-4 border border-gray-300 rounded-md mr-4">
          <FontAwesomeIcon icon={faUser} className="w-20 h-20 rounded-full" />
        </div>
        
        {/* Divider Line */}
        <div className="border-l border-gray-300 h-20 mr-4"></div>

        {/* User Details Box */}
        <div className="p-4 border border-gray-300 rounded-md">
          <h2 className="text-lg font-semibold mb-2">User Profile</h2>
          <p className="text-sm"><span className="font-medium">Name:</span> Fredo</p>
          <p className="text-sm"><span className="font-medium">Age:</span> 20</p>
          <p className="text-sm"><span className="font-medium">Loans Applied:</span> 5</p>
          <p className="text-sm"><span className="font-medium">Date of Last Loan Applied:</span> 2022-03-15</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
