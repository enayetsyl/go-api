import React from 'react'

type Props = {
  label: string;
  placeholder?: string;
  className?: string;
}

const Input = (props: Props) => {
  const { label, placeholder, className} = props;
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor="" className='text-base text-white '>{label}</label>
      <input type="text" placeholder={placeholder}
      className={`rounded-lg p-2.5 bg-white text-sm text-black focus:outline-none ${className}`}
      />
    </div>
  )
}

export default Input