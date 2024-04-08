import React from 'react'

interface Props {
  heading: string;
}

const DashboardPageHeading: React.FC<Props> = ({ heading }) => {
  return (
    <div className="py-10">
      <h1 className="pb-5 text-3xl font-bold text-white">{heading}</h1>
    </div>
  )
}

export default DashboardPageHeading