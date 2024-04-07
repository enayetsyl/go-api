import React from 'react'

type Props = {}

const MidjourneySupportedFunctions = (props: Props) => {
  
  return (
    <div>
        <h1 className="pb-20 pt-10 text-3xl text-[#000] dark:text-white md:text-5xl">
        Supported <span className="text-blue-500">Functions</span>
        </h1>
        {/* Grid container */}
        <div className='grid grid-cols-2 md:grid-cols-4 px-5 gap-5'>
          {/* card container */}
         {
          gridText.map(item => (
            <div className='flex flex-col text-center gap-5 text-[#000]' key={item.boxText}>
            {/* card div */}
            <div className='rounded-2xl shadow-xl bg-gray-300 dark:shadow-xl flex justify-center items-center py-5 px-5 text-[#000] dark:text-white '>
              <p className='text-[#000] font-bold'>{item.boxText}</p>
            </div>
            <p className='text-[#000] dark:text-white'>{item.text}</p>
          </div>
          ))
         }

        </div>
    </div>
  )
}

export default MidjourneySupportedFunctions

const gridText = [
  {
    boxText: "Imagine",
    text: "Generates 4 images from a text prompt",
  },
  {
    boxText: "Upscale",
    text: "Upscales images to a higher resolution",
  },
  {
    boxText: "Variation",
    text: "Generates variations of the indexed images",
  },
  {
    boxText: "Describe",
    text: "Generate prompts based on image",
  },
  {
    boxText: "Blend",
    text: "Merge multiple images into a novel new image",
  },
  {
    boxText: "Inpaint",
    text: "Partial modification of the image",
  },
  {
    boxText: "Zoom",
    text: "Expand the canvas of an upscaled image",
  },
  {
    boxText: "Pan",
    text: "Broaden the canvas in a specific direction",
  },
  
]