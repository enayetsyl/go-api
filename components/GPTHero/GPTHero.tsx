import Image from "next/image";
import React from "react";

type Props = {};

const GPTHero = (props: Props) => {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-40">
      <h1 className="text-xl text-[#000] dark:text-white md:text-6xl">
        All new{" "}
        <span className="inline-block bg-gradient-to-r  from-blue-600 via-green-500 to-indigo-400 bg-clip-text py-10 text-4xl font-bold text-transparent md:text-6xl">
          GPTs API
        </span>
      </h1>
      <p className="text-base text-[#000] dark:text-white md:text-xl lg:pr-80">
        GoAPI provides GPT API for your development needs, you can now add GPTs,
        along with all its capabilities and features, into your own app,
        projects, or websites. Sign up now and happy integrating!
      </p>
      <div className="items-Start flex flex-col justify-start gap-8 py-10 lg:flex-row lg:pr-80">
        <button className="w-48 rounded-full bg-black py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho ">
          Try Now!
        </button>
        <button className="w-48 rounded-full bg-black py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho ">
          Documentation
        </button>
        <button className="w-48 rounded-full bg-black py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho ">
          Join Discord
        </button>
      </div>
      <Image
      src={'/images/gtp/gpts.webp'}
      height={400}
      width={600}
      alt="gtp"
      className="w-full h-full object-cover pt-10"
      
      />
    </div>
  );
};

export default GPTHero;
