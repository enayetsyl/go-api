import { IoIosInfinite } from "react-icons/io";

type Props = {};

const GPTPrice = (props: Props) => {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20">
      <h1 className="pb-20 pt-10 text-3xl text-[#000]  dark:text-white md:text-5xl">
        Our <span className="text-blue-500">Pricing Plans</span>
      </h1>

      <h1 className="pb-10 text-2xl text-blue-500">
        BYOA{" "}
        <span className="text-[#000] dark:text-white">
          (Bring-Your-Own-Account)
        </span>
      </h1>

      <p className="pr-20 text-[#000] dark:text-white md:pr-60 lg:pr-80 lg:text-xl">
        If you have your own ChatGPT Plus account, subscribe to our BYOA seat to
        host your own account for{" "}
        <span className="font-semibold text-blue-500">$5/month/seat !</span>
      </p>
      {/* grid div */}
      <div className="grid grid-cols-1 gap-5 py-20 md:grid-cols-3">
        {iconAndText.map((item) => (
          <div
            key={item.text}
            className="flex items-center justify-start gap-5 "
          >
            <i className="rounded-md bg-blue-500 p-1 text-white">{item.icon}</i>
            <p className="text-[#000] dark:text-white">{item.text}</p>
          </div>
        ))}
      </div>

      <h1 className="pb-10 text-2xl text-blue-500">
        PPU<span className="text-[#000] dark:text-white">(Pay-Per-Use)</span>
      </h1>
      <p className="mb-10 pr-20 text-[#000] dark:text-white md:pr-60 lg:pr-80 lg:text-xl">
        Get started with GPTs without your own ChatGPT Plus account!
      </p>

      {/* ppu grin */}

      {ppuData.map((item) => (
        <div
          className="grid  grid-cols-1 flex-nowrap gap-1 pr-40 text-lg text-[#000] dark:text-white md:grid-cols-2 md:gap-10"
          key={item.left}
        >
          <p>{item.left}</p>
          <p className="text-left">
            {item.right}{" "}
            <span className="font-semibold text-blue-500">
              {item.rightColor}
            </span>{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GPTPrice;

const ppuData = [
  {
    left: "Subscribe to GoAPI’s paid plans",
    right: "From",
    rightColor: "$8/month",
  },
  {
    left: "Create new multimodal conversation",
    right: "",
    rightColor: "$0.03/each conversation",
  },
  {
    left: "One round of conversation*",
    right: "",
    rightColor: "$0.01/round",
  },
  {
    left: "Upload or download files",
    right: "",
    rightColor: "$0.001/file",
  },
  {
    left: "Create your own GPT",
    right: "",
    rightColor: "$0.1/GPT",
  },
  {
    left: "Re-configure a GPT",
    right: "",
    rightColor: "$0.01/time",
  },
];

const iconAndText = [
  {
    icon: <IoIosInfinite />,
    text: "Easy set up",
  },
  {
    icon: <IoIosInfinite />,
    text: "Bind multiple accounts",
  },
  {
    icon: <IoIosInfinite />,
    text: "Create and use your own GPTs",
  },
  {
    icon: <IoIosInfinite />,
    text: "Access to GPT-4",
  },
  {
    icon: <IoIosInfinite />,
    text: "Plus Account limit applies",
  },
  {
    icon: <IoIosInfinite />,
    text: "ChatGPT Plus account not included",
  },
];
