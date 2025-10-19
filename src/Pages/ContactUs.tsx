import React from 'react'
import Navbar from '../Componnents/Navbar'
import HeroContact from '../Componnents/HeroContact'
import Contuct from '../Componnents/Contuct'
import OurStore from '../Componnents/OurStore'
import Instagram from '../Componnents/Instagram'
import Footer from '../Componnents/Footer'

function ContactUs() {
  return (
    <div>
      <Navbar/>
      <HeroContact/>
      <Contuct/>
      <OurStore/>
      <Instagram/>
      <Footer/>
    </div>
  )
}

export default ContactUs