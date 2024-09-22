import React from 'react'
import HeroImage from '../assets/hero.png'
import { Link } from '@tanstack/react-router'
const Hero = () => {
  return (
    <div className='bg-black h-full sm:h-screen px-20'>

        <div className="flex  flex-col h-full w-full items-center justify-end py-20 sm:py-0 ">
          <div className="flex flex-col  max-w-xl  gap-12">
<div className='text-center'>
     <h1 className='text-white text-4xl font-firma-black'>Start selling travel today on your own website</h1>
<p className="text-[#6D7C94] text-[10px] mt-4">Customize your travel website, and start selling. Let’s get your business off the ground with our intuitive tools!</p>
<div className="my-4">
<Link to='.' className='px-12 py-1.5 text-white bg-[#1E61DC] rounded font-thin text-sm'> Try it now</Link>
</div>

</div>
         
<div className="hidden sm:block">

<img src={HeroImage} alt="hero image" />
</div>
          </div>
        

        </div>

        
       
    </div>
  )
}

export default Hero