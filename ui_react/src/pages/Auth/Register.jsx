import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Mobile Number:', mobileNumber);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="h-screen w-[100%] flex items-center justify-center bg-gradient-to-br from-green-400 to-yellow-300 relative overflow-hidden">
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
      <div className="bg-white p-4 rounded-lg shadow-lg z-10">
        <h1 className="text-xl font-bold text-green-800 mb-4">Register</h1>
        <form onSubmit={handleRegister} className="w-[350px]">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-bold mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block text-gray-700 font-bold mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 relative overflow-hidden"
            >
              <span className="animate-login-button"><Link to="/login">Register</Link></span>
            </button>
            <div
              className="text-xs text-green-600 hover:text-green-800 font-semibold transition-colors duration-300"
            >
              <Link to="/login">Already have an account?</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
