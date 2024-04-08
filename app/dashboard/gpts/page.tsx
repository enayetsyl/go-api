"use client";
import DashboardPPU from "@/components/DashboardPPU/DashboardPPU";
import DashboardPageHeading from "@/components/DashboardPageHeading/DashboardPageHeading";
import Link from "next/link";
import React, { useState } from "react";
import { GiHobbitDwelling } from "react-icons/gi";
import { PiUploadThin } from "react-icons/pi";

type Props = {};

const GPTs = (props: Props) => {
  const [isPPU, setIsPPU] = useState(false);
  return (
    <div className="px-10">
      <DashboardPageHeading heading="ComeAPI GPTs API" />

      <div className={`${isPPU ? "block" : "hidden"}`}>
        <DashboardPPU
          title="PPU (Pay-Per-Use)"
          text="Under PPU mode, you will using our ChatGPT Accounts Pool to process GPTs task, and you will be consuming GPTs Quotas (converted from GoAPI Credits)."
        />
      </div>
      <div className={`${isPPU ? "hidden" : "block"}`}>
        <DashboardPPU
          title="BYOA (Bring-Your-Own-Account)"
          text="We host your own ChatGPT Accounts (Plus, Team or above) for $6/month/seat."
        />
      </div>

      {/* Toggle button start */}
      <div className="flex items-center justify-start gap-3 py-10">
        <h1 className="text-xl font-bold text-white">BYOA</h1>
        <div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              id="switch"
              type="checkbox"
              className="peer sr-only"
              checked={isPPU}
              onChange={() => setIsPPU(!isPPU)}
            />
            <label htmlFor="switch" className="hidden"></label>
            <div className="peer h-6 w-11 rounded-full border bg-gray-500 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-700 after:bg-[#000] after:transition-all after:content-[''] peer-checked:bg-white peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
          </label>
        </div>
        <h1 className="text-xl font-bold text-white"> PPU</h1>
      </div>
      {/* Toggle button ends */}

      {/* PPU START */}
      <div className={`${isPPU ? "block" : "hidden"}`}>
        {/* Plan Start */}
        <div className="back-card">
          <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
            Plan
          </h1>
          <div className="front-card  relative mt-8 flex items-start justify-between">
            <div className="  text-[220px] text-zinc-400">
              <GiHobbitDwelling />
            </div>
            <div className="lg:pr-4">
              <h1 className="pb-2 pl-5  text-4xl font-bold text-white">
                hobbyist
              </h1>
              <h1 className=" text-end text-2xl font-semibold text-white">
                Free
              </h1>

              <div className="absolute bottom-0 right-0 hidden h-full w-4 rounded-b-lg rounded-t-lg bg-gray-500 lg:block"></div>
            </div>
          </div>
        </div>
        {/* Plan end */}

        {/* PPU Balance Start */}
        <div className="back-card mt-8">
          <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
            PPU Balance
          </h1>
          {/* ComeAPI Credits card */}
          <div className="front-card mt-5 flex flex-col items-center justify-center gap-5">
            <h1 className=" text-2xl font-bold ">ComeAPI Credits</h1>
            <h1 className="text-center text-4xl font-semibold text-blue-500 ">
              $0.03 <span className="text-sm">(20.00 credits)</span>
            </h1>
            <div className="h-4 w-[80%] rounded-2xl bg-blue-500"></div>

            <button className="btn btn-c1 my-5 text-lg font-bold">
              Top up
            </button>
          </div>
          {/* GPTs Quotas card */}
          <div className="front-card mt-5 flex flex-col items-center justify-center gap-5">
            <h1 className=" text-2xl font-bold ">GPTs Quotas</h1>
            <h1 className="text-center text-4xl font-semibold text-blue-500 ">
              $0.00 <span className="text-sm">(0 quotas)</span>
            </h1>
            <div className="h-4 w-[80%] rounded-2xl bg-blue-500"></div>

            <button className="btn btn-c1 my-5 text-lg font-bold">
              Convert
            </button>
          </div>
        </div>
        {/* PPU Balance End */}

        {/* PPU settings starts */}

        <div className="back-card mt-8">
          <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
            PPU settings
          </h1>
          {/* card container */}
          <div className="flex w-full flex-col items-center justify-center gap-10 pb-15 pt-5 md:flex-row">
            <div className="front-card  flex w-full flex-col items-center  justify-center gap-2">
              <h1 className=" pt-5 text-2xl font-semibold">
                Available Active Conversation
              </h1>
              <h1 className=" pb-5 text-3xl font-semibold text-blue-500 underline">
                0
              </h1>
            </div>
          </div>

          <p className="mb-5 text-center text-base text-white">
            Need more active conversations?
          </p>

          <button className="btn mt-5 w-full  bg-[#505050] py-2 text-base font-bold hover:bg-gray-700">
            Upgrade Subscription Plan
          </button>
        </div>
        {/* PPU setting ends */}
      </div>
      {/* PPU ends */}

      {/* BYOA START */}
      <div className={`${isPPU ? "hidden" : "block"}`}>
        {/* Button container */}
        <div className=" flex items-center justify-center gap-5 md:justify-end ">
          
          <button className="rounded-lg bg-baseCard px-4 py-2 text-center text-sm text-white hover:bg-frontCard">
            Bind ChatGPT account to seat
          </button>

          <button className="rounded-lg bg-baseCard px-4 py-2 text-center text-sm text-white hover:bg-frontCard">
            <Link href={"/dashboard/billing"}>Add seats</Link>
          </button>
        </div>

        {/* My bound ChatGPT Accounts start */}
        <div className="back-card mt-8">
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center justify-start gap-3">
              <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
                My bound ChatGPT Accounts
              </h1>
              <PiUploadThin className="text-2xl font-bold text-white" />
            </div>
            <p className="text-base font-bold text-white">0/0</p>
          </div>

          <p className="pt-5 text-white">No records</p>
        </div>

        {/* My bound Midjourney Accounts ends */}
      </div>
      {/* BYOA ends */}
    </div>
  );
};

export default GPTs;
