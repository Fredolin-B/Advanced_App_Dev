import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="text-center">© 2024 Your Company. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link to="/terms" className="text-white mr-4">
            Terms and Conditions
          </Link>
          <a href="#" className="text-white">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-white">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-white">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="#" className="text-white">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
