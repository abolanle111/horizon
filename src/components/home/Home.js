import React from 'react'
import Book from './Book'
import  Carousel  from './Carousel'
import About from './About'
import Room from './Room'
import Service from './Service'
// import Slider from './Slider'
import Team from './Team'

const Home = () => {
  return (
    <>
    <Carousel />
    <Book />
    <About />
    <Room />
    <Service />
    {/* <Slider /> */}
    <Team />
    </>
  )
}

export default Home