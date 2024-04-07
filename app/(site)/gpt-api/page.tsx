import React from 'react'
import gptFaqData from './gptFAQData'
import FAQ from '@/components/FAQ'
import GPTHero from '@/components/GPTHero/GPTHero'
import GPTPrice from '@/components/GPTPrice/GPTPrice'
import GPTSupportedFunction from '@/components/GPTSupportedFunction/GPTSupportedFunction'

type Props = {}

const GPTAPI = (props: Props) => {
  return (
    <div>
      <GPTHero/>
      <GPTPrice/>
      <GPTSupportedFunction/>

<FAQ data={gptFaqData}/>
    </div>
  )
}

export default GPTAPI