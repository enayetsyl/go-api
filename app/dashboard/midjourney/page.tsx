'use client'
import DashboardPPU from '@/components/DashboardPPU/DashboardPPU'
import DashboardPageHeading from '@/components/DashboardPageHeading/DashboardPageHeading'
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHobbitDwelling } from 'react-icons/gi'
import { PiUploadThin } from 'react-icons/pi'

type Props = {}

const MidjourneyAPI = (props: Props) => {
  const [isPPU, setIsPPU] = useState(false)
  console.log(isPPU)
  return (
    <div className='px-10 pb-32'>
       <DashboardPageHeading heading='API Midjourney API'/>

       <div className={`${isPPU ? "block" : 'hidden'}`}>
       <DashboardPPU
       title='PPU (Pay-Per-Use)'
       text="Under PPU mode you will be using GoAPI's Midjourney Accounts Pool to process Midjourney tasks and will be consuming your GoAPI Credits."
       />
       </div>
       <div className={`${isPPU ? "hidden" : 'block'}`}>
       <DashboardPPU
       title='BYOA (Bring-Your-Own-Account)'
       text="We host your own Midjourney account for $10/month (additional accounts will cost $6/month/account)"
       /></div>

       {/* Toggle button start */}
<div className='flex justify-start items-center gap-3 py-10'>
  <h1 className='text-white font-bold text-xl'>BYOA</h1>
  <div>
<label className="relative inline-flex cursor-pointer items-center">
    <input id="switch" type="checkbox" className="peer sr-only" 
    checked={isPPU}
    onChange={() => setIsPPU(!isPPU)}
    />
    <label htmlFor="switch" className="hidden"></label>
    <div className="peer h-6 w-11 rounded-full border bg-gray-500 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-700 after:bg-[#000] after:transition-all after:content-[''] peer-checked:bg-white peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
  </label>
</div>
  <h1 className='text-white font-bold text-xl'> PPU</h1>
</div>
         {/* Toggle button ends */}

    {/* PPU START */}
    <div className={`${isPPU ? 'block' : 'hidden'}`}>
      {/* Plan Start */}
      <div className='back-card'>
      <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
          Plan
        </h1>
      <div className="front-card  mt-8 flex justify-between items-start relative">
        <div className="  text-[220px] text-zinc-400">
          <GiHobbitDwelling />
        </div>
        <div className='lg:pr-4'>
        <h1 className="pb-2 pl-5  text-4xl font-bold text-white">
          hobbyist
        </h1>
        <h1 className=" text-2xl font-semibold text-white text-end">
          Free
        </h1>

        <div className='h-full w-4 bg-gray-500 absolute bottom-0 right-0 hidden lg:block rounded-t-lg rounded-b-lg'></div>

        </div>
      </div>
      </div>
      {/* Plan end */}

      {/* PPU Balance Start */}
      <div className="back-card mt-8">
        <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
          Balance
        </h1>
        {/* ComeAPI Credits card */}
        <div className="front-card mt-5 flex flex-col items-center justify-center gap-5">
          <h1 className=" text-2xl font-bold ">ComeAPI Credits</h1>
          <h1 className="text-center text-4xl font-semibold text-blue-500 ">
            $0.03 <span className="text-sm">(20.00 credits)</span>
          </h1>
          <div className="h-4 w-[80%] rounded-2xl bg-blue-500"></div>
          
          <button className="my-5 text-lg font-bold btn btn-c1">
            Top up
          </button>
        </div>
        {/* Midjourney API Quotas card */}
        <div className="front-card mt-5 flex flex-col items-center justify-center gap-5">
          <h1 className=" text-2xl font-bold ">Midjourney API Quotas</h1>
          <h1 className="text-center text-4xl font-semibold text-blue-500 ">
            $0.10 <span className="text-sm">(20 quotas)</span>
          </h1>
          <div className="h-4 w-[80%] rounded-2xl bg-blue-500"></div>
          
          <button className="my-5 text-lg font-bold btn btn-c1">
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
        <div className='flex flex-col justify-center items-center gap-10 md:flex-row w-full pt-5 pb-15'>
        <div className="front-card  flex flex-col items-center justify-center  gap-2 w-full">
            <h1 className=" pt-5 text-2xl font-semibold">Concurrent Jobs</h1>
            <h1 className=" pb-5 text-3xl font-semibold underline text-blue-500">3</h1>
           
          </div>
        <div className="front-card  flex flex-col items-center justify-center  gap-2 w-full">
            <h1 className=" pt-5 text-2xl font-semibold">Daily Credit Usage</h1>
            <h1 className=" pb-5 text-3xl font-semibold underline text-blue-500">2000</h1>
           
          </div>


        </div>

        <p className='text-center text-white text-base mb-5'>Need more concurrent jobs and usage limit?</p>

        <button className="mt-5 btn bg-[#505050]  py-2 text-base font-bold hover:bg-gray-700 w-full">
            Upgrade Subscription Plan
          </button>
        </div>
    {/* PPU setting ends */}

    </div>
{/* PPU ends */}

    {/* BYOA START */}
    <div className={`${isPPU ? 'hidden' : 'block'}`}>

    {/* Button container */}
    <div className=' flex justify-center items-center md:justify-end gap-5 '>
        <button className='py-2 px-4 text-center text-white text-sm bg-baseCard hover:bg-frontCard rounded-lg'>Data report</button>
        <button className='py-2 px-4 text-center text-white text-sm bg-baseCard hover:bg-frontCard rounded-lg'>Bind Midjourney account to seat</button>

        <button className='py-2 px-4 text-center text-white text-sm bg-baseCard hover:bg-frontCard rounded-lg'>
          <Link href={'/dashboard/billing'}>Add seats</Link>
        </button>
    </div>

{/* My bound Midjourney Accounts start */}
<div className='back-card mt-8'>
      <div className='flex justify-between items-center gap-5'>
     <div className='flex justify-start items-center gap-3'>
     <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
      My bound Midjourney Accounts
        </h1>
        <PiUploadThin className='text-white text-2xl font-bold' />
     </div>
        <p className='text-white text-base font-bold'>0/0</p>
      </div>

      <p className='text-white pt-5'>No records</p>
        </div>

{/* My bound Midjourney Accounts ends */}
    </div>
{/* BYOA ends */}

    </div>
  )
}

export default MidjourneyAPI