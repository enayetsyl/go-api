import DashboardPageHeading from "@/components/DashboardPageHeading/DashboardPageHeading";
import React from "react";

type Props = {};

const AccountNotifications = (props: Props) => {
  return (
    <div className="mb-32">
      <DashboardPageHeading heading="Account Notifications" />

      {/* Notification list starts */}
      <div className="back-card mt-8">
        <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
          Account Notification List
        </h1>

        <p className="pt-5 text-sm text-white md:pr-10 lg:pr-40">
          Below is a list of account related notifications that you can see{" "}
          <span className="font-bold">if they do occur.</span>
        </p>

        {/* list starts */}
        <div className="py-5">
          <ul className="list-disc pl-8">
            <li>
              GoAPI General
              <ul className="list-inside pl-8">
                <li>Quota conversion failed</li>
              </ul>
            </li>
            <li>
              Midjourney BYOA
              <ul className="list-inside pl-8">
                <li>Midjourney account(s) is banned</li>
                <li>Midjourney subscription(s) has ended</li>
                <li>Midjourney account(s) ran out of fast hours</li>
              </ul>
            </li>
            <li>
              Midjourney PPU
              <ul className="list-inside pl-8">
                <li>
                  PPU usage triggered{" "}
                  <span className="text-blue-500 underline">penalties</span>
                </li>
              </ul>
            </li>
            <li>
              GPTs BYOA
              <ul className="list-inside pl-8">
                <li>ChatGPT Account cannot be used</li>
                <li>Limit of messages per OpenAI rule reached.</li>
              </ul>
            </li>
          </ul>
        </div>
        {/* list ends */}
      </div>
      {/* Notification list ends */}

      {/* Notification webhook starts */}

      <div className="back-card mt-8">
        <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
          Account Notification Webhook
        </h1>
        <p className="pb-8 pt-2 text-sm text-white">
          To receive webhook notification about account related notifications
          (see list above), please enter your webhook URL (to use this feature,
          users have to be on the developer's plan or above)
        </p>
      
            <div className="flex justify-center items-center gap-5">
              <input type="text" placeholder="Webhook Address" className="p-2 rounded-lg bg-white text-[#000] text-sm flex-grow focus:outline-none" />
              <button className="btn btn-c1 text-sm font-bold">Upgrade Subscription Plan</button>
            </div>
      </div>

      {/* Notification webhook ends */}
    </div>
  );
};

export default AccountNotifications;
