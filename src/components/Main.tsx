import React from 'react'
import Card, { ICard } from './Card'
const cardsData:ICard[] = [ {
    order:1,
    title:'Subscribe',
    description:'Subscribe to the website plan on Intraverse.'
},
{
    order:2,
    title:'Customize',
    description:'Customize every content on your website to fit your brand.'
},
{
    order:3,
    title:'Start selling',
    description:'Publish to your own domain and start selling instantly.'
}
]
const Main = () => {
  return (
    <div className='px-20 mx-auto w-full my-20'>
        <div className="flex flex-col gap-10 items-center">
            
        <h2 className="font-firma-bold text-xl">The fastest way to sell travel</h2>
        <div className="flex gap-4">
                {cardsData.map(card => (<Card card={card} key={card.order} />))}
            </div>
        </div>
    </div>
  )
}

export default Main