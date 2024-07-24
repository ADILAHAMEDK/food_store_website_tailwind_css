import React, { useContext, useState } from 'react'
import { storeContext } from '../../context/ContextStore'

const Food = () => {
    const {data} = useContext(storeContext);
    console.log(data)
    const [foods, setFoods] = useState(data);
    
    //Filter Type
    const filterType = (category)=>{
        setFoods(data.filter((item)=>{
            return item.category === category
        }))
    }

    //Filter Price
    const filterPrice = (price)=>{
        setFoods(data.filter((item)=>{
            return item.price === price
        }))
    }
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div className='font-bold text-gray-700'>
                <p>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=>setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={()=>filterType("burger")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={()=>filterType("pizza")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={()=>filterType("salad")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button onClick={()=>filterType("chicken")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={()=>filterPrice("100")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>100</button>
                    <button onClick={()=>filterPrice("200")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>200</button>
                    <button onClick={()=>filterPrice("300")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>300</button>
                    <button onClick={()=>filterPrice("400")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>400</button>
                    <button onClick={()=>filterPrice("500")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>500</button>
                </div>
            </div>
        </div>
        
        {/* display food */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4'>
            {foods.map((item, index)=>(
                <div className='border shadow-lg rounded-lg hover:scale-105 duration-300' key={index}>
                    <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt="img" />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p className='bg-orange-500 text-white p-1 rounded-full'><span>{item.price}</span></p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Food