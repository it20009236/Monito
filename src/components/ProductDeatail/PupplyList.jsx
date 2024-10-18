import React from 'react';

function PuppyCard({ image, title, gene, age, price }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs w-full">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-3">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
        <div className="flex gap-2 text-sm text-gray-500 mb-2">
          <span className="font-medium">Gene:</span>
          <span className="font-semibold">{gene}</span>
          <span className="font-medium">Age:</span>
          <span className="font-semibold">{age}</span>
        </div>
        <p className="font-bold text-base text-gray-800">{price}</p>
      </div>
    </div>
  );
}

function PuppyGallery() {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-8">
      <h2 className="font-bold text-2xl text-blue-900 mb-5">See More Puppies</h2>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        <PuppyCard
          image="./assets/frame-7.svg"
          title="MO231 - Pomeranian White"
          gene="Male"
          age="02 months"
          price="6.900.000 VND"
        />
        <PuppyCard
          image="./assets/frame-7-2.svg"
          title="MO502 - Poodle Tiny Yellow"
          gene="Female"
          age="02 months"
          price="3.900.000 VND"
        />
        <PuppyCard
          image="./assets/frame-7-3.svg"
          title="MO102 - Poodle Tiny Sepia"
          gene="Male"
          age="02 months"
          price="4.000.000 VND"
        />
        <PuppyCard
          image="./assets/frame-7-4.svg"
          title="MO512 - Alaskan Malamute Grey"
          gene="Male"
          age="02 months"
          price="8.900.000 VND"
        />
      </div>
    </div>
  );
}

export default PuppyGallery;
