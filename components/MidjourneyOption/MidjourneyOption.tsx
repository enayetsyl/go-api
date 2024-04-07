import { OptionDataItem } from "@/app/(site)/midjourneyAPI/pageData";
import React from "react";
import { BsCoin, BsCreditCard2FrontFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa6";
import { PiCardsDuotone } from "react-icons/pi";

const MidjourneyOption = ({data}: { data: OptionDataItem }) => {
  const {
    title1,
    title2,
    title3,
    icon1,
    icon2,
    icon3,
    icon1Text, icon2Text,icon3Text,
    list,
    text1,
    text2,
    text3,
    text4,
  } = data;
  return (
    <div className="space-y-5">
      <h1 className="text-xl text-[#000] md:text-2xl dark:text-white">
        {title1} <span className="text-blue-500">{title2}</span> {title3}
      </h1>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4">
          <div className="bg-white- flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 shadow-lg md:h-24 md:w-24 lg:h-36 lg:w-36 dark:bg-white">
         
            <i className="text-2xl text-blue-500 md:text-4xl lg:text-6xl"> {icon1}</i>
          </div>
          <p className="text-[10px] font-bold text-[#000] md:text-sm lg:text-lg dark:text-white">
            {icon1Text}
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4">
          <div className="bg-white- flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 shadow-lg md:h-24 md:w-24 lg:h-36 lg:w-36 dark:bg-white">
            <i className="text-2xl text-blue-500 md:text-4xl lg:text-6xl" >{icon2}</i>
          </div>
          <p className="text-[10px] font-bold text-[#000] md:text-sm lg:text-lg dark:text-white">
            {icon2Text}
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4">
          <div className="bg-white- flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 shadow-lg md:h-24 md:w-24 lg:h-36 lg:w-36 dark:bg-white">
            <i className="text-2xl text-blue-500 md:text-4xl lg:text-6xl">{icon3}</i>
          </div>
          <p className="text-[10px] font-bold text-[#000] md:text-sm lg:text-lg dark:text-white">
            {icon3Text}
          </p>
        </div>
      </div>

      <div className="pt-20 text-[#000] md:text-lg dark:text-white">
        <ul style={{ listStyle: "disc" }}>
          {
            list?.map(item => (
              <li key={item}>{item}</li>
            ))
          }
        </ul>
      </div>

      <div className="flex flex-col items-start gap-10 pt-5  md:text-lg lg:flex-row lg:items-center lg:justify-between ">
        <p className="text-[#000] lg:w-1/2 dark:text-white">
          <span className="text-blue-500">
            {text1}{" "}
          </span>
          {text2}{" "}
          <span className="text-blue-500">{text3}</span>
         {text4}
        </p>
        <button className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho">
          Sign up for Dashboard
        </button>
      </div>
    </div>
  );
};

export default MidjourneyOption;
{
  /* <PiCardsDuotone />
<FaServer />
<BsCoin /> */
}
