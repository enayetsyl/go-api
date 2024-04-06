import React from 'react'
import SixtyFortyImage from './SixtyFortyImage'
import FullImage from './FullImage'
import FiftyFiftyImage from './FiftyFiftyImage'
import ThirtyThirtyFortyImage from './ThirtyThirtyFortyImage'

type Props = {}

const LoRaModels = (props: Props) => {
  return (
    <div className='flex-1 space-y-10'>
          <h1 className='text-4xl font-semibold text-center my-20 text-[#000]'>LoRA Models</h1>
          
          {/* 50:50 Div Image */}
          <FiftyFiftyImage
          source1='/images/features/bird.jpg'
          source2='/images/features/dog.jpg'
          text1='XXMix9_v20Lora'
          text2='SamDoesArts (Sam Yang) Style LoRA'
          />

          {/* 50:50 Div Image */}
          <FiftyFiftyImage
          source1='/images/features/cat.jpg'
          source2='/images/features/bird.jpg'
          text1='Pixel Sorting'
          text2='moxin_1'
          />
          <ThirtyThirtyFortyImage
          source1='/images/features/cat.jpg'
          source2='/images/features/bird.jpg'
          source3='/images/features/dog.jpg'
          text1='mscene'
          text2='LowRA'
          text3='Neon Cyberpunk'
          />

          
          
          
         
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
          
        </div>
  )
}

export default LoRaModels