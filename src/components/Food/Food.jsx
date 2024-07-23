import React, { useContext } from 'react'
import { storeContext } from '../../context/ContextStore'

const Food = () => {
    const {data} = useContext(storeContext);
    console.log(data)
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div className='font-bold text-gray-700'>
                <p>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>100</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>200</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>300</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>400</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>500</button>
                </div>
            </div>
        </div>
        
        {/* display food */}
        <div></div>
    </div>
  )
}

export default Food