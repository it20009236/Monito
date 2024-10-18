import React from "react";

const Header = () => {
  return (
    <header className="bg-white">
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center p-7">
        <div className="flex items-center gap-12">
          <img
            src="./assets/frame.svg"
            alt="Logo"
            className="w-[115px] h-[40px]"
          />
          <nav className="flex gap-12">
            <a
              href="/"
              className="font-bold text-[16px] leading-6 text-[#003459]"
            >
              Home
            </a>
            <a
              href="/category"
              className="font-bold text-[16px] leading-6 text-[#003459]"
            >
              Category
            </a>
            <a
              href="/about"
              className="font-bold text-[16px] leading-6 text-[#003459]"
            >
              About
            </a>
            <a
              href="/contact"
              className="font-bold text-[16px] leading-6 text-[#003459]"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-[#fdfdfd] rounded-full px-5 py-3 gap-3">
            <img src="./assets/u-search.svg" alt="Search" className="w-5 h-5" />
            <input
              type="text"
              placeholder="Search something here!"
              className="border-none outline-none bg-transparent text-[#99a2a5] text-[14px] leading-5"
            />
          </div>
          <button className="bg-[#003459] text-white font-bold text-[16px] rounded-full px-7 py-3 leading-6">
            Join the community
          </button>
          <div className="flex items-center gap-2 px-2 py-2">
            <img
              src="./assets/frame-2.svg"
              alt="Currency Icon"
              className="w-4 h-4"
            />
            <span className="text-[#002a48] font-medium text-[16px] leading-[23px]">
              VND
            </span>
            <img
              src="./assets/arrow-caret-down-sm.svg"
              alt="Dropdown"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden justify-between items-center px-4 py-2 bg-white w-full max-w-[390px] h-[55px]">
        <img
          src="./assets/menu-hamburger-md.svg"
          alt="Menu"
          className="w-8 h-8"
        />
        <img src="./assets/frame.svg" alt="Logo" className="w-[92px] h-8" />
        <img src="./assets/vector.svg" alt="Search" className="w-8 h-8" />
      </div>
    </header>
  );
};

export default Header;
