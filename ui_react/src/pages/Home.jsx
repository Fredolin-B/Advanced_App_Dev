import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  
  return (
    <div className="h-[598px] w-[100%] flex flex-col justify-center items-center relative bg-bgImage">
      
      <div className="max-w-md px-4 py-8 bg-white rounded-lg shadow-lg text-center relative z-10 left-[250px]">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Agricultural Loans</h1>
        <p className="text-gray-700 mb-6">
          Agricultural loans are financial products designed to help farmers and agricultural businesses 
          fund their operations, purchase equipment, or acquire land. These loans often come with 
          specialized terms and conditions tailored to the unique needs of the agricultural sector.
        </p>
        <div
          className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full inline-block transition-colors duration-300"
        ><Link to='/login'>
          Apply Now</Link>
        </div>
        
      </div>
      
    </div>
  );
};

export default Home;
