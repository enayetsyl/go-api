'use client'
import DashboardPageHeading from "@/components/DashboardPageHeading/DashboardPageHeading";
import React, { useState } from "react";

type Props = {};

const Referral = (props: Props) => {
  const [selectedLogOption, setSelectedLogOption] = useState('10')

  const handleSelectLogChange = (event) => {
    setSelectedLogOption(event.target.value);
  }

  return (
    <div className="pb-32">
      <DashboardPageHeading heading="API Referral" />

      <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
        {/* Your Earning */}
        <div className="back-card w-full">
          <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
            Your Earnings
          </h1>
          <p className="my-5 text-center text-4xl font-bold text-white">
            {" "}
            <span className="text-blue-500">0</span>{" "}
            <span className="text-white">credits</span>
          </p>
        </div>
        <div className="back-card w-full">
          <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
            Total Referrals
          </h1>
          <p className="my-5 text-center text-4xl font-bold text-white">
            {" "}
            <span className="text-blue-500">0</span>{" "}
          </p>
        </div>
      </div>

      {/* Refer Friends start */}
      <div className="back-card mt-10 w-full">
        <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
          Refer Friends
        </h1>
        <div className="mt-8 flex items-center justify-center gap-5">
          <input
            type="text"
            value={
              "https://dashboard.goapi.ai/payment/success?referrerId=46856f6f-1e7e-4bd3-85c8-6b90a1f15ed3"
            }
            className="flex-grow overflow-hidden rounded-lg bg-white px-2 py-2 text-black"
          />
          <button className="btn btn-c1 text-sm text-white">Copy text</button>
        </div>
      </div>
      {/* Refer Friends ends */}

      {/* Referral History Starts */}
      <div className="back-card mt-10 ">
        <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
          Referral History
        </h1>
        <div className="front-card mt-5">
          <div className="flex items-center gap-20 overflow-x-auto px-10 pb-2 font-bold">
            <p>Invitee</p>
            <p className="whitespace-nowrap">
              Sign-up <br /> time (UTC)
            </p>
            <p>Sign-up</p>
            <p className="whitespace-nowrap ">
              First Credit <br /> Top-up
            </p>
            <p>First Subscription</p>
            <p></p>
          </div>
          <p className="pb-5 pt-8 text-center text-sm text-white">
            There's no more data available.
          </p>
        </div>
       {/* logs per page starts */}
       <div className='flex flex-col sm:flex-row justify-between items-center gap-5 text-white text-sm pt-5'>
        <div className='flex justify-start gap-2 items-center'>
          <p>Logs per page</p>
          <div>
          <div className="relative">
        <select
          name="log"
          value={selectedLogOption}
          onChange={handleSelectLogChange}
          className="bg-white text-[#000] p-2 pr-8 rounded-lg appearance-none focus:outline-none"
        >
          <option value="10" >10</option>
          <option value="20" >20</option>
          <option value="30" >30</option>
          <option value="40" >40</option>
          <option value="50" >50</option>
          <option value="60" >60</option>
          
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="h-4 w-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
            />
          </svg>
        </div>
      </div>
          </div>
        </div>

      {/* total tasks start */}
      <div className='text-white text-sm flex justify-center items-center gap-3'>
        <p>Total tasks: <span>0</span></p>
        <div className='flex items-center justify-center'>
          <span className='pr-3 text-white/70'>&lt;</span>
          <div className='bg-white text-[#000] py-1 px-2 rounded-lg'>1</div>
          <p className='text-white pl-1'> {" "}/1</p>
          <span className='pl-3 text-white/70'>&gt;</span>
        </div>
      </div>
      {/* total tasks ends */}
      </div>
      {/* logs per page ends */}
      </div>
      {/* Referral History ends */}

    </div>
  );
};

export default Referral;
