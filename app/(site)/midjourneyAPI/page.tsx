import PageHero from '@/components/Common/PageHero'
import React from 'react'
import midjourneyPageData, { midjourneyFaqData } from './pageData'
import FAQ from '@/components/FAQ'

type Props = {}

const MidjourneyAPI = (props: Props) => {
  return (
    <div className='pt-20 max-w-5xl mx-auto'>
      {
        midjourneyPageData.map((data, index )=> <PageHero key={index} data={data}/>)
      }
      <div>
      <FAQ data={midjourneyFaqData}/>
      </div>
    </div>
  )
}

export default MidjourneyAPI