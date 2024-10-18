import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#FCEED5] to-[#FFE7BA] py-20 px-10 md:px-32 font-sans">
      <div className="flex flex-col md:flex-row items-center bg-[#003459] rounded-xl p-8 mb-10">
        <span className="text-white font-bold text-xl md:text-2xl md:mr-auto">
          Register Now So You Don't Miss Our Programs
        </span>
        <div className="flex items-center bg-white rounded-lg gap-3 p-3 mt-5 md:mt-0">
          <input
            type="email"
            placeholder="Enter your Email"
            className="border border-gray-300 rounded-md py-3 px-5 w-full md:w-auto outline-none"
          />
          <button className="bg-[#003459] text-white rounded-md py-3 px-5 font-medium hover:bg-[#00497a] transition-colors">
            Subscribe Now
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="flex flex-wrap justify-center md:justify-start gap-5 md:gap-8">
          <a href="#home" className="text-[#00171f] font-medium hover:text-[#003459] transition-colors">
            Home
          </a>
          <a href="#category" className="text-[#00171f] font-medium hover:text-[#003459] transition-colors">
            Category
          </a>
          <a href="#about" className="text-[#00171f] font-medium hover:text-[#003459] transition-colors">
            About
          </a>
          <a href="#contact" className="text-[#00171f] font-medium hover:text-[#003459] transition-colors">
            Contact
          </a>
        </div>
        <div className="flex gap-3 mt-5 md:mt-0">
          <img src="./assets/facebook-negative.svg" alt="Facebook" className="w-8 h-8" />
          <img src="./assets/twitter-negative.svg" alt="Twitter" className="w-8 h-8" />
          <img src="./assets/instagram-negative.svg" alt="Instagram" className="w-8 h-8" />
          <img src="./assets/you-tube-negative.svg" alt="YouTube" className="w-8 h-8" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#667479]">
        <span>© 2022 Monito. All rights reserved.</span>
        <img src="./assets/frame.svg" alt="Monito Logo" className="my-4 md:my-0" />
        <div className="flex gap-5">
          <a href="#terms" className="hover:text-gray-800 transition-colors">
            Terms of Service
          </a>
          <a href="#privacy" className="hover:text-gray-800 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
