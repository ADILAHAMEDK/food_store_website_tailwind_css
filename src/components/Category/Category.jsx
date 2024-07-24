import React, { useContext } from 'react'
import { storeContext } from '../../context/ContextStore'

const Category = () => {
    const {categories} = useContext(storeContext)
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 py-6'>
        {categories.map((item, index)=>(
            <div className='bg-gray-100 rounded-lg p-4 flex justify-between items-center' key={index}>
                <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                <img className='w-20' src={item.image} alt="img" />
            </div>
        ))}
        </div>
    </div>
  )
}

export default Category