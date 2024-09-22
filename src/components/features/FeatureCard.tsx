import { ReactNode } from '@tanstack/react-router';
import React from 'react'

interface FeatureCardProp {
    children:ReactNode
    title:string;
    description:string;
}
const FeatureCard:React.FC<FeatureCardProp> = ({title,description,children}) => {
    
  return (
    <div className='flex w-full sm:w-full  md:w-1/2 py-6 pr-0  pl-6 flex-col gap-6 justify-center items-start flex-nowrap bg-[#f0f6fc] rounded-2xl  overflow-hidden'>
      {children}
        <div className='flex flex-col gap-4 items-start '>
              <h3 className="font-firma-bold text-2xl  leading-8  relative text-left">
                {title}
              </h3>
              <p className="font-firma text-base  leading-7 text-[#2e2e32] text-left">
              {description}
              </p>
            </div>
    </div>
  )
}

export default FeatureCard