import API from '@/Componnents/API'
import Footer from '@/Componnents/Footer'
import Heronews from '@/Componnents/Heronews'
import Instagram from '@/Componnents/Instagram'
import Navbar from '@/Componnents/Navbar'

function News() {
  return (
    <div>
      <Navbar />
      <Heronews />
      <API />
      <Instagram />
      <Footer />
    </div>
  )
}

export default News
