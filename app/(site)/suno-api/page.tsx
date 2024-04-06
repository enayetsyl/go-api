import SunoHero from '@/components/SunoHero/SunoHero'
import SunoWaitlist from '@/components/SunoWaitlist/SunoWaitlist'
import Image from 'next/image'
import React from 'react'
import sunoFaqData from './sunoFAQData'
import FAQ from '@/components/FAQ'

type Props = {}

const SunoAPI = (props: Props) => {
  return (
    <div className='pt-20'>
     <SunoHero/>
    <div className='max-w-5xl mx-auto pt-20 px-5'>
    <SunoWaitlist/>
    <FAQ data={sunoFaqData}/>
    </div>
    </div>
  )
}

export default SunoAPI