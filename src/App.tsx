
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs"
import Protfolio from "./Pages/Protfolio"
import Team from "./Pages/Team"
import Priceng from "./Pages/Priceng"
import Faq from "./Pages/Faq"
import NotFoud from "./Pages/NotFoud"
import News from "./Pages/News"
import SengelNews from "./Pages/SengelNews"

function App() {
  return (
    <div className="App font-enter">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<AboutUs/>}/>
        <Route path="/Protfolio" element={<Protfolio/>}/>
        <Route path="/Team" element={<Team/>}/>
        <Route path="/Priceng" element={<Priceng/>}/>
        <Route path="/Faq" element={<Faq/>}/>
        <Route path="/NotFound" element={<NotFoud/>}/>
        <Route path="/News" element={<News/>}/>
        <Route path="/SengelNews" element={<SengelNews/>}/>
        <Route path="/Contact" element={<ContactUs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App