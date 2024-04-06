import Image from "next/image";
import React from "react";
import { FaChartLine, FaMessage } from "react-icons/fa6";
import { PiBracketsAngleBold, PiSlidersHorizontalBold } from "react-icons/pi";

type Props = {};

const developerData = [
  {
    icon: <FaMessage />,
    message:
      "Leverage GPT-3.5 to develop chatbots and virtual assistants that excel at engaging in authentic and immersive conversations.",
  },
  {
    icon: <PiBracketsAngleBold />,
    message:
      "Utilize GPT-3, to generate embeddings to facilitate tasks like text classification, search, and clustering.",
  },
  {
    icon: <FaChartLine />,
    message:
      "Tap into the potential of GPT-3 to effectively summarize, synthesize, and address questions related to vast amounts of text-based information.",
  },
  {
    icon: <PiSlidersHorizontalBold />,
    message:
      "Fine-tune GPT-3 using custom datasets to augment its performance in a targeted task or domain, providing enhanced output quality.",
  },
];

const LLMDeveloper = (props: Props) => {
  return (
    <div className="px-5">
      <h1 className="text-4xl md:text-6xl pb-15">
        Made for{" "}
        <span className="inline-block bg-gradient-to-r  from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent">
          Developers
        </span>
      </h1>
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="w-full lg:w-2/3 space-y-8">
          {developerData.map((data) => (
            <div className=" flex justify-start items-center gap-5" key={data.message}>
              <i className="text-3xl text-blue-500">{data.icon}</i>
              <p className="text-black dark:text-white">{data.message}</p>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <Image
          src={'/images/blog/blog-04.png'}
          alt="laptop"
          height={500}
          width={500}
          className="w-full object-cover"
          />

        </div>
      </div>
    </div>
  );
};

export default LLMDeveloper;
