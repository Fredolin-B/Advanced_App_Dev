import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUser, FaClipboardList, FaCheckCircle, FaPlus, FaSignOutAlt, FaTimesCircle } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`fixed inset-y-0 left-0 w-60 bg-gray-900 px-4 py-6 z-10 ${isOpen ? 'block' : 'hidden'}`}>
      <br></br><br></br>
      <ul>
        <li className="mb-4 ">
          <Link to="/dashboard" className="text-white flex items-center text-xl">
            <FaBars className="mr-2" />
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/adminprofile" className="text-white flex items-center text-xl">
            <FaUser className="mr-2" />
            Profile
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/showplans" className="text-white flex items-center text-xl">
            <FaClipboardList className="mr-2" />
            Plans
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/agreed" className="text-white flex items-center text-xl">
            <FaCheckCircle className="mr-2" />
            Agreed
          </Link>
        </li>
        <li>
          <Link to="/rejected" className="text-white flex items-center text-xl">
            <FaTimesCircle className="mr-2" />
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

const LoanPlan = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [formData, setFormData] = useState({
    planName: '',
    minDuration: '',
    maxDuration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send the form data to your backend or perform any other actions
    console.log(formData);
    // Clear the form after submission if needed
    setFormData({
      planName: '',
      minDuration: '',
      maxDuration: ''
    });
  };

  return (
    <div className="relative">
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-400 to-yellow-300">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <h1 className="text-3xl font-bold mb-4">Add New Loan Plan</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="planName" className="block text-gray-700 font-bold mb-2">Plan Name</label>
              <input
                type="text"
                id="planName"
                name="planName"
                value={formData.planName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="minDuration" className="block text-gray-700 font-bold mb-2">Minimum Duration</label>
              <input
                type="number"
                id="minDuration"
                name="minDuration"
                value={formData.minDuration}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="maxDuration" className="block text-gray-700 font-bold mb-2">Maximum Duration</label>
              <input
                type="number"
                id="maxDuration"
                name="maxDuration"
                value={formData.maxDuration}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
            >

              Update
            </button>
          </form>
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

export default LoanPlan;
