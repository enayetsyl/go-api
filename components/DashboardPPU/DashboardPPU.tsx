import React from 'react'

type Props = {
  title: string;
  text: string
}

const DashboardPPU: React.FC<Props> = ({ title, text }) => {
  return (
    <div className='border-2 border-blue-500 rounded-lg py-5 px-10'>
        <p className='font-bold text-white text-xl'>{title}</p>
        <p className='font-bold text-white text-xl'>{text}</p>
       </div>
  )
}

export default DashboardPPU