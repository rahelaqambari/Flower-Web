import React from 'react'
import Navbar from '../Componnents/Navbar'
import Instagram from '../Componnents/Instagram'
import Footer from '../Componnents/Footer'
import LatestNews from '../Componnents/LatestNews'
import FaqCom from '../Componnents/FaqCom'
import Testemonial from '../Componnents/Testemonial'
import Herofaq from '../Componnents/Herofaq'

function Faq() {
  return (
    <div>
      <Navbar/>
      <Herofaq/>
      <FaqCom/>
      <Testemonial/>
      <LatestNews/>
      <Instagram/>
      <Footer/>
    </div>
  )
}

export default Faq