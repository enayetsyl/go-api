import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ImageFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description, buttonText } = feature;

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
       
        <h3 className="my-3 text-center text-xl font-semibold text-black dark:text-white xl:text-itemtitle md:mb-10">
          {title}
        </h3>
        <div className="flex items-center justify-center gap-5  h-28">
          <div className="h-16 rounded-lg bg-zinc-500">
            <p className="p-2 text-sm text-white">{description}</p>
          </div>
          <FaArrowRight />
          <div>
            <Image
              src={icon}
              width={100}
              height={100}
              alt="cat"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-center pt-5 md:mt-10">
          <a
            href="signup.html"
            className=" rounded-2xl bg-black px-16 py-1.5 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black text-sm"
          >
            {buttonText}
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default ImageFeature;
