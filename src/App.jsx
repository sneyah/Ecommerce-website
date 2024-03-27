import React from 'react'
import Navbar from './sections/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import Categories from './sections/Categories/Categories'
import Shop from './sections/Shop/Shop'
import Deal from './sections/Deal/Deal'
import Blog from './sections/Blog/Blog'
import Footer from './sections/Footer/Footer'

const App = () => {
  return (
   <main className="app">
    <Navbar/>
    <Hero/>
    <Categories/>
    <Shop/>
    <Deal/>
    <Blog/>
    <Footer/>
   </main>
  )
}

export default App
