import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUser, FaClipboardList, FaCheckCircle, FaTimesCircle, FaUserCog, FaSignOutAlt } from 'react-icons/fa';

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

const AdminProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Dummy admin details
  const adminDetails = {
    adminName: 'Admin',
    lastLogin: '2024-03-20 10:30 AM',
    activeUsers: 10,
  };

  return (
    <div className="relative">
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-400 to-yellow-300">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl">
          <h1 className="text-4xl font-bold mb-8">Admin Profile</h1>
          <div className="flex items-center mb-8">
            <FaUserCog className="text-green-500 text-6xl mr-8" />
            <table className="table-auto text-xl">
              <tbody>
                <tr>
                  <td className="px-6 py-4 font-bold">Admin Name:</td>
                  <td className="px-6 py-4">{adminDetails.adminName}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold">Last Login:</td>
                  <td className="px-6 py-4">{adminDetails.lastLogin}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold">Active Users:</td>
                  <td className="px-6 py-4">{adminDetails.activeUsers}</td>
                </tr>
              </tbody>
            </table>
          </div>
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

export default AdminProfile;
