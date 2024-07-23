import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
// import Category from '../../components/Category/Category'
import { useState } from 'react'
import HeadlineCards from '../../components/HeadlineCards/HeadlineCards'
import Food from '../../components/Food/Food'

const Home = () => {
  // const [foodCategory, setFoodCategory] = useState("all")
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HeadlineCards/>
        <Food/>
        {/* <Category foodCategory={foodCategory} setFoodCategory={setFoodCategory}/> */}
    </div>
  )
}

export default Home