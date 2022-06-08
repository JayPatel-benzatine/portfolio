import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine} from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <a href="#" className='scroll_down'>Scroll Down</a>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <RiMessengerLine className='contact_icon'/>
            <h4>Messanger</h4>
            <h5>jay</h5>
            <a href="htpps://m.me/ernest.achiever">Send Message</a>
          </article>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_icon'/>
            <h4>Email</h4>
            <h5>dummy@gmail.com</h5>
            <a href="mailto:dummy@gmail.com">Send Message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_icon'/>
            <h4>whatsapp</h4>
            <h5>+26544981</h5>
            <a href="https://api.whatsapp.com/send?phone=+916351008716">Send Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name="email" placeholder='Your Email' required />
            <textarea name="meassage" rows="7" required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
       
        </form>   
      </div>
    </section>
  )
}

export default Contact