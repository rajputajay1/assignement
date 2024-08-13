import React from "react";
import Image from "next/image";

const Footer = () => {
  return (

    
    <div className="bg-white mt-10 pb-5">
      <div className="lg:flex lg:px-10 max-lg:px-3 pt-10 justify-between">
        <div>
          <p className="text-[20px] font-bold text-black max-lg:text-[16px]">
            BE THE FIRST TO KNOW
          </p>
          <p className="text-[16px] font-normal text-[#BFC8CD] max-lg:text-[14px]">
            Sign up for updates from mettā muse.
          </p>
          <div className="gap-5 flex mt-4 max-lg:gap-3">
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your e-mail..."
              className="px-2 py-2 bg-white lg:w-[370px] max-lg:w-[200px] placeholder-[#BFC8CD] h-[50px]"
              required
            />

            <button
              type="submit"
              className="px-4 max-lg:px-2 max-lg:text-[15px] py-2 text-[18px] text-black lg:w-[150px]  max-lg:w-[100px] font-medium uppercase rounded-md border h-[50px] active:bg-blue-800 border-[#4c4c4c]"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="max-lg:mt-5">
          <hr className="lg:hidden" />
          <p className="text-[20px] font-bold text-black max-lg:text-[16px] max-lg:mt-3">
            CONTACT US
          </p>
          <div className="max-lg:flex max-lg:text-[11px] max-lg:text-nowrap gap-4">
            <p className="text-[16px] font-normal text-black mt-1 max-lg:text-[14px]">
              +44221 133 5360
            </p>
            <p className="text-[16px] font-normal text-black mt-1 max-lg:text-[14px]">
              customercare@mettamuse.com
            </p>
          </div>
          <hr className="lg:hidden mt-4" />

          <p className="text-[20px] font-bold text-black mt-1 max-lg:text-[16px] max-lg:mt-3">
            CURRENCY
          </p>
          <div className="flex gap-2 mt-2">
            <Image src="/flag.svg" alt="Flag" width={24} height={24} />
            <p className="text-[16px] font-bold text-black">+ USD</p>
          </div>
          <p className="text-[13px] font-normal text-black mt-2 max-lg:hidden">
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
          <hr className="lg:hidden mt-4" />
        </div>
      </div>

      <div className="px-10 max-lg:hidden">
        <hr className="mt-5 px-10" />
      </div>

      <div className="lg:px-10 max-lg:px-3 lg:mt-8 lg:flex justify-between">
        <div className="max-lg:flex justify-between max-lg:mt-4">
          <p className="text-black font-bold text-[24px] max-lg:text-[19px]">
            mettā muse
          </p>
          <Image src="/right.svg" alt="Right Arrow" className="lg:hidden" width={16} height={16} />
          <ul className="text-[18px] font-normal text-black mt-2 max-lg:hidden">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <hr className="lg:hidden mt-4" />
        <div className="max-lg:flex justify-between max-lg:mt-4">
          <p className="text-black font-bold text-[24px] max-lg:text-[19px]">
            QUICK LINKS
          </p>
          <Image src="/right.svg" alt="Right Arrow" className="lg:hidden" width={16} height={16} />
          <ul className="text-[18px] font-normal text-black mt-2 max-lg:hidden">
            <li className="cursor-pointer">Orders & Shipping</li>
            <li className="cursor-pointer">Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <hr className="lg:hidden mt-4" />
        <div className="max-lg:mt-4">
          <div className="max-lg:flex justify-between">
            <p className="text-black font-bold text-[24px] max-lg:text-[19px]">
              FOLLOW US
            </p>
            <Image src="/right.svg" alt="Right Arrow" className="lg:hidden" width={16} height={16} />
          </div>
          <hr className="lg:hidden mt-4" />
          <div className="flex gap-2 mt-2 max-lg:hidden">
            <Image src="/Insta.svg" alt="Instagram" width={24} height={24} />
            <Image src="/a.svg" alt="A Icon" width={24} height={24} />
          </div>
          <p className="font-bold text-black text-[20px] mt-5 max-lg:text-[19px]">
            mettā muse ACCEPTS
          </p>
          <Image src="/card.svg" alt="Cards" className="mt-3" width={100} height={50} />
        </div>
      </div>

      <p className="text-[14px] font-normal text-black text-center mt-6">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
