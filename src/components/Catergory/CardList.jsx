import React, { useEffect, useState } from "react";

// ProductCard Component
function ProductCard({ data }) {
  return (
    <div className="bg-[#FDFDFD] rounded-[12px] shadow-md overflow-hidden xl:w-[200px] m-[10px]">
      <img
        src={data.image}
        alt="Alaskan Malamute Grey"
        className="w-full h-[140px] sm:h-[190px] md:h-[200px]  object-cover"
      />
      <div className="p-2">
        <h3 className="font-bold text-md text-[#00171F] my-2">
          {data.id} - {data.name}
        </h3>
        <div className="flex justify-between text-xs text-[#667479]">
          <span>
            Gene: <strong>{data.gender}</strong>
          </span>
          <span>
            Age: <strong>{data.age}</strong>
          </span>
        </div>
        <p className="font-bold text-sm text-[#00171F] mt-2">{data.price}</p>
      </div>
    </div>
  );
}

// Pagination Component
function Pagination() {
  return (
    <div className="flex items-center gap-3 mt-4">
      <div className="w-[30px] h-[34px] flex items-center justify-center rounded-lg">
        <img src="/assets/arrow-arrow-right-sm.svg" alt="Previous" />
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
        <img src="/assets/arrow-arrow-right-sm-2.svg" alt="Next" />
      </div>
    </div>
  );
}

// ProductList Component
function ProductList() {
  const [allpets, setAllPets] = useState([]);
  const pets = async () =>
    await fetch("https://monitor-backend-rust.vercel.app/api/pets")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        setAllPets(data);
        console.log(data); // Handle the data from the API
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });

  useEffect(() => {
    pets();
  }, []);
  // Create an array with 12 items to render 12 cards
  const cards = Array.from({ length: 12 });

  return (
    <div className="flex flex-col gap-5 mb-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-5 justify-items-center">
        {allpets?.map((data, index) => (
          <ProductCard key={index} data={data} />
        ))}
        {/* Pagination Section */}
      </div>
      <Pagination />
    </div>
  );
}

export default ProductList;
