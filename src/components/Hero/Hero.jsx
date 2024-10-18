import React from "react";
import Page from "../Hero/Page"; // Ensure this path is correct for your project structure
import Banner from "../Hero/Banner"; // Adjust this path based on the location of your Banner component
import ProductGallery from "../Hero/Card"; // Import the ProductGallery component
import PetSeller from "../Hero/Bar";
import AdoptionBanne from "../Hero/Bannernew";

const HeroBanner = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] flex flex-col md:flex-row items-center justify-between px-5 py-10 md:py-16 md:px-16 font-sans">
        {/* Text Container */}
        <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-[#002a48] font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            One More Friend
          </h1>
          <h2 className="text-[#002a48] font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Thousands More Fun!
          </h2>
          <p className="text-[#242b33] font-medium text-base md:text-lg leading-6 md:leading-7 mb-8">
            Having a pet means you have more joy, a new friend, a happy person who
            will always be with you to have fun. We have 200+ different pets that
            can meet your needs!
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="flex items-center border border-[#003459] rounded-full py-3 px-6 text-[#003459] bg-transparent font-medium text-base hover:bg-[#003459] hover:text-white transition-colors">
              View Intro
              <img
                src="./assets/media-play-circle.svg"
                alt="Play"
                className="w-6 h-6 ml-2"
              />
            </button>
            <button className="bg-[#003459] text-white rounded-full py-3 px-6 font-medium text-base hover:bg-[#00497a] transition-colors">
              Explore Now
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="w-full max-w-lg">
          <img
            src="./assets/good-humored-woman-holds-dog-laughing-pink-background-emotional-sort-haired-girl-grey-hoodie-poses-with-corgi-isolated-1.svg"
            alt="Happy Woman and Dog"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Card View Section */}
      <div className="mt-10 px-5 md:px-16">
        <Page /> {/* This will render the card view below the hero section */}
      </div>

      {/* Banner Section */}
      <div className="mt-10">
        <Banner /> {/* This will render the Banner component below the card view */}
      </div>

      {/* Product Gallery Section */}
      <div className="mt-10">
        <ProductGallery /> {/* This will render the ProductGallery component below the Banner */}
      </div>
      <div className="mt-10">
        <PetSeller /> {/* This will render the ProductGallery component below the Banner */}
      </div>
      <div className="mt-10">
        <AdoptionBanne /> {/* This will render the ProductGallery component below the Banner */}
      </div>
    </div>
  );
};

export default HeroBanner;
