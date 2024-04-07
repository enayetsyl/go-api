'use client'
import { DashMenu } from '@/types/dashMenu';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
// import styles from './DashDrawer.module.css'

type Props = {}

const DashDrawer = (props: Props) => {
  const pathUrl = usePathname();
  return (
    <div className='px-10 '>
      <div className={` flex justify-start gap-5 overflow-x-auto  lg:flex-col pb-1 lg:gap-0 text-white text-sm font-semibold`}>
      {
        menuData.map(item => <Link key={item.id} href={item.path} className={`
        p-3  rounded-xl whitespace-nowrap
        ${pathUrl === item.path ? "bg-[#212225]" : "hover:bg-[#212225]"}
      `}>
        {item.title}
      </Link>)
      }
           
    </div>
    </div>
  )
}

export default DashDrawer

export const menuData: DashMenu[] = [
  {
    id: 1,
    title: "Overview",
    newTab: false,
    path: "/dashboard",
  },
  {
    id: 2,
    title: "Midjourney API",
    newTab: false,
    path: "/dashboard/midjourney",
  },
  {
    id: 3,
    title: "GPTs",
    newTab: false,
    path: "/dashboard/gpts",
  },
  {
    id: 4,
    title: "Account Notifications",
    newTab: false,
    path: "/dashboard/notifications",
  },
  {
    id: 5,
    title: "Tasks",
    newTab: false,
    path: "/dashboard/tasks",
  },
  {
    id: 6,
    title: "Billing",
    newTab: false,
    path: "/dashboard/billing",
  },
  {
    id: 7,
    title: "My API Keys",
    newTab: false,
    path: "/dashboard/key",
  },
  {
    id: 8,
    title: "Referral",
    newTab: false,
    path: "/dashboard/referral",
  },
  
];


