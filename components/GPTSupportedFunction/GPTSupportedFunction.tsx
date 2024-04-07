import React from 'react'
import { BsSkipForward } from 'react-icons/bs'
import { IoIosInfinite } from 'react-icons/io'
import { IoPlayForwardOutline } from 'react-icons/io5'
import { RiCheckboxMultipleBlankLine } from 'react-icons/ri'

type Props = {}

const GPTSupportedFunction = (props: Props) => {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20">

      <h1 className="pb-20 pt-10 text-3xl text-[#000]  dark:text-white md:text-5xl">
      Supported <span className="text-blue-500">Functions and Features</span>
      </h1>

  {/* Grid container */}
  <div className='grid grid-cols-1 md:grid-cols-2 px-5 gap-5'>
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


         {/* Grid div */}
         <div className="grid grid-cols-1 gap-5 py-20 md:grid-cols-3">
          {iconAndText.map((item) => (
            <div
              key={item.text}
              className="flex items-center justify-start gap-5 "
            >
              <i className="rounded-md bg-blue-500 p-1 text-white">
                {item.icon}
              </i>
              <p className="text-white">{item.text}</p>
            </div>
          ))}
        </div>

    </div>
  )
}

export default GPTSupportedFunction


const gridText = [
  {
    boxText: "Multimodal Conversations",
    text: "Chat with GPT-4 or any other GPTs with multiple types of inputs and outputs",
  },
  {
    boxText: "Web Browsing",
    text: "Giving the language model access to information on the web",
  },
  {
    boxText: "DALL E",
    text: "Create unique images from conversations by describing your vision or even revisions",
  },
  {
    boxText: "Code Interpreter",
    text: "Allow users to perform visualisations, analyse complex datasets, or access rich python libraries",
  },
  {
    boxText: "GPT-4 Vision",
    text: "Allows the mode to take in images and answer questions about the input images",
  },
  {
    boxText: "Create your GPTs",
    text: "Setup instructions, upload knowledge files, configure its capabilities such as web-browsing, DALLE, or Code Intepreter",
  },
  
  
]


const iconAndText = [
  {
    icon: <IoIosInfinite />,
    text: "Built-in load balancer",
  },
  {
    icon: <IoIosInfinite />,
    text: "Completely Captcha free",
  },
  {
    icon: <IoIosInfinite />,
    text: "Conversation Management",
  },
  {
    icon: <IoIosInfinite />,
    text: "Reverse proxy ChatGPT backend API",
  },
  
];
