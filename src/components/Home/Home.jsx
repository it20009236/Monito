import React from "react";
import Page from "./Page"; // Ensure this path is correct for your project structure
import Banner from "./Banner"; // Adjust this path based on the location of your Banner component
import ProductGallery from "./Card"; // Import the ProductGallery component
import PetSeller from "./Bar";
import AdoptionBanne from "./Bannernew";
import Card from "./Cardsmall";
import Header from "../NavBar/NavBar";
const HeroBanner = () => {
  return (
    <div>
      <div className="relative top-0  h-[900px]  md:h-[600px] bg-gradient-to-r z-0 from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA]">
        {/* Hero Section */}
        <img
          src="src/assets/Group 1.png"
          alt="Girl with Dog"
          className="absolute hidden md:block h-full w-full object-cover -z-10"
        />
          
        <div className="z-10">
          <Header></Header>
        </div>

        <div className=" flex flex-col  items-center md:flex-row justify-between px-5 py-10 md:py-16 md:px-16 font-sans">
          {/* Text Container */}
          <div className="z-10 max-w-xl text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-[#002a48] font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
              One More Friend
            </h1>
            <h2 className="text-[#002a48] font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
              Thousands More Fun!
            </h2>
            <p className="text-[#242b33] font-medium text-base md:text-lg leading-6 md:leading-7 mb-8">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
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
        </div>
        <img
          src="src/assets/Group 2.png"
          alt="Girl with Dog"
          className=" md:hidden w-full absolute bottom-0 h-1/2 object-cover  -z-10"
        />
      </div>

      {/* Card View Section */}
      <div className="mt-10 mx-2 lg:mx-20 xl:mx-32">
        <Page /> {/* This will render the card view below the hero section */}
      </div>

      {/* Banner Section */}
      <div className="mt-10 mx-2 lg:mx-20 xl:mx-32">
        <Banner />{" "}
        {/* This will render the Banner component below the card view */}
      </div>

      {/* Product Gallery Section */}
      <div className="mt-10 mx-2 lg:mx-20 xl:mx-32">
        <ProductGallery />{" "}
        {/* This will render the ProductGallery component below the Banner */}
      </div>
      <div className="mt-10 mx-5 lg:mx-20 xl:mx-32">
        <PetSeller />{" "}
        {/* This will render the ProductGallery component below the Banner */}
      </div>
      <div className="mt-10 mx-2 lg:mx-20 xl:mx-32">
        <AdoptionBanne />{" "}
        {/* This will render the ProductGallery component below the Banner */}
      </div>
      <div className="mt-10 mx-4 lg:mx-20 xl:mx-32">
        <Card />{" "}
        {/* This will render the ProductGallery component below the Banner */}
      </div>
    </div>
  );
};

export default HeroBanner;
