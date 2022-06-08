import React from 'react'
import './Testimonials.css'
import avtar1 from '../../assets/avatar1.jpg'
import avtar2 from '../../assets/avatar2.jpg'
import avtar3 from '../../assets/avatar3.jpg'
import avtar4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        <SwiperSlide className='testimonial'>
          <div className="client_avatar">
            <img src={avtar1} alt="" />
          </div>
          <h5 className='client_name'>Ernest Achiver</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, harum.
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client_avatar">
            <img src={avtar2} alt="" />
          </div>
          <h5 className='client_name'>Ernest Achiver</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, harum.
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client_avatar">
            <img src={avtar3} alt="" />
          </div>
          <h5 className='client_name'>Ernest Achiver</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, harum.
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client_avatar">
            <img src={avtar4} alt="" />
          </div>
          <h5 className='client_name'>Ernest Achiver</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, harum.
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client_avatar">
            <img src={avtar1} alt="" />
          </div>
          <h5 className='client_name'>Ernest Achiver</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, harum.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials