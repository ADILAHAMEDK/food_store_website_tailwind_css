import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { FaShoppingCart, FaUserFriends } from "react-icons/fa";
import { IoClose, IoPricetag } from "react-icons/io5";
import { FaTruck, FaWallet } from "react-icons/fa6";
import { MdOutlineFavorite, MdHelp } from "react-icons/md";
import { BsSave2Fill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
        <div onClick={()=>setNav(!nav)} className='cursor-pointer'>
        <GiHamburgerMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best<span className='font-bold'>Eats</span></h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
            <p className='bg-black text-white rounded-full p-2'>Delivery</p>
            <p className='p-2'>Pickup</p>
        </div>
        </div>   

         {/* search */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <BiSearch size={25} />
        <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search' />
        </div>

        {/* Cart */}
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
          <FaShoppingCart size={20} className='mr-2' />Cart
          </button>

          {/* Mobile menu */}
          {/* overlay */}
          {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ""}
          
          
          {/* SideBar menu */}
         <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
          <IoClose size={30} onClick={()=>setNav(!nav)} className='absolute right-4 top-4 cursor-pointer' />
          <h2 className='text-2xl p-4'>Best<span className='font-bold'>Eats</span></h2>
          <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
              <li className='text-xl py-4 flex items-center'><FaTruck size={25} className='mr-4' />Orders</li>
              <li className='text-xl py-4 flex items-center'><MdOutlineFavorite size={25} className='mr-4' />Favorites</li>
              <li className='text-xl py-4 flex items-center'><FaWallet size={25} className='mr-4' />Wallet</li>
              <li className='text-xl py-4 flex items-center'><MdHelp size={25} className='mr-4' />Help</li>
              <li className='text-xl py-4 flex items-center'><IoPricetag size={25} className='mr-4' />Promotions</li>
              <li className='text-xl py-4 flex items-center'><BsSave2Fill size={25} className='mr-4' />Best Ones</li>
              <li className='text-xl py-4 flex items-center'><FaUserFriends size={25} className='mr-4' />Invite Friends</li>
            </ul>
          </nav>
          </div>
         
    </div> 
  )
}

export default Navbar