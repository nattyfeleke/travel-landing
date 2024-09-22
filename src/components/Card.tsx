import React from 'react'
export interface ICard {
    order: number;
title:string;
description:string;
}
interface CardProp {
card:ICard
}
const Card:React.FC<CardProp> = ({card}) => {
    const {order,title,description} = card
  return (
    <div className='flex flex-col w-full sm:w-1/2 md:max-w-72 items-center sm:items-start'>
        <div className="h-24 w-24 bg-[#E7F6FF] text-black rounded-sm flex items-center justify-center font-firma-bold">{order}</div>
<h4 className='font-firma-bold my-1'>{title}</h4>
<p className='text-[#6D7C94] text-sm my-2 text-center sm:text-left'>{description}</p>
    </div>
  )
}

export default Card