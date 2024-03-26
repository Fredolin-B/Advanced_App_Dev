import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUser, FaClipboardList, FaCheckCircle, FaTimesCircle, FaSignOutAlt } from 'react-icons/fa';

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

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const users = [
    { username: 'Fredo', age: 20, gender: 'Female', loanAppliedDate: '2023-03-15', loanAmount: 50000, loanType: 'Crop Loan' },
    { username: 'Abi', age: 20, gender: 'Female', loanAppliedDate: '2024-03-1', loanAmount: 10000, loanType: 'Livestock Loan' },
    { username: 'Dharun', age: 20, gender: 'Male', loanAppliedDate: '2022-01-20', loanAmount: 25000, loanType: 'Solar Pump Set Loan' },
    // Add more users here if needed
  ];

  return (
    <div className="">
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <div className="container mx-auto h-screen bg-gradient-to-br from-green-400 to-yellow-300">
        <div className="overflow-x-auto ml-[130px]">
          <br></br><br></br>
          <table className="table-auto w-[90%] ">
            <thead>
              <tr className="bg-green-700">
                <th className="px-4 py-2 text-white">S.No.</th>
                <th className="px-4 py-2 text-white">Name</th>
                <th className="px-4 py-2 text-white">Age</th>
                <th className="px-4 py-2 text-white">Gender</th>
                <th className="px-4 py-2 text-white">Loan Applied Date</th>
                <th className="px-4 py-2 text-white">Loan Amount</th>
                <th className="px-4 py-2 text-white">Loan Type</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{user.username}</td>
                  <td className="border px-4 py-2">{user.age}</td>
                  <td className="border px-4 py-2">{user.gender}</td>
                  <td className="border px-4 py-2">{user.loanAppliedDate}</td>
                  <td className="border px-4 py-2">{user.loanAmount}</td>
                  <td className="border px-4 py-2">{user.loanType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded ml-[130px]">
          <Link to="/plans">Add Plans</Link>
        </button>
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

export default Dashboard;
