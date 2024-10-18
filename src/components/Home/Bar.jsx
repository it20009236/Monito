import React from 'react';

const PetSellers = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <div className="flex items-baseline gap-2">
          <span className="font-medium text-base text-black">Proud to be part of</span>
          <span className="font-bold text-2xl text-[#003459]">Pet Sellers</span>
        </div>
        <button 
          className="flex items-center gap-2 border border-[#003459] rounded-full py-2 px-4 bg-transparent text-[#003459] font-medium text-sm transition-colors hover:bg-[#003459] hover:text-white"
          aria-label="View all our sellers"
        >
          View all our sellers
          <img 
            src="./assets/arrow-chevron-right-md.svg" 
            alt="Chevron right" 
            className="w-5 h-5"
          />
        </button>
      </header>
      <div className="flex flex-wrap justify-between items-center mt-10 gap-4">
        <img src="./assets/frame-34.svg" alt="Sheba logo" className="max-w-[168px] object-contain" />
        <img src="./assets/frame-35.svg" alt="Whiskas logo" className="max-w-[168px] object-contain" />
        <img src="./assets/frame-36.svg" alt="Bakers logo" className="max-w-[168px] object-contain" />
        <img src="./assets/frame-41.svg" alt="Felix logo" className="max-w-[168px] object-contain" />
        <img src="./assets/frame-37.svg" alt="Good Boy logo" className="max-w-[168px] object-contain" />
        <img src="./assets/frame-38.svg" alt="Butchers logo" className="max-w-[168px] object-contain" />
        <img src="./assets/frame-39.svg" alt="Pedigree logo" className="max-w-[168px] object-contain" />
      </div>
    </div>
  );
};

export default PetSellers;
