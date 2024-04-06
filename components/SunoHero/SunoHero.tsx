import Image from 'next/image'
import React from 'react'

type Props = {}

const SunoHero = (props: Props) => {
  return (
    <div className='relative'>
    <Image
    src={'/images/suno/hero.webp'}
    height={300}
    width={500}
    alt='hero'
    className='w-full h-screen object-cover'
    />
     <div className="absolute z-10 bottom-0 w-full h-full flex flex-col items-center justify-end">
      <div className="flex flex-col items-center justify-end gap-10 px-5">
        <h1 className="text-6xl lg:text-8xl text-white  text-center">Transcending music</h1>
        <p className="text-white font-bold text-center text-2xl pb-20">Integrate  <span className="inline-block bg-gradient-to-r  from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent">Suno API</span> into your applications! </p>
      </div>
    </div>
    </div>
  )
}

export default SunoHero