import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { IoPlayForwardOutline } from "react-icons/io5";
import { BsSkipForward } from "react-icons/bs";
import React from 'react'

type Props = {}

const MidjourneySupportedModes = (props: Props) => {
  return (
    <div>
       <h1 className="pb-20 pt-10 text-3xl text-[#000] dark:text-white md:text-5xl">
        Supported <span className="text-blue-500">Modes</span>
        </h1>
        {/* card Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* card */}
          {
            gridContent.map(item => (
              <div
        key={item.title}
              className="animate_top z-40 rounded-lg border border-white bg-white px-7.5 py-8 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark lg:p-5"
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-[4px] bg-primary ">
              <i className="text-2xl text-white">{item.icon}
                </i>
              
              </div>
              <h3 className="my-3  text-xl font-semibold text-black dark:text-white xl:text-itemtitle md:mb-10">
            {item.title}
              </h3>
              <p className='text-black dark:text-white'>
                {item.text}
              </p>
            </div>
            ))
          }
        </div>
    </div>
  )
}

export default MidjourneySupportedModes


const gridContent = [
  {
    icon: <RiCheckboxMultipleBlankLine/>,
    title: "Mixed Mode",
    text: "The mixed mode is a balance of processing time and cost, making it ideal for general use cases."
  },
  {
    icon: <IoPlayForwardOutline/>,
    title: "Fast Mode",
    text: "The fast mode delivers accelerated processing times, however with additional costs."
  },
  {
    icon: <BsSkipForward/>,
    title: "Turbo Mode",
    text: "he turbo mode is designed particularly for users requiring ultra-fast image generation."
  },
]

