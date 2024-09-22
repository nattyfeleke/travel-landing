import React from 'react'
import planeImg from '../../assets/plane.png'
import clockImg from '../../assets/clock.png'
import { IFlight } from '../../types/model/flight.model'
interface FlightDetailProps {
    flight:IFlight
}
const FlightDetail:React.FC<FlightDetailProps> = ({flight}) => {
    const {time,destination,duration,type}=flight
  return (
    <div className=' mt-4 flex  h-10 gap-2 items-start shrink-0 flex-nowrap  '>
    <div className='flex flex-col gap-1.5 items-end justify-end shrink-0 flex-nowrap  '>
      <p className="text-base font-firma-bold leading-5 text-[#2e2e32]   ">
        {time}
      </p>
      <p className="text-xs font-firma-light leading-4 text-[#818083]  text-right whitespace-nowrap ">
       {destination}
      </p>
    </div>
    <div className="flex flex-col items-center gap-1.5">
    <div className=' shrink-0 relative flex items-center'>
    <div className="h-1 w-1 bg-white border border-[#A4B1C1] rounded-full"></div>
    <div className="h-0.5 w-2 bg-white border text-[#A4B1C1]"></div>
      <div className="w-fit rounded-full px-2 py-1 flex flex-nowrap items-center gap-1 bg-[#f0f0f0]">
      
                  <img src={planeImg} alt=""  />
      
                  <p className="h-[10px] shrink-0 basis-auto font-firma text-xs leading-3 text-[#1e61dc]  text-left whitespace-nowrap">
                {type}
              </p>
      </div>
    <div className="h-0.5 w-2 bg-white border text-[#A4B1C1]"></div>
      <div className="h-1 w-1 bg-white border border-[#A4B1C1] rounded-full"></div>
     
    </div>
    <div className='flex w-12 gap-1 items-center flex-nowrap  '>
    
    <img src={clockImg} alt=""  /> 
    <p className="h-[10px] shrink-0 basis-auto font-['BR_Firma'] text-[10px] font-normal leading-[10px] text-[#2e2e32] relative text-left whitespace-nowrap z-[72]">
            {duration}
          </p>
    

    </div>

    </div>
  </div>

  )
}

export default FlightDetail