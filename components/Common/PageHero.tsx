import { PageHeroType } from "@/types/pageHero";
import Image from "next/image";
import Link from "next/link";

type Props = {};


const PageHero = ({data}: {data: PageHeroType}) => {
  const { heading1, heading2, heading3, paragraph1, paragraph2, buttons, image} = data


  // const buttonRoutes = [
  //   {
  //     title: "Try API for free!",
  //     route: "/midjourney-api",
  //     newTab: true,
  //   },
  //   {
  //     title: "Documentation",
  //     route: "/gpt-api",
  //     newTab: true,
  //   },
  //   {
  //     title: "Join Discord",
  //     route: "/#",
  //     newTab: true,
  //   },
  // ];
  return (
    <div className="pt-20">
      {/* Heading */}
      <div className="px-5">
        <h1 className="text-2xl font-semibold leading-[4rem] text-[#000000] dark:text-white sm:text-6xl">
          {heading1}
        </h1>
      </div>
      <div className="flex flex-col items-start justify-center gap-10 px-5 lg:flex-row">
        <div className="w-full lg:w-2/3">
          <h1 className="inline-block bg-gradient-to-r  from-blue-600 via-green-500 to-indigo-400 bg-clip-text py-10 text-6xl font-bold text-transparent">
            {heading2}
          </h1>
          <h1 className="text-2xl font-semibold text-[#000000] dark:text-white sm:text-6xl">
            {heading3}
          </h1>

          <p className="pt-10 text-lg text-[rgb(0,0,0)] dark:text-white">
           {paragraph1}
          </p>

          <p className="pt-3 text-sm text-[#000] dark:text-white">
            {paragraph2}
          </p>

          {/* buttons */}
          <div className="mt-10">
            <div className="flex flex-wrap gap-8 md:gap-16">
              <div className="flex flex-col justify-center items-start gap-5 lg:flex-row">
                {buttons?.map((button) => (
                <button
                  key={button.route}
                  aria-label="get started button"
                  className={`rounded-full bg-black w-48 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho 
                        `}
                >
                  {
                    <a
                      href={button.route}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {button.title}
                    </a>
                  }
                </button>
              ))}</div>
              <Image
            src={image}
            height={400}
            width={200}
            alt="Hero Image"
            className="block lg:hidden rounded-lg"
          />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 pt-20">
          <Image
            src={image}
            height={200}
            width={200}
            alt="Hero Image"
            className="hidden lg:block w-60 h-60 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PageHero;
