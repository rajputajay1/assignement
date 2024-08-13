// import React from "react";
import Image from "next/image";
// import Sidebar from "../Sidebar/Sidebar";

function Card() {
  const Cards = [
    {
      image: "/Front.svg",
      title: "PPXOC MILKWAY DRESS IN PRESSED FLOWERS",
    },
    {
      image: "/gudda.svg",
      title: "PPXOC MILKWAY DRESS IN PRESSED FLOWERS",
    },
    {
      image: "/belt.svg",
      title: "PPXOC MILKWAY DRESS IN PRESSED FLOWERS",
    },
    {
      image: "/parse.svg",
      title: "PPXOC MILKWAY DRESS IN PRESSED FLOWERS",
    },
    {
      image: "/Front.svg",
      title: "PPXOC MILKWAY DRESS IN PRESSED FLOWERS",
    },
    {
      image: "/gudda.svg",
      title: "PPXOC MILKWAY DRESS IN PRESSED FLOWERS",
    },
    {
      image: "/belt.svg",
      title: "PPXOC MILKWAY DRESS IN PRESSED FLOWERS",
    },
    {
      image: "/parse.svg",
      title: "PPXOC MILKWAY DRESS IN PRESSED FLOWERS",
    },
    {
      image: "/Front.svg",
      title: "PPXOC MILKWAY DRESS IN PRESSED FLOWERS",
    },
    {
      image: "/belt.svg",
      title: "PPXOC MILKWAY DRESS IN PRESSED FLOWERS",
    },
    {
      image: "/gudda.svg",
      title: "PPXOC MILKWAY DRESS IN PRESSED FLOWERS",
    },
    {
      image: "/parse.svg",
      title: "PPXOC MILKWAY DRESS IN PRESSED FLOWERS",
    },
  ];

  return (
    <div className="flex">
      {/* Uncomment Sidebar if needed */}
      {/* <Sidebar /> */}
      <div className="flex-1 flex overflow-x-auto">
        <div className="flex flex-wrap lg:justify-between max-lg:justify-center">
          {Cards.map((card, index) => (
            <div key={index} className="mt-10 lg:px-10 max-lg:px-3 lg:max-w-[370px]">
              <Image src={card.image} alt={card.title} width={370} height={500} />
              <p className="font-bold text-[16px] text-[#252020] truncate mt-2 max-lg:text-[14px] max-lg:text-wrap">
                {card.title}
              </p>
              <div className="flex justify-between">
                <div className="flex font-normal text-[13px] gap-1 text-[#888792] max-lg:text-[11px] max-lg:text-wrap">
                  <p className="underline">Sign in</p>
                  <p>or Create an account to see pricing</p>
                </div>
                <Image src="/heart.svg" alt="Heart" width={16} height={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
