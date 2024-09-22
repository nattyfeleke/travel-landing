import React from 'react'
import { IDestination } from '../../types/model/destination.model'


interface DestinationsProps {
    queryString: string
    destinations: IDestination[]
}
const Destinations:React.FC<DestinationsProps> = ({queryString,destinations}) => {
  return (
<div className=''>
        <h4 className='text-sm my-1 text-gray-500 px-2 font-bold'>Destinations</h4>
       {destinations.length>0 ? destinations.map(destination=> (<div className='px-4 font-semibold flex flex-col w-full' key={destination.dbid}>{destination.destinationName} 
        <div className="flex flex-wrap gap-1 pt-2 border-t my-1">

{destination.tags.length>0 && destination.tags.map(tag=><div className='border rounded-full px-2 py-1 w-fit font-normal text-xs' key={tag.tagId}>{tag.tagName}</div>)}
        </div>

       </div>)):<div>No result for <span className='text-xs italic'>{queryString}</span></div>}
    </div>
  )
}

export default Destinations