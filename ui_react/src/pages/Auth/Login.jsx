import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.email === "admin@gmail.com") {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-yellow-300 relative overflow-hidden">
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

      <div className="bg-white p-4 rounded-lg shadow-lg z-10 w-[350px] h-[370px] mx-auto">
        <h1 className="text-xl font-bold text-green-800 mb-4">Login</h1>
        
        <form onSubmit={handleLogin} className="w-[300px]">
          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <br></br>
          <div className="flex items-center justify-between mb-2">
            {formData.email === 'admin@gmail.com' ? (
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 relative overflow-hidden"
              >
                <span className="animate-login-button">Login</span>
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 relative overflow-hidden"
              >
                <Link to='/terms'>Login</Link>
              </button>
            )}
            <a
              href="#"
              className="text-xs text-green-600 hover:text-green-800 font-semibold transition-colors duration-300"
            >
              Forgot Password?
            </a>
          </div>

                 <div>
                  <br></br>
            <button
              type="button"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 w-full"
            >
              <Link to='/register'>Sign Up</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
