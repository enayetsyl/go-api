'use client'
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const DashNav = (props: Props) => {
const [isOpen, setIsOpen] = useState(false)

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

  return (
    <div className="p-10">
      <div className="flex justify-between items-center border-b border-white pb-5">
        <h1 className="font-bold text-2xl text-white" onClick={toggleMenu}>ComeAPI</h1>
        <div className="relative " >
        <div onClick={toggleMenu}>
            <Image
              src={"/images/user/user-02.png"}
              height={40}
              width={40}
              alt="userimage"
              className="rounded-full border border-solid border-white w-10 h-10"
            />
          </div>

        <div className={`flex flex-col gap-2 p-3 bg-white rounded-xl absolute top-11 right-0 w-60  ${isOpen ? 'block' : 'hidden'}`}>
          <p className="border-b border-gray-300 whitespace-nowrap pb-1">Md Enayetur Rahman</p>
          <p>Logout</p>
        </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default DashNav;
