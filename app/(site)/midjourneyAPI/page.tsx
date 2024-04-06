import PageHero from '@/components/Common/PageHero'
import React from 'react'
import midjourneyPageData from './pageData'

type Props = {}

const MidjourneyAPI = (props: Props) => {
  return (
    <div className='pt-20 max-w-5xl mx-auto'>
      {
        midjourneyPageData.map((data, index )=> <PageHero key={index} data={data}/>)
      }
    </div>
  )
}

export default MidjourneyAPI