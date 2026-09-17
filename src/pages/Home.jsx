import React from 'react'
import Hero from '../componenets/Hero'
import LatestCollection from '../componenets/LatestCollection'
import BestSeller from '../componenets/BestSeller'
import OurPolicy from '../componenets/OurPolicy'
import Newsletter from '../componenets/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <Newsletter />
    </div>
  )
}

export default Home
