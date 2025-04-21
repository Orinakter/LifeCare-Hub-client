import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div>
             <footer className="bg-blue-50 text-[#0D92F4] py-8 mt-96">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
       
        <div>
          <h2 className="text-2xl font-bold">LifeCare Hub</h2>
          <p className="mt-2 text-gray-900">
            Providing quality healthcare with advanced medical facilities.
          </p>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="mt-2 text-gray-900 flex gap-3 items-center"><span><FaLocationDot /></span> 123 Health Mirpur,Dhaka,Bangladesh</p>
          <p className="text-gray-900 flex gap-3 items-center"><span><FaPhone /></span> +123 456 7890</p>
          <p className="text-gray-900 flex gap-3 items-center"><span><MdEmail /></span>support@lifecarehub.com</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com/orinakter.2000" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-blue-400" />
            </a>
            
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-400" />
            </a>
            <a href="https://www.linkedin.com/in/orinakter23/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-900 mt-6 border-t border-gray-900 pt-4">
        copyright @2025 Lifecare Hub. All Rights Reserved.
      </div>
    </footer>
        </div>
    );
};

export default Footer;