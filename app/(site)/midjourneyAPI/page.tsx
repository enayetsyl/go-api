import PageHero from '@/components/Common/PageHero'
import React from 'react'
import midjourneyPageData, { midjourneyFaqData, optionData } from './pageData'
import FAQ from '@/components/FAQ'
import MidjourneyOption from '@/components/MidjourneyOption/MidjourneyOption'
import MidjourneyPrice from '@/components/MidjourneyPrice/MidjourneyPrice'
import MidjourneySupportedFunctions from '@/components/MidjourneySupportedFunctions/MidjourneySupportedFunctions'
import MidjourneySupportedModes from '@/components/MidjourneySupportedModes/MidjourneySupportedModes'
import Testimonial from '@/components/Testimonial'
import Blog from '@/components/Blog'
import BlogPage from '../blog/page'

type Props = {}

const MidjourneyAPI = (props: Props) => {
  return (
   <div>
     <div className='pt-20 max-w-5xl mx-auto'>
      {
        midjourneyPageData.map((data, index )=> <PageHero key={index} data={data}/>)
      }
      <div className='px-5'>
        <h1 className=' text-4xl text-[#000] dark:text-white '>Two Options</h1>
        <div className='space-y-20 py-20'>
        {
          optionData.map(data => <MidjourneyOption key={data.title1} data={data}/>)
        }
        </div>

      </div>
    </div>
        <MidjourneyPrice/>
        
      <div className='pt-20 max-w-5xl mx-auto px-5'>
        <MidjourneySupportedFunctions/>
        <MidjourneySupportedModes/>
        <Testimonial/>
        <div>
        <h1 className=' text-4xl text-[#000] dark:text-white px-5'>From our blog</h1>
        
        <BlogPage/>
        </div>
      <FAQ data={midjourneyFaqData}/>
      </div>
   </div>
  )
}

export default MidjourneyAPI