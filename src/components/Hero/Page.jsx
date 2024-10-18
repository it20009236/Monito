import React from 'react';

const PetGallery = () => {
  const pets = [
    {
      id: 'MO512',
      name: 'Poodle Tiny Dairy Cow',
      gender: 'Male',
      age: '02 months',
      price: '5.000.000 VND',
      image: './assets/frame-7-8.svg',
    },
    {
      id: 'MO512',
      name: 'Alaskan Malamute Grey',
      gender: 'Male',
      age: '02 months',
      price: '8.900.000 VND',
      image: './assets/frame-7-7.svg',
    },
    {
      id: 'MO102',
      name: 'Poodle Tiny Sepia',
      gender: 'Male',
      age: '02 months',
      price: '4.000.000 VND',
      image: './assets/frame-7-5.svg',
    },
    {
      id: 'MO502',
      name: 'Poodle Tiny Yellow',
      gender: 'Female',
      age: '02 months',
      price: '3.900.000 VND',
      image: './assets/frame-7-3.svg',
    },
    {
      id: 'MO231',
      name: 'Pomeranian White',
      gender: 'Female',
      age: '02 months',
      price: '6.900.000 VND',
      image: './assets/frame-7.svg',
    },
    {
      id: 'MO231',
      name: 'Pembroke Corgi Cream',
      gender: 'Male',
      age: '02 months',
      price: '7.900.000 VND',
      image: './assets/frame-7-2.svg',
    },
    {
      id: 'MO502',
      name: 'Pembroke Corgi Tricolor',
      gender: 'Female',
      age: '02 months',
      price: '9.000.000 VND',
      image: './assets/frame-7-4.svg',
    },
    {
      id: 'MO513',
      name: 'Poodle Tiny Daisy Cow',
      gender: 'Male',
      age: '02 months',
      price: '6.500.000 VND',
      image: './assets/frame-7-6.svg',
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto p-16 font-sans">
      <h2 className="font-bold text-2xl text-[#003459] text-center mb-8">
        Take A Look At Some Of Our Pets
      </h2>
      <button className="flex items-center justify-center border border-[#003459] rounded-full px-7 py-3 text-[#003459] bg-transparent font-medium text-sm mb-10 mx-auto">
        View more
        <img src="./assets/arrow-chevron-right-md.svg" alt="Chevron Right" className="ml-2" />
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        {pets.map((pet) => (
          <div className="bg-white rounded-lg overflow-hidden w-[264px] shadow-md" key={pet.id}>
            <img src={pet.image} alt={pet.name} className="w-full h-[264px] object-cover" />
            <div className="p-2">
              <h3 className="font-bold text-lg text-[#00171F] my-2">{pet.id} - {pet.name}</h3>
              <div className="flex justify-between text-sm text-[#667479]">
                <span>Gene: <strong>{pet.gender}</strong></span>
                <span>Age: <strong>{pet.age}</strong></span>
              </div>
              <p className="font-bold text-base text-[#00171F] mt-2">{pet.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetGallery;
