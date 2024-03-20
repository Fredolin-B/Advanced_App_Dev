import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Loan = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='flex'>
      {/* Hamburger icon */}
      <div className="fixed top-6 left-6 z-10">
        <button onClick={toggleSidebar} className="text-white hover:text-white focus:outline-none">
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`w-1/6 p-6 transition-all duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Loan Options */}
        <h2 className="text-xl font-semibold mb-4">Welcome</h2>
        <ul className="space-y-2">
          <li><div className="text-green-700 hover:text-green-900"><Link to='/loan'>About Us</Link></div></li>
          <li><div className="text-green-700 hover:text-green-900"><Link to='/apply'>Loan Application Form</Link></div></li>
          <li><div className="text-green-700 hover:text-green-900"><Link to='/profile'>Profile</Link></div></li>
          <li><div className="text-green-700 hover:text-green-900"><Link to='/login'>Logout</Link></div></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-5/6 p-6">
        <div className="px-4 py-8 bg-white rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold text-green-700 mb-4">Why Choose Agricultural Loans?</h1>
          <p className="text-gray-700 mb-6">
            Agricultural loans play a crucial role in supporting farmers and agricultural businesses by providing 
            them with the financial resources they need to thrive. Here are some reasons why agricultural loans are 
            essential:
          </p>
          <ul className="text-left list-disc ml-6">
            <li className="mb-2"><b>Access to Capital:</b> Agriculture requires significant capital investment for land acquisition, equipment purchase, seeds, fertilizers, and other inputs. Agricultural loans provide farmers with the necessary funds to invest in their farms and increase productivity.</li>
            <li className="mb-2"><b>Risk Management:</b> Agriculture is inherently risky due to factors like weather conditions, pests, diseases, and market fluctuations. Loans can help farmers manage these risks by providing financial resources to recover from losses or invest in risk mitigation strategies such as crop insurance or diversification.</li>
            <li className="mb-2"><b>Technology Adoption:</b> Advancements in agricultural technology can lead to increased productivity and efficiency. Agricultural loans enable farmers to invest in modern equipment, irrigation systems, and other technologies that can enhance their farming practices.</li>
            <li className="mb-2"><b>Seasonal Financing:</b> Farming often involves cyclical cash flows, with income generated only after harvest. Agricultural loans provide seasonal financing to cover expenses during planting and growing seasons, ensuring smooth operations and uninterrupted production.</li>
            <li className='mb-2'><b>Expansion and Diversification:</b> With access to credit, farmers can expand their operations or diversify into new crops or livestock. This allows them to take advantage of market opportunities and adapt to changing consumer preferences.</li>
            </ul>
          <p className="text-gray-700 mt-6">
            Whether you're a small-scale farmer or a large agricultural enterprise, agricultural loans can provide the 
            financial support you need to achieve your goals and contribute to the growth and development of the agricultural sector.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loan;
