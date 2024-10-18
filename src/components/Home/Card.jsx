import React from 'react';

const products = [
  {
    id: '1',
    name: 'NaturVet Dogs - Omega-Gold Plus Salmon Oil',
    type: 'Dog Food',
    size: '385gm',
    price: '350.000 VND',
    image: './assets/frame-7-5.svg',
    offer: 'Free Toy & Free Shaker',
  },
  {
    id: '2',
    name: 'Costumes Fashion Pet Clother Cowboy Rider',
    type: 'Costume',
    price: '500.000 VND',
    image: './assets/frame-7-6.svg',
    offer: 'Free Toy & Free Shaker',
  },
  {
    id: '3',
    name: 'Costumes Chicken Drumstick Headband',
    type: 'Costume',
    price: '400.000 VND',
    image: './assets/frame-7-7.svg',
    offer: 'Free Cat Food',
  },
  {
    id: '4',
    name: 'Plush Pet Toy',
    type: 'Toy',
    price: '250.000 VND',
    image: './assets/frame-7-8.svg',
    offer: 'Free Food & Shaker',
  },
  {
    id: '5',
    name: 'Reflex Plus Adult Cat Food Salmon',
    type: 'Cat Food',
    size: '1.5kg',
    price: '165.000 VND',
    image: './assets/frame-7.svg',
    offer: 'Free Toy & Free Shaker',
  },
  {
    id: '6',
    name: 'Cat scratching ball toy kitten sisal rope ball',
    type: 'Toy',
    price: '1.100.000 VND',
    image: './assets/frame-7-3.svg',
    offer: 'Free Food & Shaker',
  },
  {
    id: '7',
    name: 'Cute Pet Cat Warm Nest',
    type: 'Toy',
    price: '410.000 VND',
    image: './assets/frame-7-4.svg',
    offer: 'Free Cat Food',
  },
];

const ProductGallery = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-16 font-sans">
      <h2 className="font-bold text-2xl text-[#003459] mb-8">Our Products</h2>
      <button className="flex items-center justify-center border-2 border-[#003459] rounded-full px-7 py-3 text-[#003459] bg-transparent font-medium text-sm mb-10 mx-auto">
        View more
        <img src="./assets/arrow-chevron-right-md.svg" alt="Chevron Right" className="ml-2" />
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div className="bg-white rounded-lg overflow-hidden shadow-lg" key={product.id}>
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg text-[#00171f] mb-1">{product.name}</h3>
              <div className="text-sm text-[#667479] mb-1">
                <div>
                  Product: <strong>{product.type}</strong>
                </div>
                {product.size && (
                  <div>
                    Size: <strong>{product.size}</strong>
                  </div>
                )}
              </div>
              <p className="font-bold text-md text-[#00171f] mt-1">{product.price}</p>
              <div className="flex items-center bg-[#fceed5] rounded-lg py-1 px-2 text-sm font-bold text-[#002a48] mt-2">
                <img src="./assets/frame-5.svg" alt="Offer Icon" className="w-5 h-5 mr-2" />
                <span>{product.offer}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
