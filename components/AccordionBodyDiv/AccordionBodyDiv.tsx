import React from 'react'

type Props = {
  className?: string;
  text: string;
}

const AccordionBodyDiv = (props: Props) => {
  const { className, text } = props
  return (
    <div className={`${className} bg-frontCard rounded-lg`}>
      <p className='text-white py-5
      px-10'>{text}</p>
    </div>
  )
}

export default AccordionBodyDiv