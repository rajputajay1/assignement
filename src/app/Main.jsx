"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";
import Image from "next/image";

function Main() {
  const [popup, setPopup] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClick = () => {
    setPopup(!popup);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className="mt-10 lg:px-10 max-lg:px-3">
        <hr />
        <div className="flex justify-between my-5 relative">
          <div className="flex gap-10">
            <p className="text-[18px] font-bold text-[#252020] max-lg:hidden">
              3425 Items
            </p>
            <div
              className="flex gap-1 cursor-pointer max-lg:hidden"
              onClick={toggleSidebar}
            >
              <Image src="/left.svg" alt="Toggle Sidebar" width={16} height={16} />
              <p className="text-[18px] font-normal text-[#888792] text-nowrap">
                {showSidebar ? "HIDE FILTER" : "SHOW FILTER"}
              </p>
            </div>
            <p className="text-[18px] font-bold text-[#252020] lg:hidden">
              FILTER
            </p>
          </div>
          <div>
            <p
              className="text-[#252020] font-bold text-[18px] cursor-pointer"
              onClick={handleClick}
            >
              RECOMMENDED
            </p>

            {popup && (
              <div
                className="absolute right-0 bg-white py-4 px-10 rounded-lg shadow-lg text-right"
                onClick={() => setPopup(false)}
              >
                <p className="text-[18px] font-bold text-[#252020] mt-2">
                  RECOMMENDED
                </p>
                <p className="text-[18px] font-normal text-[#252020] mt-2">
                  NEWEST FIRST
                </p>
                <p className="text-[18px] font-normal text-[#252020] mt-2">
                  POPULAR
                </p>
                <p className="text-[18px] font-normal text-[#252020] mt-2">
                  PRICE : HIGH TO LOW
                </p>
                <p className="text-[18px] font-normal text-[#252020] mt-2">
                  PRICE : LOW TO HIGH
                </p>
              </div>
            )}
          </div>
        </div>
        <hr />

        <div className="flex">
          {showSidebar && (
            <div className="w-[250px]">
              <Sidebar />
            </div>
          )}
          <div>
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
