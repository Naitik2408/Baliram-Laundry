import React from 'react'
import Hero from '../components/home/Hero'
import Service from '../components/home/Service'
import About from '../components/home/About'
import Pricing from '../components/home/Pricing'
import Testmonial from '../components/home/Testmonial'
import Footer from '../components/Footer'
import FAQ from '../components/home/FAQ'

function Home() {
  return (
    <div className='bg-stone-50 text-stone-900'>
        <Hero/>
        <Service/>
        <About/>
        <Pricing/>
        <Testmonial/>
        <FAQ/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home