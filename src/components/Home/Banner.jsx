import React from 'react';

const Banner = () => {
  return (
    
    <div className=" relative flex flex-col h-[700px]  md:h-[400px]  md:flex-row items-center justify-between bg-gradient-to-r from-[#003459] to-[#fdfdfd] rounded-[20px] overflow-hidden font-sans">
      <img
        src="./assets/rectangle-1.svg"
        alt="Background Shape"
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <img
        src="./assets/rectangle-9.svg"
        alt="Background Shape"
        className="absolute min-w-[800px] top-[-360px] md:right-0 z-0"
      />
      <img
        src="./assets/horizontal-shot-adult-girl-jeans-overalls-kissing-cute-puppy-while-raising-it-air-young-girl-being-love-with-her-dog-clothed-trendy-jumper-display-affection-3.svg"
        alt="Girl with Dog"
        className="absolute bottom-0 md:block w-[410px] md:w-full md:-ml-20 lg:ml-0 max-w-[513px] z-10"
      />
      <div className="text-[#003459] p-5 w-full flex flex-col items-center md:items-end  z-10">
        <h1 className="font-extrabold text-[32px] md:text-[52px] leading-[40px] md:leading-[68px] mb-2">One More Friend</h1>
        <h2 className="font-bold text-[24px] md:text-[36px] leading-[32px] md:leading-[54px] mb-2">Thousands More Fun!</h2>
        <p className="font-medium text-[14px] max-w-[400px] md:text-[12px] leading-[20px] md:leading-[18px] text-[#242b33] mb-5">
          Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
        </p>
        <div className="flex flex-col md:flex-row gap-5">
          <button className="flex items-center border border-[#003459] rounded-[57px] px-7 py-3 bg-transparent text-[#003459] font-medium text-[16px] cursor-pointer">
            View Intro
            <img src="./assets/media-play-circle.svg" alt="Play" className="ml-2 w-6 h-6" />
          </button>
          <button className="px-7 py-3 rounded-[57px] bg-[#003459] text-[#fdfdfd] font-medium text-[16px] cursor-pointer">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
