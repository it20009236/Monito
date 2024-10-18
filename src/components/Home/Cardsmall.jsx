import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-[12px] shadow-sm flex flex-col overflow-hidden mb-5 flex-1">
      <img src={image} alt={title} className="w-full h-[240px] object-cover" />
      <div className="p-2">
        <div className="bg-[#00a7e7] text-[#fdfdfd] rounded-[28px] px-2 py-1 font-bold text-[10px] mb-2 inline-block">
          Pet knowledge
        </div>
        <div>
          <h3 className="font-bold text-[16px] leading-[24px] text-[#00171f]">
            {title}
          </h3>
          <p className="font-normal text-[14px] leading-[20px] text-[#242b33]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-5">
      <header className="mb-[40px]">
        <h1 className="font-medium text-[16px] leading-[24px] text-[#000000]">
          You already know ?
        </h1>
        <h2 className="font-bold text-[24px] leading-[36px] text-[#003459]">
          Useful pet knowledge
        </h2>
      </header>

      <div className="flex gap-[20px] justify-between mb-[20px]">
        <Card
          image="./assets/frame-7.svg"
          title="What is a Pomeranian? How to Identify Pomeranian Dogs"
          description="The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed."
        />
        <Card
          image="./assets/frame-7-2.svg"
          title="Dog Diet You Need To Know"
          description="Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance."
        />
        <Card
          image="./assets/frame-7-3.svg"
          title="Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively"
          description="Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog."
        />
      </div>

      <button className="flex items-center gap-[10px] border-[1.5px] border-[#003459] text-[#003459] rounded-[57px] px-[28px] py-[12px] transition-colors duration-300 hover:bg-[#003459] hover:text-[#fdfdfd]">
        View more
        <img src="./assets/arrow-chevron-right-md.svg" alt="arrow" className="w-[20px] h-[20px]" />
      </button>
    </div>
  );
};

export default App;
