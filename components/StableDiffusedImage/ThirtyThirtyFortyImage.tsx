import Image from 'next/image'
import React from 'react'
type Props = {
  source1: string;
  source2: string;
  source3: string;
  text1: string;
  text2: string;
  text3: string;
}

const ThirtyThirtyFortyImage = (props: Props) => {
  const { source1, source2, source3, text1, text2, text3 } = props
  return (
    <div className='flex justify-center items-center gap-5 w-full h-80'>
          {/* 30% div */}
          <div className='w-[30%] rounded-lg relative h-full'>
          <Image
            src={source1}
            height={400}
            width={400}
            alt='image'
            className='rounded-lg w-full h-full object-cover'
            /> 
            <div className='h-20 w-full bg-black rounded-t-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 absolute top-0 flex justify-center items-center'>
              <p className='text-white'>{text1}</p>
            </div>
          </div>
          {/* 30% div */}
          <div className='w-[30%] rounded-lg relative h-full'>
          <Image
            src={source2}
            height={400}
            width={400}
            alt='image'
            className='rounded-lg w-full h-full object-cover'
            /> 
            <div className='h-20 w-full bg-black rounded-t-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 absolute top-0 flex justify-center items-center'>
              <p className='text-white'>{text2}</p>
            </div>
          </div>
          {/* 50% div */}
          <div className='w-[40%] rounded-lg relative h-full'>
          <Image
            src={source3}
            height={400}
            width={400}
            alt='image'
            className='rounded-lg w-full object-cover h-full'
            /> 
            <div className='h-20 w-full bg-black rounded-t-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 absolute top-0 flex justify-center items-center'>
              <p className='text-white'>{text3}</p>
            </div>
          </div>
          </div>
  )
}

export default ThirtyThirtyFortyImage