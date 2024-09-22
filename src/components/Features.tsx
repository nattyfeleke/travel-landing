import React, { useEffect } from 'react'
import Search from './features/Search'
import Book from './features/Book'
import Ancillaries from './features/Ancillaries'
import { useAppDispatch, useAppSelector } from '../store/store'
import { fetchFlights } from '../store/features/flight.slice'

const Features = () => {
    const {flights,status,task} = useAppSelector(state=>state.flight)
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchFlights({}))
    },[])
    console.log(flights);
    
  return (
    <div className="flex flex-col gap-10 items-center my-20" >

<h2 className="font-firma-bold text-xl text-center">Everything you need, in one link.</h2>
<div className="flex gap-4 w-full flex-wrap sm:flex-nowrap" >

<Search flights={flights} />
<Book flights={flights}  />
<Ancillaries flights={flights} />
</div>
    </div>
  )
}

export default Features