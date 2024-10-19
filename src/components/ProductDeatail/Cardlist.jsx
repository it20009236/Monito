import React from 'react';

function CustomerGallery() {
  return (
    <div className="px-0 md:px-24 bg-[#fdfdfd] py-6 rounded-[20px]">
      <h2 className="text-[24px] font-bold text-[#00171f] pl-4">Our lovely customer</h2>
      <div className="flex gap-3 pl-4 mt-6 overflow-x-scroll">
        <img src="./assets/frame-118.svg" alt="Customer 1" className="w-[248px] h-[340px] rounded-[10px]" />
        <img src="./assets/frame-119.svg" alt="Customer 2" className="w-[248px] h-[340px] rounded-[10px]" />
        <img src="./assets/frame-120.svg" alt="Customer 3" className="w-[248px] h-[340px] rounded-[10px]" />
        <img src="./assets/frame-121.svg" alt="Customer 4" className="w-[248px] h-[340px] rounded-[10px]" />
        <img src="./assets/frame-122.svg" alt="Customer 5" className="w-[248px] h-[340px] rounded-[10px]" />
      </div>
      <div className="flex justify-center gap-1.5 mt-6">
        <img src="./assets/frame-123.svg" alt="Dot 1" className="w-[9px] h-[9px]" />
        <img src="./assets/frame-124.svg" alt="Dot 2" className="w-[9px] h-[9px]" />
        <img src="./assets/frame-125.svg" alt="Dot 3" className="w-[9px] h-[9px]" />
        <img src="./assets/frame-126.svg" alt="Dot 4" className="w-[9px] h-[9px]" />
        <img src="./assets/frame-127.svg" alt="Dot 5" className="w-[9px] h-[9px]" />
        <img src="./assets/frame-128.svg" alt="Dot 6" className="w-[9px] h-[9px]" />
      </div>
    </div>
  );
}

export default CustomerGallery;
