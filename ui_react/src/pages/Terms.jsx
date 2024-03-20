import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gradient-to-br from-green-400 to-yellow-300 min-h-screen flex flex-col justify-center items-center">
      {/* Background agricultural animations */}
      <div className=" top-0 left-0 w-full h-full">
        {/* Add your background agricultural animations here */}
      </div>

      {/* Terms and Conditions content */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec semper arcu. Proin ultrices, nisi vitae
          consequat auctor, nisi purus tempus odio, ac viverra est lorem id sapien. Sed vitae feugiat tortor. Quisque
          sit amet mauris eleifend, consectetur risus nec, consequat libero. Nullam sit amet velit euismod, finibus
          libero sit amet, fermentum lacus. Duis gravida lacinia enim, id finibus odio hendrerit ac. In efficitur ex
          eu efficitur sodales. Nam sed sapien dui. Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </p>
        <div className="mt-4">
          <input type="checkbox" id="agree" className="mr-2" />
          <label htmlFor="agree" className="text-sm text-gray-700">
            I agree to the Terms and Conditions
          </label>
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          onClick={() => {
            const agreeCheckbox = document.getElementById('agree');
            if (agreeCheckbox.checked) {
              // Redirect to '/loan' if agreed
              // Replace '/loan' with your desired route
              window.location.href = '/loan';
            } else {
              alert('Please agree to the Terms and Conditions.');
            }
          }}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
