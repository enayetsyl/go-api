import Image from 'next/image'
import React from 'react'

type Props = {
  source1: string;
  source2: string;
  text1: string;
  text2: string;
}

const FiftyFiftyImage = (props: Props) => {
  const { source1, source2, text1, text2 } = props
  return (
    <div className='flex justify-center items-center gap-5 w-full h-80'>
          {/* 50% div */}
          <div className='w-[50%] rounded-lg relative h-full'>
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
          {/* 50% div */}
          <div className='w-[50%] rounded-lg relative h-full'>
          <Image
            src={source2}
            height={400}
            width={400}
            alt='image'
            className='rounded-lg w-full object-cover h-full'
            /> 
            <div className='h-20 w-full bg-black rounded-t-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 absolute top-0 flex justify-center items-center'>
              <p className='text-white'>{text2}</p>
            </div>
          </div>
          </div>
  )
}

export default FiftyFiftyImage