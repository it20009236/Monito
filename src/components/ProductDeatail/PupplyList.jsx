import React, { useEffect, useState } from "react";

function PuppyGallery() {
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
  return (
    <div className="container md:px-32 py-10">
      <h2 className="font-bold text-2xl ml-5 text-blue-900 mb-8">
        See More Puppies
      </h2>
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
}

export default PuppyGallery;
