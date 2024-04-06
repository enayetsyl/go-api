import React from "react";

type Props = {};

const SoraWaitlist = (props: Props) => {
  return (
    <div className="space-y-10 px-5 pt-20">
      <p className="text-xl text-[#000]">
        <span className="font-bold">Don't miss out</span>on the opportunity to
        supercharge your generative AI app with cutting-edge video creation
        features from <span className="text-blue-600">Sora API</span>! Join our
        wait list and get exclusive access to API that can transform your text
        into stunning videos. Enter your email address below to secure your
        spot!
      </p>
      <div className="flex flex-col items-start justify-start gap-5 md:flex-row ">
        <div>
          <input
            type="text"
            name=""
            id=""
            className="mb-1 w-full rounded-lg border-2 border-gray-400 p-1"
          />
          <p className="text-sm">Sign up for the Sora API waitlist!</p>
        </div>
        <button
          className={`flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho`}
        >
          Join the waitlist!
        </button>
      </div>
      <p className="text-xl text-[#000]">
        🎉654 innovative builders have already subscribed to our mailing list,
        staying updated with the latest developments on our upcoming API!
      </p>
      <div className="flex flex-col items-center justify-center gap-10 pt-10 lg:flex-row lg:justify-normal">
        <button
          className={`flex w-full justify-center rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho lg:w-auto`}
        >
          Check out our FAQ
        </button>
        <button
          className={`flex w-full justify-center rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho lg:w-auto`}
        >
          Check out other APIs
        </button>
        <button
          className={`flex w-full justify-center rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho lg:w-auto`}
        >
          Join our Discord
        </button>
      </div>
    </div>
  );
};

export default SoraWaitlist;
