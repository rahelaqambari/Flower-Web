import React from 'react'
import Navbar from '../Componnents/Navbar'
import HeroTeam from '../Componnents/HeroTeam'
import Instagram from '../Componnents/Instagram'
import Footer from '../Componnents/Footer'
import OurTeam from '../Componnents/OurTeam'
import SomeQuotes from '../Componnents/SomeQuotes'

function Team() {
  return (
    <div>
      <Navbar/>
      <HeroTeam/>
      <OurTeam/>
      <SomeQuotes/>
      <Instagram/>
      <Footer/>
    </div>
  )
}

export default Team