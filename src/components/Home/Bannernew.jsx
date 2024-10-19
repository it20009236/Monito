import React from "react";

const AdoptionBanner = () => {
  return (
    <div className="flex justify-center">
      <div className="hidden relative md:flex w-full h-auto bg-[#FFB775] rounded-[20px] p-[40px] flex-col md:flex-row items-center justify-between overflow-hidden mx-2">
        <div className="max-w-full md:max-w-[50%]">
          <h1 className="font-extrabold text-[36px] md:text-[52px] leading-[45px] md:leading-[68px] text-[#003459] flex items-center gap-[10px]">
            Adoption
            <img
              src="/assets/fontisto-paw.svg"
              alt="Paw"
              className="h-[24px] md:h-[32px] w-auto"
            />
          </h1>
          <h2 className="font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[54px] text-[#003459] capitalize my-[10px] md:my-[20px]">
            We Need Help. So Do They.
          </h2>
          <p className="font-medium text-[14px] md:text-[12px] leading-[20px] md:leading-[18px] text-[#242B33] mb-[15px] md:mb-[20px]">
            Adopt a pet and give it a home,
            <br />
            it will love you back unconditionally.
          </p>
          <div className="flex flex-col md:flex-row gap-[15px]">
            <button className="flex items-center justify-center gap-[8px] px-[28px] py-[14px] rounded-[57px] bg-[#003459] text-[#FDFDFD] cursor-pointer transition-colors duration-300">
              Explore Now
            </button>
            <button className="flex items-center justify-center gap-[8px] px-[28px] py-[14px] border border-[#003459] text-[#003459] rounded-[57px] bg-transparent cursor-pointer transition-colors duration-300 hover:bg-[#003459] hover:text-[#FDFDFD]">
              View Intro
              <img
                src="/assets/media-play-circle.svg"
                alt="Play"
                className="h-[24px] w-[24px]"
              />
            </button>
          </div>
        </div>
        <img
          src="/assets/pngegg-4-1.svg"
          alt="Hands"
          className="absolute right-[-120px] -bottom-10 h-auto  md:bottom-[-150px]"
        />
      </div>
    </div>
  );
};

export default AdoptionBanner;
