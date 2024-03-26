import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUser, FaClipboardList, FaCheckCircle, FaTimesCircle, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggle }) => {
    return (
      <div className={`fixed inset-y-0 left-0 w-64 bg-gray-900 px-4 py-6 z-10 ${isOpen ? 'block' : 'hidden'}`}>
        <br></br><br></br>
        <ul>
          <li className="mb-6">
            <Link to="/dashboard" className="text-white flex items-center text-xl">
              <FaBars className="mr-4" />
              Dashboard
            </Link>
          </li>
          <li className="mb-6">
            <Link to="/adminprofile" className="text-white flex items-center text-xl">
              <FaUser className="mr-4" />
              Profile
            </Link>
          </li>
          <li className="mb-6">
            <Link to="/showplans" className="text-white flex items-center text-xl">
              <FaClipboardList className="mr-4" />
              Plans
            </Link>
          </li>
          <li className="mb-6">
            <Link to="/agreed" className="text-white flex items-center text-xl">
              <FaCheckCircle className="mr-4" />
              Agreed
            </Link>
          </li>
          <li>
            <Link to="/rejected" className="text-white flex items-center text-xl">
              <FaTimesCircle className="mr-4" />
              Rejected
            </Link>
          </li>
          <br></br>
          <li>
            <Link to="/login" className="text-white flex items-center text-xl">
              <FaSignOutAlt className="mr-4" />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );
  };


const Rejected = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Dummy agreed users data
  const agreedUsers = [
    { username: 'John Doe', age: 30, gender: 'Male', loanAmount: 5000 },
    { username: 'Jane Smith', age: 25, gender: 'Female', loanAmount: 10000 },
    { username: 'Alice Johnson', age: 35, gender: 'Female', loanAmount: 15000 },
  ];

  return (
    <div className="relative">
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-400 to-yellow-300">
        <div className="bg-white w-[30%] p-8 rounded-lg shadow-lg max-w-md">
          <h1 className="text-3xl font-bold mb-4">Rejected Users</h1>
          {agreedUsers.map((user, index) => (
            <div key={index} className="flex items-center mb-6">
              <FaUser className="text-green-500 text-4xl mr-6" />
              <div className='ml-[10%]'>
                <p className="font-bold text-xl">{user.username}</p>
                <p className="text-xl">Age: {user.age}</p>
                <p className="text-xl">Gender: {user.gender}</p>
                <p className="text-xl">Loan Amount: ${user.loanAmount}</p>
              {index !== agreedUsers.length - 1 && <hr className="w-full my-4 border-b-2 border-gray-300" />}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="fixed top-4 left-4 bg-gray-900 text-white p-2 rounded-full z-20"
        onClick={toggleSidebar}
      >
        <FaBars className="text-2xl" />
      </button>
    </div>
  );
};

export default Rejected;
