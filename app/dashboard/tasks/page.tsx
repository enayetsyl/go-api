'use client'
import DashboardPageHeading from '@/components/DashboardPageHeading/DashboardPageHeading'
import React, { useState } from 'react'

type Props = {}

const Tasks = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState("all");
  const [selectedLogOption, setSelectedLogOption] = useState("20");
  
  
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  }
  const handleSelectLogChange = (event) => {
    setSelectedLogOption(event.target.value);
  }
  return (
    <div className='pb-32'>
      <DashboardPageHeading heading='API Tasks'/>

    <div className='back-card mt-8'>
    <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
          Task History
        </h1>

{/* select option starts */}
    <div className='flex justify-end py-5'>
    <div className="relative">
        <select
          name="task"
          value={selectedOption}
          onChange={handleSelectChange}
          className="bg-white text-[#000] p-2 pr-8 rounded-lg appearance-none focus:outline-none"
        >
          <option value="all" >All</option>
          <option value="midjourney">Midjourney</option>
          <option value="stable-diffusion">Stable Diffusion</option>
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
{/* select option ends */}

{/* front card start */}
<div className='front-card w-full '>
 <div className='overflow-x-auto flex items-center gap-20 font-bold pb-2 px-10'>
 <span>Status</span>
  <span>Task Model</span>
  <span>Action</span>
  <span>Usage</span>
  <span>Updated (UTC)</span>
  <span>Created (UTC)</span>
  <span></span>
 </div>
 <p className='text-center text-sm text-white pt-8 pb-5'>There's no more data available.</p>
</div>
{/* front card ends */}

      {/* logs per page starts */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-5 text-white text-sm pt-5'>
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

    </div>
  )
}

export default Tasks