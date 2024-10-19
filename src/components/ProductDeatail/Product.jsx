import React from "react";

function ProductDetail() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-evenly w-[100%] md:w-[90%] mx-auto md:p-5 bg-white md:rounded-2xl border border-[#ebeeef]">
      <div className="w-full md:w-[560px]">
        <div className="relative w-full">
          <div className="w-full">
            <div className="absolute top-1/3 w-[42px] h-[42px] bg-white/40 rounded-full flex items-center justify-center transform -translate-y-1/2 cursor-pointer left-4">
              <img src="./assets/arrow-caret-left-sm.svg" alt="Previous" />
            </div>
            <img
              src="./assets/section-1-image-7.svg"
              alt="Main"
              className="w-full rounded-none md:rounded-lg"
            />
            <div className="absolute top-1/3 x w-[42px] h-[42px] bg-white/40 rounded-full flex items-center justify-center transform -translate-y-1/2 cursor-pointer right-4">
              <img src="./assets/arrow-caret-left-sm-2.svg" alt="Next" />
            </div>
          </div>
          <div className="mt-5">
            <img
              src="./assets/frame-136.svg"
              alt="Thumbnail"
              className="w-full"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center p-2 mt-4 bg-gradient-to-r from-[#fceedd] to-[#ffe7ba] rounded-lg">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#fceed5] flex items-center justify-center rounded-full mr-2">
                <img src="./assets/frame.svg" alt="Guarantee Icon" />
              </div>
              <span className="font-bold text-sm text-[#002a48]">
                100% health guarantee for pets
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#fceed5] flex items-center justify-center rounded-full mr-2">
                <img src="./assets/frame-2.svg" alt="Guarantee Icon" />
              </div>
              <span className="font-bold text-sm text-[#002a48]">
                100% guarantee of pet identification
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 mt-5">
            <div className="flex items-center gap-2">
              <img src="./assets/communication-share-android.svg" alt="Share" />
              <span className="font-bold text-sm text-[#002a48]">Share:</span>
            </div>
            <div className="flex items-center">
              <img
                src="./assets/facebook-negative.svg"
                alt="Facebook"
                className="w-5 h-5 ml-4 cursor-pointer"
              />
              <img
                src="./assets/twitter-negative.svg"
                alt="Twitter"
                className="w-5 h-5 ml-4 cursor-pointer"
              />
              <img
                src="./assets/instagram-negative.svg"
                alt="Instagram"
                className="w-5 h-5 ml-4 cursor-pointer"
              />
              <img
                src="./assets/you-tube-negative.svg"
                alt="YouTube"
                className="w-5 h-5 ml-4 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[560px] mt-5 md:mt-0 mx-3 md:ml-5">
        <div>
          <div className="hidden  text-sm text-[#667479] mb-4 xl:flex items-center">
            <span>Home</span>
            <img
              src="./assets/arrow-caret-right-sm.svg"
              alt="Arrow"
              className="mx-1"
            />
            <span>Dog</span>
            <img
              src="./assets/arrow-caret-right-sm-2.svg"
              alt="Arrow"
              className="mx-1"
            />
            <span>Large Dog</span>
            <img
              src="./assets/arrow-caret-right-sm-3.svg"
              alt="Arrow"
              className="mx-1"
            />
            <span>Shiba Inu Sepia</span>
          </div>
          <div className="mb-4">
            <span className="block font-medium text-sm text-[#99a2a5]">
              SKU #1000078
            </span>
            <h1 className="font-bold text-2xl text-[#00171f] my-2">
              Shiba Inu Sepia
            </h1>
            <p className="font-bold text-xl text-[#002a48]">34.000.000 VND</p>
          </div>

          {/* Buttons in a single row */}
          <div className="flex space-x-4 mt-4">
            <button className="px-3 md:px-7 py-2 md:py-4  rounded-full bg-[#003459] text-white font-bold text-sm md:text-lg">
              Contact us
            </button>
            <button className="px-3 md:px-7 py-2 md:py-4 flex items-center border-2 border-[#002a48] text-[#002a48] rounded-full text-sm md:text-lg">
              <img
                src="./assets/communication-chat-dots.svg"
                alt="Chat"
                className="mr-2"
              />
              Chat with Monito
            </button>
          </div>
          <table className="w-full border-collapse mt-4">
            <tbody>
              <tr>
                <th className="font-medium text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  SKU
                </th>
                <td className="text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  : #1000078
                </td>
              </tr>
              <tr>
                <th className="font-medium text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  Gender
                </th>
                <td className="text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  : Female
                </td>
              </tr>
              <tr>
                <th className="font-medium text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  Age
                </th>
                <td className="text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  : 2 Months
                </td>
              </tr>
              <tr>
                <th className="font-medium text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  Size
                </th>
                <td className="text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  : Small
                </td>
              </tr>
              <tr>
                <th className="font-medium text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  Color
                </th>
                <td className="text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  : Apricot & Tan
                </td>
              </tr>
              <tr>
                <th className="font-medium text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  Vaccinated
                </th>
                <td className="text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  : Yes
                </td>
              </tr>
              <tr>
                <th className="font-medium text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  Dewormed
                </th>
                <td className="text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  : Yes
                </td>
              </tr>
              <tr>
                <th className="font-medium text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  Cert
                </th>
                <td className="text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  : Yes (MKA)
                </td>
              </tr>
              <tr>
                <th className="font-medium text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  Microchip
                </th>
                <td className="text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  : Yes
                </td>
              </tr>
              <tr>
                <th className="font-medium text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  Location
                </th>
                <td className="text-sm text-[#667479] px-2 py-1 border-t border-[#ebeeef]">
                  : Vietnam
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
