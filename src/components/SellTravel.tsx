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
const SellTravel = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
            
        <h2 className="font-firma-bold text-xl text-center">The fastest way to sell travel</h2>
        <div className="flex flex-col sm:flex-row gap-4 ">
                {cardsData.map(card => (<Card card={card} key={card.order} />))}
            </div>
        </div>
  )
}

export default SellTravel