import React from "react";
import ProductList from "../Catergory/CardList";
import FilterSidebar from "../Catergory/Filtersection"; // Import the FilterSidebar component
import Header from "../NavBar/NavBar";

// Breadcrumbs Component
function Breadcrumbs() {
  return (
    <div className="flex items-center gap-[6px]">
      <span className="font-medium text-[14px] leading-[20px] text-[#667479]">
        Home
      </span>
      <img
        src="./assets/arrow-caret-right-sm.svg"
        alt="Arrow"
        className="w-[24px] h-[24px]"
      />
      <span className="font-medium text-[14px] leading-[20px] text-[#667479]">
        Dog
      </span>
      <img
        src="./assets/arrow-caret-right-sm-2.svg"
        alt="Arrow"
        className="w-[24px] h-[24px]"
      />
      <span className="font-medium text-[14px] leading-[20px] text-[#667479]">
        Small Dog
      </span>
    </div>
  );
}

// Banner Component
const Banner = () => {
  return (
    <div >
      <Header />
      <div className="flex flex-col items-center">
        <div className=" xl:w-[1180px] mx-2 sm:mx-5 md:mx-10">
          <div className="pl-5 pb-3">
            <Breadcrumbs />
          </div>
          <div className="relative w-full h-[430px]  md:h-[378px] bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] rounded-[20px] pt-10 md:pt-0 flex items-start md:items-center overflow-hidden">
            {/* Breadcrumbs positioned at the top-left corner */}

            {/* Banner Image */}
            <img
              src="./assets/group-portrait-adorable-puppies-1.svg"
              alt="Puppies"
              className="z-10 absolute md:left-[51px]  bottom-0"
            />
            <img
              src="src\assets\Rectangle 1.png"
              alt="Puppies"
              className="z-0 absolute right-0 bottom-0 hidden md:block h-[378px]"
            />

            {/* Text Content */}
            <div className="z-20 w-full md:ml-auto md:mr-[30px] flex flex-col items-center text-center md:items-end text-blue-900 md:text-[#FDFDFD]">
              <h1 className="font-extrabold text-4xl md:text-[52px] md:leading-[68px]">
                One More Friend
              </h1>
              <h2 className="font-bold text-2xl md:text-[36px] leading-[54px] my-[10px]">
                Thousands More Fun!
              </h2>
              <p className="font-medium text-[12px] w-[300px] text-center md:text-right leading-[18px] text-blue-900 md:text-[#FDFDFD] mb-[30px]">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>
              <div className="flex gap-[10px] justify-end">
                <button className="flex items-center gap-[8px] px-4 py-2 md:px-[28px] md:py-[14px] rounded-[57px] border border-blue-900 md:border-[#FDFDFD]  md:text-[#FDFDFD] transition duration-300 ease-in-out hover:bg-[#FDFDFD] hover:text-[#00171F]">
                  View Intro
                  <img
                    src="./assets/media-play-circle.svg"
                    alt="Play"
                    className="w-[24px] h-[24px]"
                  />
                </button>
                <button className="flex items-center gap-[8px] px-4 py-2 md:px-[28px] md:py-[14px] rounded-[57px] bg-black md:bg-[#FDFDFD] text-white md:text-[#00171F] transition duration-300 ease-in-out hover:bg-[#CCD1D2]">
                  Explore Now
                </button>
              </div>
            </div>
          </div>

          {/* Container for FilterSidebar and ProductList */}
          <div className="flex mt-10 flex-wrap">
            {/* Filter Sidebar on the left */}
            <div className="hidden lg:block w-72">
              {" "}
              {/* Hide on smaller screens */}
              <FilterSidebar />
            </div>

            {/* Product List on the right */}
            <div className="flex-1">
              {" "}
              {/* Takes the remaining space */}
              <ProductList />
            </div>
          </div>

          {/* Responsive Styles for Product List */}
          <style jsx>{`
            @media (max-width: 768px) {
              .ProductList {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
              }

              .ProductList .card {
                flex: 0 0 48%; /* Two cards per row */
                margin-bottom: 20px; /* Space between cards */
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Banner;
