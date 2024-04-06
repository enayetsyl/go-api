import React from 'react'
import llmApiPageData, { AvailableEndPointsData } from './pageData'
import PageHero from '@/components/Common/PageHero'
import LLMEndpoints from '@/components/LLMEndpoints'
import LLMDeveloper from '@/components/LLMDeveloper'

type Props = {}

const LLMAPI = (props: Props) => {
  return (
    <div className='py-20 max-w-5xl mx-auto'>
      <div>
      {
        llmApiPageData.map((data, index )=> <PageHero key={index} data={data}/>)
      }
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-32'>
        {
          AvailableEndPointsData.map(endpoint => <LLMEndpoints key={endpoint.heading} endpoint={endpoint}/>)
        }
        
      </div>
      <div className='pt-32'>
        <LLMDeveloper/>
      </div>
    </div>
  )
}

export default LLMAPI