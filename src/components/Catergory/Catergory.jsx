import React from 'react';
import ProductList from "../Catergory/CardList";
import FilterSidebar from "../Catergory/Filtersection"; // Import the FilterSidebar component

// Breadcrumbs Component
function Breadcrumbs() {
  return (
    <div className="flex items-center gap-[6px]">
      <span className="font-medium text-[14px] leading-[20px] text-[#667479]">Home</span>
      <img
        src="./assets/arrow-caret-right-sm.svg"
        alt="Arrow"
        className="w-[24px] h-[24px]"
      />
      <span className="font-medium text-[14px] leading-[20px] text-[#667479]">Dog</span>
      <img
        src="./assets/arrow-caret-right-sm-2.svg"
        alt="Arrow"
        className="w-[24px] h-[24px]"
      />
      <span className="font-medium text-[14px] leading-[20px] text-[#667479]">Small Dog</span>
    </div>
  );
}

// Banner Component
const Banner = () => {
  return (
    <div className="w-full max-w-[1180px] mx-auto">
      <div className="relative w-full h-[378px] bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] rounded-[20px] flex items-center overflow-hidden">
        {/* Breadcrumbs positioned at the top-left corner */}
        <div className="absolute top-[20px] left-[20px]">
          <Breadcrumbs />
        </div>

        {/* Banner Image */}
        <img
          src="./assets/group-portrait-adorable-puppies-1.svg"
          alt="Puppies"
          className="absolute left-[51px] bottom-[77px] h-[301px]"
        />

        {/* Text Content */}
        <div className="ml-auto mr-[30px] text-right text-[#FDFDFD]">
          <h1 className="font-extrabold text-[52px] leading-[68px]">One More Friend</h1>
          <h2 className="font-bold text-[36px] leading-[54px] my-[10px]">Thousands More Fun!</h2>
          <p className="font-medium text-[12px] leading-[18px] text-[#CCD1D2] mb-[30px]">
            Having a pet means you have more joy, a new friend, a happy person who
            will always be with you to have fun. We have 200+ different pets that
            can meet your needs!
          </p>
          <div className="flex gap-[10px] justify-end">
            <button className="flex items-center gap-[8px] px-[28px] py-[14px] rounded-[57px] border border-[#FDFDFD] text-[#FDFDFD] transition duration-300 ease-in-out hover:bg-[#FDFDFD] hover:text-[#00171F]">
              View Intro
              <img
                src="./assets/media-play-circle.svg"
                alt="Play"
                className="w-[24px] h-[24px]"
              />
            </button>
            <button className="flex items-center gap-[8px] px-[28px] py-[14px] rounded-[57px] bg-[#FDFDFD] text-[#00171F] transition duration-300 ease-in-out hover:bg-[#CCD1D2]">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      {/* Container for FilterSidebar and ProductList */}
      <div className="flex mt-10">
        {/* Filter Sidebar on the left */}
        <div className="w-72"> {/* Adjust width as needed */}
          <FilterSidebar />
        </div>
        
        {/* Product List on the right */}
        <div className="flex-1 ml-4"> {/* Takes the remaining space */}
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Banner;
