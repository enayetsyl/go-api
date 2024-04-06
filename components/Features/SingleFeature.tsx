import React from "react";
import { Feature } from "@/types/feature";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description, prompt, response, placeholder } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white px-7.5 py-3 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark lg:p-5"
      >
        {/* <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
          <Image src={icon} width={36} height={36} alt="title" />
        </div> */}
        <h3 className="my-3 text-center text-xl font-semibold text-black dark:text-white xl:text-itemtitle md:mb-10">
          {title}
        </h3>
        <div className="bg-slate-500 px-5 py-3 rounded-lg text-sm">
        <p className="bg-zumthor px-4.5 py-1.5  dark:border-strokedark dark:bg-blacksection ml-32 md:ml-24 lg:ml-6 rounded-lg ">{prompt}</p>
        <p className="bg-white text-black mt-8 rounded-lg px-4.5 py-1.5 mr-44 md:mr-36 lg:mr-20
        ">{response}</p>
       
        <div className="bg-white py-1 px-3 rounded-2xl mt-14">
            {icon && 
            <Image
            src={icon}
            height={60}
            width={100}
            alt='image'
            />
            }
          <div className=" flex justify-between  items-center">
          <p className="text-black">{placeholder}</p> 
          <FaArrowUp className="bg-green-500 text-black rounded-md p-1"/>
          </div>
        </div>
        </div>
      </motion.div>
    </>
  );
};

export default SingleFeature;
