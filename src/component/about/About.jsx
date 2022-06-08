import React from 'react'
import './About.css'
import Me from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_card">
            <article className='about_cards'>
              <FaAward className='about_icon' />
              <h5>Experince </h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about_cards'>
              <FiUsers className='about_icon' />
              <h5>Clients </h5>
              <small>300+ World-Wide</small>
            </article>
            <article className='about_cards'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects </h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Sapiente qui dolorum atque error voluptatem iste asperiores 
          sequi numquam, voluptas nesciunt culpa delectus sunt ratione 
          sed? Accusantium assumenda sit nostrum eaque?
          </p>

          <a href="#contact" className='btn btn-primary'>Let`s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About