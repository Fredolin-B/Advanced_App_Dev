import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ApplicationForm = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='flex bg-gradient-to-br from-green-400 to-orange-500'>
      {/* Hamburger icon */}
      <div className=" top-6 left-6 z-10">
        <button onClick={toggleSidebar} className="text-black hover:text-black focus:outline-none">
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`w-1/6 p-6 transition-all duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Loan Options */}
        <h2 className="text-xl font-semibold mb-4">Welcome</h2>
        <ul className="space-y-2">
          <li><div className="text-black-700 font-bold"><Link to='/loan'>About Us</Link></div></li>
          <li><div className="text-black-700 font-bold"><Link to='/apply'>Loan Application Form</Link></div></li>
          <li><div className="text-black-700 font-bold"><Link to='/profile'>Profile</Link></div></li>
          <li><div className="text-black-700 font-bold"><Link to='/login'>Logout</Link></div></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-5/6 p-6">
        <div className="px-4 py-8 bg-white rounded-lg shadow-lg text-center w-[75%]">
          <h1 className="text-3xl font-bold text-green-700 mb-4 mr-[10%]">Loan Application Form</h1>
          <form onSubmit={handleSubmit} className='w-[90%] ml-9'>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-left text-gray-700">First Name</label>
                <input type="text" id="firstName" name="firstName" className="w-full rounded-md  mt-1 focus:border-green-700 focus:ring focus:ring-green-200 border-2 border-black border-opacity-80" required />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-left text-gray-700">Last Name</label>
                <input type="text" id="lastName" name="lastName" className="w-full rounded-md  mt-1 focus:border-green-700 focus:ring focus:ring-green-200 border-2 border-black border-opacity-80" required />
              </div>
              <div>
                <label htmlFor="age" className="block text-left text-gray-700">Age</label>
                <input type="number" id="age" name="age" min="18" className="w-full rounded-md  mt-1 focus:border-green-700 focus:ring focus:ring-green-200 border-2 border-black border-opacity-80" required />
              </div>
              <div>
                <label htmlFor="gender" className="block text-left text-gray-700">Gender</label>
                <select id="gender" name="gender" className="w-full rounded-md  mt-1 focus:border-green-700 focus:ring focus:ring-green-200 border-2 border-black border-opacity-80" required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="income" className="block text-left text-gray-700">Income</label>
                <input type="number" id="income" name="income" min="0" className="w-full rounded-md  mt-1 focus:border-green-700 focus:ring focus:ring-green-200 border-2 border-black border-opacity-80" required />
              </div>
              <div>
                <label htmlFor="nationality" className="block text-left text-gray-700">Nationality</label>
                <input type="text" id="nationality" name="nationality" className="w-full rounded-md  mt-1 focus:border-green-700 focus:ring focus:ring-green-200 border-2 border-black border-opacity-80" required />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-left text-gray-700">Mobile Number</label>
                <input type="tel" id="mobile" name="mobile" pattern="[0-9]{10}" className="w-full rounded-md  mt-1 focus:border-green-700 focus:ring focus:ring-green-200 border-2 border-black border-opacity-80" required />
              </div>
              <div>
                <label htmlFor="fatherName" className="block text-left text-gray-700">Father's Name</label>
                <input type="text" id="fatherName" name="fatherName" className="w-full rounded-md  mt-1 focus:border-green-700 focus:ring focus:ring-green-200 border-2 border-black border-opacity-80" required />
              </div>
              <div>
                <label htmlFor="motherName" className="block text-left text-gray-700">Mother's Name</label>
                <input type="text" id="motherName" name="motherName" className="w-full rounded-md  mt-1 focus:border-green-700 focus:ring focus:ring-green-200 border-2 border-black border-opacity-80" required />
              </div>
              <div>
                <label htmlFor="dob" className="block text-left text-gray-700">Date of Birth</label>
                <input type="date" id="dob" name="dob" max={new Date().toISOString().split('T')[0]} className="w-full rounded-md  mt-1 focus:border-green-700 focus:ring focus:ring-green-200 border-2 border-black border-opacity-80" required />
              </div>
              <div>
                <label htmlFor="loanType" className="block text-left text-gray-700">Loan Type</label>
                <select id="loanType" name="loanType" className="w-full rounded-md  mt-1 focus:border-green-700 focus:ring focus:ring-green-200 border-2 border-black border-opacity-80" required>
                  <option value="">Select Loan Type</option>
                  <option value="personal">Crop Loan</option>
                  <option value="business">Land Purchase Loan</option>
                  <option value="education">Solar Pump Set Loan</option>
                  <option value="education">Livestock Loan</option>
                </select>
              </div>
              <div>
                <label htmlFor="state" className="block text-left text-gray-700">State</label>
                <input type="text" id="state" name="state" className="w-full rounded-md  mt-1 focus:border-green-700 focus:ring focus:ring-green-200 border-2 border-black border-opacity-80" required />
              </div>
              <div>
                <label htmlFor="district" className="block text-left text-gray-700">District</label>
                <input type="text" id="district" name="district" className="w-full rounded-md  mt-1 focus:border-green-700 focus:ring focus:ring-green-200 border-2 border-black border-opacity-80" required />
              </div>
              <div>
                <label htmlFor="village" className="block text-left text-gray-700">Village</label>
                <input type="text" id="village" name="village" className="w-full rounded-md  mt-1 focus:border-green-700 focus:ring focus:ring-green-200 border-2 border-black border-opacity-80" required />
              </div>
              <div>
                <label htmlFor="address" className="block text-left text-gray-700">Address</label>
                <textarea id="address" name="address" rows="3" className="w-full rounded-md  mt-1 focus:border-green-700 focus:ring focus:ring-green-200 border-2 border-black border-opacity-80" required></textarea>
              </div>
              <div>
                <label htmlFor="pincode" className="block text-left text-gray-700">Pincode</label>
                <input type="text" id="pincode" name="pincode" pattern="[0-9]{6}" className="w-full rounded-md  mt-1 focus:border-green-700 focus:ring focus:ring-green-200 border-2 border-black border-opacity-80" required />
              </div>
              <div>
                <label htmlFor="aadhar" className="block text-left text-gray-700">Aadhar Number</label>
                <input type="text" id="aadhar" name="aadhar" pattern="[0-9]{12}" className="w-full rounded-md  mt-1 focus:border-green-700 focus:ring focus:ring-green-200 border-2 border-black border-opacity-80" required />
              </div>
              <div>
                <label htmlFor="pan" className="block text-left text-gray-700">PAN Card Number</label>
                <input type="text" id="pan" name="pan" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" className="w-full rounded-md  mt-1 focus:border-green-700 focus:ring focus:ring-green-200 border-2 border-black border-opacity-80" required />
              </div>
            </div>
            <button type="submit" className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full mt-4 transition-colors duration-300">Apply Loan</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;


