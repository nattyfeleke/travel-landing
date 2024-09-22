import React from 'react'
import { IDestination } from '../../types/model/destination.model'


interface DestinationsProps {
    queryString: string
    destinations: IDestination[]
}
const Destinations:React.FC<DestinationsProps> = ({queryString,destinations}) => {
  return (
    <div>
        <h4 className='text-sm my-1 text-gray-500'>Destinations</h4>
       {destinations.length>0 ? destinations.map(destination=> (<div className='hover:bg-gray-300 px-4 cursor-pointer' key={destination.dbid}>{destination.destinationName}</div>)):<div>No result for <span className='text-xs italic'>{queryString}</span></div>}
    </div>
  )
}

export default Destinations