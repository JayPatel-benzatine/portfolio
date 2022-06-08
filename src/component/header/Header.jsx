import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I`m</h5>
        <h1>Jay Patel</h1>
        <h5 className='text-light'>Front-end-developer</h5>
        <CTA />
        <HeaderSocial />
          <div className="me">
            <img src={Me} alt="" />
          </div>
          <a href="#contact" className='Scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header