import React from 'react'
import stableDiffusionPageData, { supportedModes } from './pageData'
import PageHero from '@/components/Common/PageHero'
import StableSupportedModes from '@/components/StableSupportedModes/StableSupportedModes'
import Image from 'next/image'
import FullImage from '@/components/StableDiffusedImage/FullImage'
import SixtyFortyImage from '@/components/StableDiffusedImage/SixtyFortyImage'
import FiftyFiftyImage from '@/components/StableDiffusedImage/FiftyFiftyImage'
import CheckPointModel from '@/components/StableDiffusedImage/CheckPointModel'
import LoRaModels from '@/components/StableDiffusedImage/LoRaModels'

type Props = {}

const StableDiffusionAPI = (props: Props) => {
  return (
    <div className='pt-20 max-w-5xl mx-auto'>
      {
        stableDiffusionPageData.map((data, index )=> <PageHero key={index} data={data}/>)
      }
      <div className='mt-32'>
      <h1 className="text-4xl md:text-6xl pb-15 px-5">
      Supported{" "}
        <span className="inline-block bg-gradient-to-r  from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent">
        Modes
        </span>
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 '>
        {
          supportedModes.map(card => <StableSupportedModes card={card} key={card.heading}/>)
        }
      </div>
      </div>
      <div className='flex justify-center items-center gap-10 flex-col lg:flex-row px-5 mt-20'>
        {/* checkpoint models */}
        <CheckPointModel/>
        {/* LoRa Models */}
        <div className='flex-1 space-y-10'>
        <LoRaModels/>
        </div>
      </div>
    </div>
  )
}

export default StableDiffusionAPI