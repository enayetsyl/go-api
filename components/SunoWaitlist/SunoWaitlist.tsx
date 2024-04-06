import React from "react";

type Props = {};

const SunoWaitlist = (props: Props) => {
  return (
    <div className="space-y-10 px-5 pt-20 border-waitlist pb-5 ">
      <p className="text-xl text-[#000]">
       Implement new and profound personalised music generation AI with <span className="text-blue-600">Suno  API</span>! Join our waitlist and receive exclusive access to the API, blending your application and music into something exhilarating!
      </p>
      <div className="flex flex-col items-start justify-center gap-5 md:flex-row ">
        <div>
          <input
            type="text"
            name=""
            id=""
            className="mb-1 w-full rounded-lg border-2 border-gray-400 p-1"
          />
          <p className="text-sm">Sign up for the Suno  API waitlist!</p>
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
      <div className="flex flex-col items-center justify-center gap-10 pt-10 lg:flex-row ">
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

export default SunoWaitlist;
