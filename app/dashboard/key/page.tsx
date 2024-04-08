'use client'
import AccordionBodyDiv from "@/components/AccordionBodyDiv/AccordionBodyDiv";
import Button from "@/components/Button/Button";
import DashboardPageHeading from "@/components/DashboardPageHeading/DashboardPageHeading";
import ImagineApiReq from "@/components/ImagineApiReq/ImagineApiReq";
import Input from "@/components/Input/Input";
import PostAPIBox from "@/components/PostAPIBox/PostAPIBox";
import React, { useState } from "react";

type Props = {};

const MyAPIKeys = (props: Props) => {
  return (
    <div className="pb-32">
      <DashboardPageHeading heading="API Keys" />

      {/* key card start */}
      <div className="front-card ">
        <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
          My API Keys
        </h1>
        <div className="py-5 text-sm text-white">
          <div className="flex flex-wrap items-center justify-between">
            <p>Email</p>
            <p>enayetflweb@gmail.com</p>
          </div>
          <div className="flex flex-wrap items-center justify-between">
            <p>API Key</p>
            <p className="break-all">
              42a************************************************
            </p>
          </div>
          <div className="flex justify-end pt-10">
            <button className="btn btn-c1 text-sm">Reset Key</button>
          </div>
        </div>
      </div>
      {/* key card ends */}

      {/* Try Now Card start */}
      <div className="front-card mt-5">
        <h1 className="border-l-4 border-blue-500  pl-5 text-2xl font-semibold">
          Try Now!
        </h1>
        <Midjourney/>
        <StableDiffusion/>
        <DallE3/>
        <GPT/>
        {/* accordion start */}
        
        {/* accordion ends */}
      </div>
      {/* Try Now Card ends */}
    </div>
  );
};

export default MyAPIKeys;






const Midjourney = () => {
  return (
    <div className="back-card p-5">
    {/* First part */}
    <PostAPIBox api="https://api.midjourneyapi.xyz/mj/v2/imagine" />

<div className="flex flex-col items-center justify-center gap-5 pt-5 sm:flex-row sm:gap-1 md:gap-5">
  <div className="w-full flex-grow sm:w-1/2">
    <Input label="X-API-KEY" placeholder="API-KEY" />
    <Input label="prompt" />
  </div>
  <div className="w-full flex-grow px-10 sm:w-1/2">
    <ImagineApiReq
      text1="curl"
      text3='-H "Content-Type: application/json"'
      text4='-H "X-API-KEY: "'
      text2="-X POST "
      text5='-d "{"prompt":"","process_mode":"fast"}" '
      text6="'https://api.midjourneyapi.xyz/mj/v2/imagine'"
    />
  </div>
</div>
<div className="mt-5 w-1/2">
  <Button className="w-full rounded-lg bg-blue-500 py-2 text-white ">
    Imagine
  </Button>
</div>

<div className="mt-5 w-full">
  <AccordionBodyDiv text="Body:" className="w-full" />
</div>
{/* First part end */}
    {/* second part */}
    <div className="mt-10">
    <PostAPIBox api="https://api.midjourneyapi.xyz/sd/fetch" />
    </div>

<div className="flex flex-col items-start justify-center gap-5 pt-5 sm:flex-row sm:gap-1 md:gap-5">
  <div className="w-full flex-grow sm:w-1/2">
    <Input label="id"  />
  </div>
  <div className="w-full flex-grow px-10 sm:w-1/2">
    <ImagineApiReq
      text1="curl"
      text3='-H "Content-Type: application/json"'
      text4='-H "X-API-KEY: "'
      text2="-X POST "
      text5="-d '{'id':''}' "
      text6="'https://api.midjourneyapi.xyz/sd/fetch'"
    />
  </div>
</div>
<div className="mt-5 w-1/2">
  <Button className="w-full rounded-lg bg-blue-500 py-2 text-white ">
    Fetch
  </Button>
</div>

    <p className="text-white pt-2 pb-5">We also support the use of img2img, Upscale and ControlNet. Please see the <span className="underline">documentation </span> for specific usage.</p>

<div className="mt-5 w-full flex justify-center gap-5 items-center">
  <AccordionBodyDiv text="Image: "
  className="w-1/3"
  />
  <AccordionBodyDiv text="Body:" className="w-2/3" />
</div>
{/* second part end */}
        </div>
  )
  
}
const StableDiffusion = () => {
  const [selectedOption, setSelectedOption] = useState("all");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  }
  return (
    <div className="back-card p-5">
    {/* First part */}
    <PostAPIBox api="https://api.midjourneyapi.xyz/sd/txt2img" />

<div className="flex flex-col items-center justify-center gap-5 pt-5 sm:flex-row sm:gap-1 md:gap-5">
  <div className="w-full flex-grow sm:w-1/2">
    <Input label="X-API-KEY" placeholder="API-KEY" />
    {/* select option starts */}
    <div className='flex justify-end py-5'>
    <div className="relative">
      <label htmlFor="" className='text-base text-white '>model_id</label>
        <select
          name="model"
          value={selectedOption}
          onChange={handleSelectChange}
          className="bg-white text-[#000] p-2 pr-8 rounded-lg appearance-none focus:outline-none w-full mt-2"
        >
          <option value="midjourney" >midjourney</option>
          <option value="ghostmix">ghostmix</option>
          <option disabled>Please refer to the  docs </option>
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
    <Input label="prompt" />
  </div>
  <div className="w-full flex-grow px-10 sm:w-1/2">
    <ImagineApiReq
      text1="curl"
      text2="-X POST "
      text3='-H "Content-Type: application/json"'
      text4='-H "X-API-KEY: "'
      text5="-d '{'prompt':'','model_id':'midjourney','width':'512','height':'512'}' "
      text6="'https://api.midjourneyapi.xyz/sd/txt2img'"
    />
  </div>
</div>
<div className="mt-5 w-1/2">
  <Button className="w-full rounded-lg bg-blue-500 py-2 text-white ">
    Imagine
  </Button>
</div>

<div className="mt-5 w-full">
  <AccordionBodyDiv text="Body:" className="w-full" />
</div>
{/* First part end */}
    {/* second part */}
    <div className="mt-10">
    <PostAPIBox api="https://api.midjourneyapi.xyz/sd/fetch" />
    </div>

<div className="flex flex-col items-start justify-center gap-5 pt-5 sm:flex-row sm:gap-1 md:gap-5">
  <div className="w-full flex-grow sm:w-1/2">
    <Input label="id"  />
  </div>
  <div className="w-full flex-grow px-10 sm:w-1/2">
    <ImagineApiReq
      text1="curl"
      text3='-H "Content-Type: application/json"'
      text4='-H "X-API-KEY: "'
      text2="-X POST "
      text5="-d '{'id':''}' "
      text6="'https://api.midjourneyapi.xyz/sd/fetch'"
    />
  </div>
</div>
<div className="mt-5 w-1/2">
  <Button className="w-full rounded-lg bg-blue-500 py-2 text-white ">
    Fetch
  </Button>
</div>

    <p className="text-white pt-2 pb-5">We also support the use of img2img, Upscale and ControlNet. Please see the <span className="underline">documentation </span> for specific usage.</p>

<div className="mt-5 w-full flex justify-center gap-5 items-center">
  <AccordionBodyDiv text="Image: "
  className="w-1/3"
  />
  <AccordionBodyDiv text="Body:" className="w-2/3" />
</div>
{/* second part end */}
        </div>
  )
  
}
const DallE3 = () => {
  const [selectedOption, setSelectedOption] = useState("all");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  }
  return (
    <div className="back-card p-5">
    {/* First part */}
    <PostAPIBox api="https://api.goapi.xyz/v1/images/generations" />

<div className="flex flex-col items-center justify-center gap-5 pt-5 sm:flex-row sm:gap-1 md:gap-5">
  <div className="w-full flex-grow sm:w-1/2">
    <Input label="Authorization" placeholder="API-KEY" />
    {/* select option starts */}
    <div className='flex justify-end py-5 '>
    <div className="relative">
      <label htmlFor="size" className='text-base text-white '>size</label>
        <select
          name="size"
          value={selectedOption}
          onChange={handleSelectChange}
          className="bg-white text-[#000] p-2 pr-8 rounded-lg appearance-none focus:outline-none w-full mt-2"
        >
          <option value="1024x1024">1024x1024</option>
          <option value="1792x1024" >1792x1024</option>
          <option value="1024x1792" >1024x1792</option>
         
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
    <Input label="prompt" />
  </div>
  <div className="w-full flex-grow px-10 sm:w-1/2">
    <ImagineApiReq
      text1="curl"
      text2="-X POST "
      text3='-H "Content-Type: application/json"'
      text4='-H "X-API-KEY: "'
      text5="-d '{'model':'','dall-e-3':'prompt','n':'1','size':'1024x1024'}' "
      text6="'https://api.goapi.xyz/v1/images/generations'"

    
    />
  </div>
</div>
<div className="mt-5 w-1/2">
  <Button className="w-full rounded-lg bg-blue-500 py-2 text-white ">
    Generate
  </Button>
</div>

<div className="mt-5 w-full flex justify-center gap-5 items-center">
  <AccordionBodyDiv text="Image: "
  className="w-1/3"
  />
  <AccordionBodyDiv text="Body:" className="w-2/3" />
</div>
{/* First part end */}
    

        </div>
  )
  
}
const GPT = () => {
 
  return (
    <div className="back-card p-5">
    {/* First part */}
    <PostAPIBox api="https://api.goapi.xyz/v1/chat/completions" />

<div className="flex flex-col items-center justify-center gap-5 pt-5 sm:flex-row sm:gap-1 md:gap-5">
  <div className="w-full flex-grow sm:w-1/2">
    <Input label="Authorization" placeholder="API-KEY" />
    
    <Input label="prompt" />
  </div>
  <div className="w-full flex-grow px-10 sm:w-1/2">
    <ImagineApiReq
      text1="curl"
      text2="-X POST "
      text3='-H "Content-Type: application/json"'
      text4='-H "X-API-KEY: "'
      text5="-d '{'model':'','gpt-3.5-turbo':'messages','role':'user','content':''}' "
      text6="'https://api.goapi.xyz/v1/images/generations'"

   
    />
  </div>
</div>
<div className="mt-5 w-1/2">
  <Button className="w-full rounded-lg bg-blue-500 py-2 text-white ">
    Generate
  </Button>
</div>

<p className="text-white pt-2 pb-5">If you want to use gpt4 api, please upgrade to developer or higher, see the  <span className="underline">documentation </span></p>

<div className="mt-5 w-full flex justify-center gap-5 items-center">
  <AccordionBodyDiv text="Gpt3.5: "
  className="w-1/3"
  />
  <AccordionBodyDiv text="Body:" className="w-2/3" />
</div>
{/* First part end */}
    

        </div>
  )
  
}
