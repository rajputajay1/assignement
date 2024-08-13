

import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <>
      <div className="w-[250px] mt-10">
        <div>
          <div className="flex justify-between">
            <p className="text-[17px] font-bold text-[#252020]">IDEAL FOR</p>
            <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
          </div>
          <p className="text-[16px] font-normal text-[#252020]">All</p>
          <hr className="my-2" />
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-[17px] font-bold text-[#252020]">OCCASION</p>
            <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
          </div>
          <p className="text-[16px] font-normal text-[#252020]">All</p>
          <hr className="my-2" />
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-[17px] font-bold text-[#252020]">WORK</p>
            <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
          </div>
          <p className="text-[16px] font-normal text-[#252020]">All</p>
          <hr className="my-2" />
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-[17px] font-bold text-[#252020]">FABRIC</p>
            <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
          </div>
          <p className="text-[16px] font-normal text-[#252020]">All</p>
          <hr className="my-2" />
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-[17px] font-bold text-[#252020]">SEGMENT</p>
            <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
          </div>
          <p className="text-[16px] font-normal text-[#252020]">All</p>
          <hr className="my-2" />
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-[17px] font-bold text-[#252020]">SUITABLE FOR</p>
            <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
          </div>
          <p className="text-[16px] font-normal text-[#252020]">All</p>
          <hr className="my-2" />
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-[17px] font-bold text-[#252020]">RAW MATERIALS</p>
            <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
          </div>
          <p className="text-[16px] font-normal text-[#252020]">All</p>
          <hr className="my-2" />
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-[17px] font-bold text-[#252020]">PATTERN</p>
            <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
          </div>
          <p className="text-[16px] font-normal text-[#252020]">All</p>
          <hr className="my-2" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
