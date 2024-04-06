import React from 'react'
import SixtyFortyImage from './SixtyFortyImage'
import FiftyFiftyImage from './FiftyFiftyImage'
import FullImage from './FullImage'

type Props = {}

const CheckPointModel = (props: Props) => {
  return (
    <div className='flex-1 space-y-10'>
          <h1 className='text-4xl font-semibold text-center my-20 text-[#000]'>Checkpoint Models</h1>
          {/* Full Div Image */}
          <FullImage source="/images/features/cat.jpg" text='SDXL'/>
         
          {/* 60:40 Div Image */}
         <SixtyFortyImage
         source1='/images/features/bird.jpg'
         source2='/images/features/dog.jpg'
         text1='XXMix_9relistic'
         text2='majicMIX realistic'
         />
          {/* 50:50 Div Image */}
          <FiftyFiftyImage
          source1='/images/features/cat.jpg'
          source2='/images/features/dog.jpg'
          text1='DosMix'
          text2='majicMIX fantasy'
          />
          {/* 50:50 Div Image */}
          <FiftyFiftyImage
          source1='/images/features/cat.jpg'
          source2='/images/features/bird.jpg'
          text1='Dark Sushi'
          text2='majicMIX sombre'
          />
          {/* 60:40 Div Image */}
         <SixtyFortyImage
         source1='/images/features/cat.jpg'
         source2='/images/features/dog.jpg'
         text1='Cyberrelistic'
         text2='ChilloutMix'
         />
          <FullImage source="/images/features/dog.jpg" text='CityEdge_StyleMIx'/>
        </div>
  )
}

export default CheckPointModel