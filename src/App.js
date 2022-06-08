import React from 'react'
import './App.css'
import Header from './component/header/Header'
import Navbar from './component/nav/Navbar'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Experince from './component/experince/Experince'
import Footer from './component/footer/Footer'
import Portfolio from './component/portfolio/Portfolio'
import Services from './component/services/Services'
import Testimonials from './component/testimonials/Testimonials'
const App = () => {
  return (
    <>
     <Header />
     <Navbar />
      <About />
      <Experince />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
   </>
  )
}

export default App