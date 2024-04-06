import React from 'react'
import gptFaqData from './gptFAQData'
import FAQ from '@/components/FAQ'

type Props = {}

const GPTAPI = (props: Props) => {
  return (
    <div>GPTAPI

<FAQ data={gptFaqData}/>
    </div>
  )
}

export default GPTAPI