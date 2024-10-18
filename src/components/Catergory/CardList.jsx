import React from 'react';

// ProductCard Component
function ProductCard() {
  return (
    <div className="bg-[#FDFDFD] rounded-[12px] shadow-md overflow-hidden max-w-[264px] m-[10px]">
      <img
        src="./assets/frame-7-15.svg"
        alt="Alaskan Malamute Grey"
        className="w-full h-[264px] object-cover"
      />
      <div className="p-[8px]">
        <h3 className="font-bold text-[16px] leading-[24px] text-[#00171F] mb-[8px]">
          MO512 - Alaskan Malamute Grey
        </h3>
        <div className="flex justify-between mb-[8px]">
          <div className="flex gap-[6px]">
            <span className="font-medium text-[12px] text-[#667479]">Gene:</span>
            <span className="font-bold text-[12px] text-[#667479]">Male</span>
          </div>
          <div className="flex gap-[6px]">
            <span className="font-medium text-[12px] text-[#667479]">Age:</span>
            <span className="font-bold text-[12px] text-[#667479]">02 months</span>
          </div>
        </div>
        <div className="font-bold text-[14px] text-[#00171F]">8.900.000 VND</div>
      </div>
    </div>
  );
}

// Pagination Component
function Pagination() {
  return (
    <div className="flex items-center gap-3 mt-4">
      <div className="w-[30px] h-[34px] flex items-center justify-center rounded-lg">
        <img src="./assets/arrow-arrow-right-sm.svg" alt="Previous" />
      </div>
      <div className="flex items-center justify-center w-[32px] h-[34px] font-bold text-[18px] leading-[24px] text-[#002A48] rounded-[10px] bg-[#003459] text-[#FDFDFD]">
        1
      </div>
      <div className="flex items-center justify-center w-[32px] h-[34px] font-bold text-[18px] leading-[24px] text-[#002A48] rounded-[10px]">
        2
      </div>
      <div className="flex items-center justify-center w-[32px] h-[34px] font-bold text-[18px] leading-[24px] text-[#002A48] rounded-[10px]">
        3
      </div>
      <div className="flex items-center justify-center w-[32px] h-[34px] font-bold text-[18px] leading-[24px] text-[#002A48] rounded-[10px]">
        4
      </div>
      <div className="flex items-center justify-center w-[20px] px-2 font-bold text-[18px] leading-[24px] text-[#002A48]">
        ...
      </div>
      <div className="flex items-center justify-center w-[32px] h-[34px] font-bold text-[18px] leading-[24px] text-[#002A48] rounded-[10px]">
        28
      </div>
      <div className="w-[30px] h-[34px] flex items-center justify-center rounded-lg">
        <img src="./assets/arrow-arrow-right-sm-2.svg" alt="Next" />
      </div>
    </div>
  );
}

// ProductList Component
function ProductList() {
  // Create an array with 12 items to render 12 cards
  const cards = Array.from({ length: 12 });

  return (
    <div className="max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] p-[20px]">
      {cards.map((_, index) => (
        <ProductCard key={index} />
      ))}
      {/* Pagination Section */}
      <Pagination />
    </div>
  );
}

export default ProductList;
