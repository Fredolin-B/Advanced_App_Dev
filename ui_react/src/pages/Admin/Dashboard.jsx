import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const users = [
    { username: 'Fredo', age: 20, gender: 'Female', loanAppliedDate: '2023-03-15', loanAmount: 50000, loanType: 'Crop Loan' },
    { username: 'Abi', age: 20, gender: 'Female', loanAppliedDate: '2024-03-1', loanAmount: 10000, loanType: 'Livestock Loan' },
    { username: 'Dharun', age: 20, gender: 'Male', loanAppliedDate: '2022-01-20', loanAmount: 25000, loanType: 'Solar Pump Set Loan' },
    { username: 'Fredo', age: 20, gender: 'Female', loanAppliedDate: '2024-03-15', loanAmount: 5000, loanType: 'Crop Loan' },
    { username: 'Abi', age: 20, gender: 'Female', loanAppliedDate: '2024-03-1', loanAmount: 10000, loanType: 'Livestock Loan' },
    { username: 'Dharun', age: 20, gender: 'Male', loanAppliedDate: '2022-01-20', loanAmount: 25000, loanType: 'Solar Pump Set Loan' },
    { username: 'Fredo', age: 20, gender: 'Female', loanAppliedDate: '2024-03-15', loanAmount: 5000, loanType: 'Crop Loan' },
    { username: 'Fredo', age: 20, gender: 'Female', loanAppliedDate: '2023-03-15', loanAmount: 50000, loanType: 'Crop Loan' },
    { username: 'Abi', age: 20, gender: 'Female', loanAppliedDate: '2024-03-1', loanAmount: 10000, loanType: 'Livestock Loan' },
    { username: 'Dharun', age: 20, gender: 'Male', loanAppliedDate: '2022-01-20', loanAmount: 25000, loanType: 'Solar Pump Set Loan' },
    { username: 'Fredo', age: 20, gender: 'Female', loanAppliedDate: '2024-03-15', loanAmount: 5000, loanType: 'Crop Loan' },
    { username: 'Abi Ranjani', age: 20, gender: 'Female', loanAppliedDate: '2023-01-30', loanAmount: 7000, loanType: 'Livestock' }
  ];

  return (
    <div className="container mx-auto h-[598px]">
        

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">S.No.</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Loan Applied Date</th>
              <th className="px-4 py-2">Loan Amount</th>
              <th className="px-4 py-2">Loan Type</th>
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
      <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
  <Link to="/plans">Add Plans</Link>
</button>
      </div>
    
  );
};

export default Dashboard;
