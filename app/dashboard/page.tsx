import DashboardPageHeading from "@/components/DashboardPageHeading/DashboardPageHeading";
import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { GiHobbitDwelling } from "react-icons/gi";
import { IoMdContacts } from "react-icons/io";
import { RiUserSettingsFill, RiUserStarFill } from "react-icons/ri";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="pb-32">
      <DashboardPageHeading heading='ComeAPI Dashboard'/>

      {/* Midjourney API Task Status start */}
      <div className="back-card">
        <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
          MidjourneyAPI Task Status
        </h1>

        <div className=" mt-5 flex w-full flex-col items-center justify-center gap-5">
          <div className="front-card flex w-full flex-col items-center justify-around gap-5 lg:flex-row">
            <div>
              <h1 className="mb-5 text-xl font-semibold">Processing</h1>
              <h1 className="text-center text-4xl font-semibold text-blue-500 underline">
                0
              </h1>
            </div>
            <div>
              <h1 className="mb-5 text-xl font-semibold">Pending</h1>
              <h1 className="text-center text-4xl font-semibold text-blue-500 underline">
                0
              </h1>
            </div>
          </div>
          <div className="front-card w-full">
            <h1 className="mb-5 text-center text-xl font-semibold">
              Queued in GoAPI
            </h1>
            <h1 className="text-center text-4xl font-semibold text-blue-500 underline">
              0
            </h1>
          </div>
        </div>
      </div>
      {/* Midjourney API Task Status end */}

      {/* Balances Start */}

      <div className="back-card mt-8">
        <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
          Balance
        </h1>
        {/* Top card */}
        <div className="front-card mt-5 flex flex-col items-center justify-center gap-5">
          <h1 className=" text-2xl font-bold">ComeAPI Credits</h1>
          <h1 className="text-center text-4xl font-semibold text-blue-500 ">
            $0.03 <span className="text-sm">(20.00 credits)</span>
          </h1>
          <div className="h-4 w-[80%] rounded-2xl bg-blue-500"></div>
          <p className="mt-5 text-lg font-semibold underline ">
            Auto Recharge is OFF
          </p>
          <button className="mb-5  text-lg font-bold btn btn-c1">
            Top up
          </button>
        </div>

        {/* Arrow button */}
        <div className=" my-3 flex items-center justify-center gap-2">
          <button className="rounded-sm bg-blue-500 p-1 text-white">
            <FaLongArrowAltDown />
          </button>
          <p className="text-sm text-white">auto-convert</p>
          <button className="rounded-sm bg-blue-500 p-1 text-white">
            <FaLongArrowAltDown />
          </button>
        </div>

        {/* container div */}
        <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
          {/* card one div */}
          <div className="front-card flex w-full flex-col items-center justify-center hover:border-2 hover:border-blue-500">
            <h1 className=" my-5 text-2xl font-bold">MidjourneyAPI</h1>
            <h1 className="text-center text-4xl font-semibold text-blue-500 ">
              $0.10
            </h1>
            <span className=" text-sm font-semibold text-blue-500 ">
              (20.00 quotas)
            </span>
            <p className="py-10 text-center text-base text-white">
              2100 (or 700) credits will auto-convert into quotas upon usage;
              Click here to convert smaller credit amounts.
            </p>
          </div>
          {/* card two div */}
          <div className="front-card flex w-full flex-col items-center justify-center hover:border-2 hover:border-blue-500">
            <h1 className=" my-5 text-2xl font-bold">GPTs</h1>
            <h1 className="text-center text-4xl font-semibold text-blue-500 ">
              $0.00
            </h1>
            <span className=" text-sm font-semibold text-blue-500 ">
              (0.00 quotas)
            </span>
            <p className="py-10 text-center text-base text-white">
              100 credits will be auto-converted into quotas upon first usage or
              if quota falls below 50; Click here to covert smaller credit
              amounts..
            </p>
          </div>
          {/* card three div */}
          <div className="front-card flex w-full flex-col items-center justify-center hover:border-2 hover:border-blue-500">
            <h1 className=" my-5 text-2xl font-bold">LLM</h1>
            <h1 className="text-center text-4xl font-semibold text-blue-500 ">
              $0.05
            </h1>
            <span className=" text-sm font-semibold text-blue-500 ">
              (500,000.00 quotas)
            </span>
            <p className="py-10 text-center text-base text-white">
              70 credits will be auto-converted into quotas upon usage; Click
              here to covert smaller credit amounts.
            </p>
          </div>
        </div>
      </div>
      {/* Balances End */}

      {/* current plan start */}
      <div className="back-card relative mt-8">
        <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
          Current Plan
        </h1>

        <h1 className="pb-5 pl-5 pt-15 text-5xl font-bold text-white">
          Hobbyist
        </h1>
        <div className="absolute bottom-0 right-0 text-9xl text-zinc-400">
          <GiHobbitDwelling />
        </div>
      </div>
      {/* current plan end */}

      {/* tools  start*/}
      <div className="back-card mt-8">
        <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
          Tools
        </h1>
        <div className="mt-10 flex items-center justify-center gap-5">
          <div className="front-card flex h-28 items-center justify-center p-5">
            <h1 className="text-center font-bold text-white">Redeem</h1>
          </div>
          <div className="front-card flex h-28 items-center justify-center p-5">
            <h1 className=" text-center font-bold text-white ">
              Midjourney BYOA
            </h1>
          </div>
          <div className="front-card flex h-28 items-center justify-center p-5">
            <h1 className="text-center font-bold text-white ">Contact Us</h1>
          </div>
        </div>
      </div>

      {/* tools end */}
      {/* Subscription plan  start*/}

      <div className="back-card mt-8">
        <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
        Upgrade Subscription Plan
        </h1>

        <div className="mt-5 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="front-card relative flex flex-col items-center justify-center  gap-5">
            <h1 className=" pt-5 text-2xl font-semibold">Developer</h1>
            <h1 className=" pb-5 text-3xl font-semibold">$8/month</h1>
            <div className="absolute bottom-0 right-0 text-8xl text-zinc-400">
              <RiUserSettingsFill />
            </div>
          </div>

          <div className="front-card relative flex flex-col items-center justify-center  gap-5">
            <h1 className=" pt-5 text-2xl font-semibold">Premium</h1>
            <h1 className=" pb-5 text-3xl font-semibold">$50/month</h1>
            <div className="absolute bottom-0 right-0 text-8xl text-zinc-400">
              <RiUserStarFill />
            </div>
          </div>

          <div className="front-card relative flex flex-col items-center justify-center  gap-5">
            <h1 className=" pt-5 text-2xl font-semibold">Enterprise</h1>
            <h1 className=" pb-5 text-3xl font-semibold">Contact Us</h1>
            <div className="absolute bottom-0 right-0 text-8xl text-zinc-400">
              <IoMdContacts />
            </div>
          </div>
        </div>
      </div>
      {/* Subscription plan end */}
    </div>
  );
};

export default Dashboard;
