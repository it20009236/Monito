import React, { useEffect, useState } from "react";

const PetGallery = () => {
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
  console.log("allpets:", allpets);
  return (
    <div className=" w-full font-sans">
      <h2 className="font-bold text-2xl text-[#003459] text-center mb-8">
        Take A Look At Some Of Our Pets
      </h2>
      <button className="flex items-center justify-center border border-[#003459] rounded-full px-7 py-3 text-[#003459] bg-transparent font-medium text-sm mb-10 mx-auto">
        View more
        <img
          src="/assets/arrow-chevron-right-md.svg"
          alt="Chevron Right"
          className="ml-2"
        />
      </button>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-5 justify-items-center">
        {allpets?.map((pet) => (
          <a
            href="/about"
            className="font-bold text-[16px] leading-6 text-[#003459]"
          >
            <div
              className="bg-white rounded-lg overflow-hidden w-[140px] sm:w-[190px] md:w-[200px] xl:w-[260px] shadow-md col-span-1"
              key={pet.id}
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-[140px] sm:h-[190px] md:h-[200px] xl:h-[260px] object-cover"
              />
              <div className="p-2">
                <h3 className="font-bold text-md text-[#00171F] my-2">
                  {pet.id} - {pet.name}
                </h3>
                <div className="flex justify-between text-xs text-[#667479]">
                  <span>
                    Gene: <strong>{pet.gender}</strong>
                  </span>
                  <span>
                    Age: <strong>{pet.age}</strong>
                  </span>
                </div>
                <p className="font-bold text-sm text-[#00171F] mt-2">
                  {pet.price}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PetGallery;
