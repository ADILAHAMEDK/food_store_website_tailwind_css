import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Category from '../../components/Category/Category'
import HeadlineCards from '../../components/HeadlineCards/HeadlineCards'
import Food from '../../components/Food/Food'

const Home = () => {
 
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HeadlineCards/>
        <Food/>
        <Category/>
    </div>
  )
}

export default Home