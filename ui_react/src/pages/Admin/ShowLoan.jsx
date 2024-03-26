import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUser, FaClipboardList, FaChartPie, FaCheckCircle, FaTimesCircle, FaSignOutAlt } from 'react-icons/fa';
import { Pie } from 'react-chartjs-2';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`fixed inset-y-0 left-0 w-64 bg-gray-900 px-4 py-6 z-10 ${isOpen ? 'block' : 'hidden'}`}>
      <ul>
        <li className="mb-4">
          <Link to="/" className="text-white flex items-center">
            <FaBars className="mr-2" />
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/profile" className="text-white flex items-center">
            <FaUser className="mr-2" />
            Profile
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/plans" className="text-white flex items-center">
            <FaClipboardList className="mr-2" />
            Plans
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/agreed" className="text-white flex items-center">
            <FaCheckCircle className="mr-2" />
            Agreed
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/rejected" className="text-white flex items-center">
            <FaTimesCircle className="mr-2" />
            Rejected
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/show-loans" className="text-white flex items-center">
            <FaChartPie className="mr-2" />
            Show Loans
          </Link>
        </li>
        <li>
          <Link to="/logout" className="text-white flex items-center">
            <FaSignOutAlt className="mr-2" />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

const ShowLoan = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Dummy data for agricultural loans
  const loanData = {
    labels: ['Crop Loan', 'Livestock Loan', 'Solar Pump Set Loan'],
    datasets: [
      {
        data: [20, 15, 10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="relative">
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-400 to-yellow-300">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <h1 className="text-3xl font-bold mb-4">Agricultural Loans</h1>
          <Pie data={loanData} />
        </div>
      </div>
      <button
        className="fixed top-4 left-4 bg-gray-900 text-white p-2 rounded-full z-20 lg:hidden"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>
    </div>
  );
};

export default ShowLoan;
    