import DashboardPageHeading from "@/components/DashboardPageHeading/DashboardPageHeading";
import React from "react";
import { GiHobbitDwelling } from "react-icons/gi";
import { IoMdContacts } from "react-icons/io";
import { RiUserSettingsFill, RiUserStarFill } from "react-icons/ri";

type Props = {};

const Billing = (props: Props) => {
  return (
    <div className="pb-32">
      <DashboardPageHeading heading="API Billing" />

      {/* PPU Credit Balance */}
      <div className="back-card mt-8">
        <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
          PPU Credit Balance
        </h1>
        <p className="pt-5 text-sm text-white">Credit Remaining</p>
        <p className="text-sm text-white">
          <span className="text-4xl">$0.03</span> (20.00 credits)
        </p>

        {/* Auto recharge div start */}
        <div className="front-card my-3 rounded-lg border-2 border-blue-500">
          <p className="text-base font-bold text-white">auto-recharge is OFF</p>
          <p className=" py-1 text-sm text-white">
            when your credit balance falls to $0, your API requests will stop
            working until your next top-up. You can enable auto-recharge to
            automatically keep your credit balance topped up.
          </p>
          <p className="cursor-pointer text-base font-bold text-blue-500 hover:text-blue-700">
            Enable auto rechange
          </p>
        </div>
        {/* Auto recharge div ends */}
        {/* Button container starts */}
        <div className="flex items-center justify-start gap-5">
          <button className="btn btn-c1 text-sm">Manual payment</button>
          <button className="btn btn-c1 text-sm">Pay with crypto</button>
          <button className="btn btn-c1 text-sm">Top up history</button>
        </div>
        {/* Button container ends */}
      </div>
      {/* PPU Credit Balance end*/}

      {/* GoAPI Subscription Start */}

      <div className="back-card mt-8">
        {/* Main heading */}
        <div className="mb-10 flex items-center justify-between">
          <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
            GoAPI Subscriptions
          </h1>
          <button className="btn btn-c1 text-sm text-white">Invoices</button>
        </div>

        {/* GoAPI Membership */}
        <div className="rounded-lg  border-2 border-blue-500 p-5">
          <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
            GoAPI Membership
          </h1>
          {/* Card container */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Card one start */}
            <div className="front-card  relative mt-8 flex items-center justify-between">
              <div className="  text-8xl text-zinc-400">
                <GiHobbitDwelling />
              </div>
              <div className="">
                <h1 className="pb-2 pl-5  text-3xl font-bold text-white">
                  Hobbyist
                </h1>
                <h1 className=" text-end text-2xl font-semibold text-white">
                  Free
                </h1>
              </div>
            </div>

            {/* Card one ends */}
            {/* Card two start */}
            <div className="front-card  relative mt-8 flex items-center justify-between">
              <div className="  text-8xl text-zinc-400">
                <RiUserSettingsFill />
              </div>
              <div className="">
                <h1 className="pb-2 pl-5  text-3xl font-bold text-white">
                  Developer
                </h1>
                <h1 className=" text-end text-2xl font-semibold text-white">
                  $8/month
                </h1>
                <div className="mt-3 flex justify-end">
                  <button className="btn btn-c1 text-white">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>

            {/* Card two ends */}
            {/* Card three start */}
            <div className="front-card  relative mt-8 flex items-center justify-between">
              <div className="  text-8xl text-zinc-400">
                <RiUserStarFill />
              </div>
              <div className="">
                <h1 className="pb-2 pl-5  text-3xl font-bold text-white">
                  Premium
                </h1>
                <h1 className=" text-end text-2xl font-semibold text-white">
                  $50/month
                </h1>
                <div className="mt-3 flex justify-end">
                  <button className="btn btn-c1 text-white">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>

            {/* Card three ends */}
            {/* Card four start */}
            <div className="front-card  relative mt-8 flex items-center justify-between">
              <div className="  text-8xl text-zinc-400">
                <IoMdContacts />
              </div>
              <div className=" flex flex-col ">
                <h1 className="pb-2 pl-5  text-3xl font-bold text-white">
                  Enterprise
                </h1>
                <h1 className=" text-end text-2xl font-semibold text-frontCard ">
                  .
                </h1>
                <div className="mt-3 flex flex-grow justify-end">
                  <button className="btn btn-c1 text-white">Contact Us</button>
                </div>
              </div>
            </div>

            {/* Card four ends */}
          </div>
        </div>

        {/* Midjourney BYOA Seats start */}
        <div className="border-2 border-blue-500 rounded-lg mt-8 p-5">
        <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
            
<span className="text-blue-500">MidjourneyAPI</span> BYOA Seats
          </h1>
          <p className="text-white pt-8 text-sm">Note if you are only using our MidjourneyAPI BYOA service, then to get started you <span className="font-bold">do not</span> need to pay for the Developer or Premium Plan!</p>

          <div className="flex justify-end pt-15 pb-3">
          <button className="btn btn-c1 text-sm text-white">Change MidjourneyAPI BYOA seat subscription</button>
          </div>
        </div>
        {/* Midjourney BYOA Seats ends */}

        {/* GPTs BYOA Seats start */}
        <div className="border-2 border-blue-500 rounded-lg mt-8 p-5">
        <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
            
<span className="text-blue-500">GPTs </span>API BYOA Seats
          </h1>
          <p className="text-white pt-8 text-sm">Note if you are only using our GPTsAPI BYOA service, then to get started you <span className="font-bold">do not</span> need to pay for the Developer or Premium Plan!</p>

          <div className="flex justify-end pt-15 pb-3">
          <button className="btn btn-c1 text-sm text-white">Change GPTsAPI BYOA seat subscription</button>
          </div>
        </div>
        {/* GPTs BYOA Seats ends */}

      </div>

      {/* GoAPI Subscription Ends */}
    </div>
  );
};

export default Billing;
