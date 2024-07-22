import React from 'react'
import { banner } from '../../Assect/Images'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='relative'>
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40'>
                <h1>The <span>Best</span></h1>
                <h1>Foods <span>Delivered</span></h1>
            </div>
            <img className='max-h-[500px]' src={banner} alt="img" />
        </div>
    </div>
  )
}

export default Hero