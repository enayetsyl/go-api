import Image from "next/image";
import { IoIosInfinite } from "react-icons/io";

type Props = {};

const MidjourneyPrice = (props: Props) => {
  return (
    <div className="bg-[#000]">
      <div className="mx-auto max-w-5xl px-5">
        <h1 className="pb-20 pt-10 text-3xl text-white md:text-5xl">
          Our <span className="text-blue-500">Pricing Plans</span>
        </h1>
        <h1 className="pb-10 text-2xl text-blue-500">
          BYOA <span className="text-white">(Bring-Your-Own-Account)</span>
        </h1>

        <div className="flex flex-col items-center justify-center gap-20 md:flex-row">
          {/* card div */}
          <div>
            <div
              className="animate_top z-40 rounded-2xl  bg-black px-7.5 py-3 text-white shadow-2xl transition-all hover:shadow-solid-4 lg:p-5"
              style={{ boxShadow: "2px 2px 1px 1px rgba(255, 255, 255, 0.35)" }}
            >
              <h1 className="py-3 text-center text-3xl text-white">
                $10/month
              </h1>
              <ul style={{ listStyle: "disc" }} className="px-5 text-xl">
                <li>
                  2nd seat is <span className="text-blue-500">$6/month</span>
                </li>
                <li>Bring your own Midjourney Account</li>
                <li>Full access to GoAPI's endpoints</li>
                <li>Full access to GoAPI's functions</li>
              </ul>
              <button className="my-5 flex rounded-full bg-blue-500 px-7.5 py-1.5 text-white duration-300 ease-in-out hover:bg-blackho">
                Try Our Api Now!
              </button>
            </div>
            <p className="text-center text-xl font-bold text-blue-500">
              GoAPI.ai
            </p>
          </div>
          {/* image div */}
          <div>
            <Image
              src={"/images/midjourney/price.webp"}
              height={200}
              width={300}
              alt="price"
            />
            <h1 className="my-2 text-center text-white">imagineapi.dev</h1>
            <Image
              src={"/images/midjourney/price2.webp"}
              height={300}
              width={300}
              alt="price"
            />
            <h1 className="my-2 text-center text-white">mymidjourney.ai</h1>
          </div>
        </div>
        {/* Grid div */}
        <div className="grid grid-cols-1 gap-5 py-20 md:grid-cols-3">
          {iconAndText.map((item) => (
            <div
              key={item.text}
              className="flex items-center justify-start gap-5 "
            >
              <i className="rounded-md bg-blue-500 p-1 text-white">
                {item.icon}
              </i>
              <p className="text-white">{item.text}</p>
            </div>
          ))}
        </div>

        {/* PPU DIV */}
        <div>
          <h1 className="pb-10 text-2xl text-blue-500">
            BYOA <span className="text-white">(Bring-Your-Own-Account)</span>
          </h1>
          <p className="pb-10 text-xl text-white">
            Sign up for our <span className="text-blue-500">Dashboard</span> to
            get <span className="text-blue-500">free</span> Quotas to generate
            up to 22 images to try our API!
          </p>
          {/* Card container */}
          <div className="flex flex-col items-center justify-center gap-15 pb-20 md:flex-row">
            {/* card  */}
            <div
              className="animate_top z-40 flex  w-full flex-col items-center justify-center space-y-1 rounded-2xl bg-black px-7.5 py-5 text-white shadow-2xl transition-all hover:shadow-solid-4 lg:p-5"
              style={{ boxShadow: "2px 2px 1px 1px rgba(255, 255, 255, 0.35)" }}
            >
              <p>Mixed Mode</p>
              <h1 className="text-3xl font-bold text-blue-500">$0.015</h1>
              <p>per imagine task</p>
            </div>
            <div
              className="animate_top z-40 flex  w-full flex-col items-center justify-center space-y-1 rounded-2xl bg-black px-7.5 py-5 text-white shadow-2xl transition-all hover:shadow-solid-4 lg:p-5"
              style={{ boxShadow: "2px 2px 1px 1px rgba(255, 255, 255, 0.35)" }}
            >
              <p>Fast Mode</p>
              <h1 className="text-3xl font-bold text-blue-500">$0.045</h1>
              <p>per imagine task</p>
            </div>
            <div
              className="animate_top z-40 flex  w-full flex-col items-center justify-center space-y-1 rounded-2xl bg-black px-7.5 py-5 text-white shadow-2xl transition-all hover:shadow-solid-4 lg:p-5"
              style={{ boxShadow: "2px 2px 1px 1px rgba(255, 255, 255, 0.35)" }}
            >
              <p>Turbo Mode</p>
              <h1 className="text-3xl font-bold text-blue-500">$0.1</h1>
              <p>per imagine task</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidjourneyPrice;

const iconAndText = [
  {
    icon: <IoIosInfinite />,
    text: "Best ban prevention features",
  },
  {
    icon: <IoIosInfinite />,
    text: "Unlimited image generation",
  },
  {
    icon: <IoIosInfinite />,
    text: "Active/inactive period control",
  },
  {
    icon: <IoIosInfinite />,
    text: "Built-in load balancer",
  },
  {
    icon: <IoIosInfinite />,
    text: "Bind multiple accounts",
  },
  {
    icon: <IoIosInfinite />,
    text: "Full access to API features",
  },
  {
    icon: <IoIosInfinite />,
    text: "Dashboard + Webhook",
  },
  {
    icon: <IoIosInfinite />,
    text: "Switch IP and dedicated IP",
  },
  {
    icon: <IoIosInfinite />,
    text: "Backup plans available",
  },
  {
    icon: <IoIosInfinite />,
    text: "Supports V6",
  },
  {
    icon: <IoIosInfinite />,
    text: "Easy set up",
  },
  {
    icon: <IoIosInfinite />,
    text: "Midjourney subscription not included",
  },
];
