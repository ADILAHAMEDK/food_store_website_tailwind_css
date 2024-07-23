// import React, { useContext } from 'react'
// import { storeContext } from '../../context/ContextStore'

// const Category = ({foodCategory, setFoodCategory}) => {
//     const category = useContext(storeContext)
//     console.log(category)
//   return (
//     <div className=' mx-auto'>
//         <div className='flex items-center justify-between flex-grow gap-3'>
//         {category.map((item)=>{
//             return(
//                 <div className='flex flex-col items-center p-1'>
//                     <img className='rounded-full w-24 p-1 bg-orange-300' src={item.image} alt="image" />
//                     <h1 className='text-lg font-semibold'>{item.name}</h1>  
//                 </div>
//             )
//         })}
//         </div>
//     </div>
//   )
// }

// export default Category