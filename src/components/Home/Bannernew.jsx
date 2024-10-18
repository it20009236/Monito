import React from 'react';

const AdoptionBanner = () => {
  return (
    <div className="w-full max-w-[1180px] h-[378px] bg-[#FFB775] rounded-[20px] p-[40px] flex items-center justify-between relative overflow-hidden mx-auto">
      <div className="max-w-[50%]">
        <h1 className="font-extrabold text-[52px] leading-[68px] text-[#003459] flex items-center gap-[10px]">
          Adoption 
          <img src="./assets/fontisto-paw.svg" alt="Paw" className="h-[32px] w-auto" />
        </h1>
        <h2 className="font-bold text-[36px] leading-[54px] text-[#003459] capitalize my-[20px]">
          We Need Help. So Do They.
        </h2>
        <p className="font-medium text-[12px] leading-[18px] text-[#242B33] mb-[20px]">
          Adopt a pet and give it a home,<br />
          it will love you back unconditionally.
        </p>
        <div className="flex gap-[15px]">
          <button className="flex items-center justify-center gap-[8px] px-[28px] py-[14px] rounded-[57px] bg-[#003459] text-[#FDFDFD] cursor-pointer transition-colors duration-300">
            Explore Now
          </button>
          <button className="flex items-center justify-center gap-[8px] px-[28px] py-[14px] border border-[#003459] text-[#003459] rounded-[57px] bg-transparent cursor-pointer transition-colors duration-300 hover:bg-[#003459] hover:text-[#FDFDFD]">
            View Intro
            <img src="./assets/media-play-circle.svg" alt="Play" className="h-[24px] w-[24px]" />
          </button>
        </div>
      </div>
      <img src="./assets/pngegg-4-1.svg" alt="Hands" className="absolute right-0 bottom-[-40px] w-[50%] h-auto" />
    </div>
  );
};

export default AdoptionBanner;
