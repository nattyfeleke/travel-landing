import React from 'react'
import downWhite from '../../assets/down-icon-white.png'
import downBlack from '../../assets/down-icon-black.png'
import FeatureCard from './FeatureCard'
import { IFlight } from '../../types/model/flight.model'
import FlightDetail from './FlightDetail'
interface SearchProp {
  flights:IFlight[]
}
const Search:React.FC<SearchProp> = ({flights}) => {
 const flight = flights[0]
  return (
    <FeatureCard title='Search' description='Make searching flights an intuitive experience for your
                customers.'>
            <div className='flex flex-col items-end self-stretch shrink-0 flex-nowrap  '>
              <div className='flex h-10 py-2 px-4 gap-4 items-center self-stretch shrink-0 flex-nowrap   '>
                <div className='flex w-14 h-6 gap-1 justify-center items-center shrink-0 flex-nowrap'>
                  <p className="h-3 shrink-0 font-firma-bold text-xs leading-3 text-[#2e2e32] ">
                    Return
                  </p>
                  <img src={downBlack} alt=""  />
                </div>
                <div className='flex w-28 p-2  gap-2 justify-center items-center shrink-0 flex-nowrap bg-[#1e61dc] rounded-sm '>
                  <p className="h-3 shrink-0 basis-auto  text-xs font-firma-bold leading-3 text-[#fff]  text-left ">
                    Select Seat
                  </p>
                  <img src={downWhite} alt=""  />
                </div>
                <div className='flex w-16 p-2 gap-2 justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-sm '>
                  <p className="h-3 shrink-0 font-firma-bold text-xs leading-3 text-[#2e2e32] ">
                    1 stop
                  </p>
                  <img src={downBlack} alt=""  />
                </div>
                <div className='flex w-14 p-2 gap-2 justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-sm '>
                  <p className="h-3 shrink-0 font-firma-bold text-xs leading-3 text-[#2e2e32]">
                    Airline
                  </p>
                </div>
              </div>
          {flight && <FlightDetail flight={flight}/> }     
              
            </div>
         
          </FeatureCard>
  )
}

export default Search