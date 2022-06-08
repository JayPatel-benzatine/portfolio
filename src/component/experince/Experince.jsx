import React from 'react'
import './Experince.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Experince = () => {

  return (
    <section id='experince'>
      <h5>What Skill I have</h5>
      <h2>My Experince</h2>

      <div className="container experince_conatiner">
        <div className="experince_frontend">
          <h3>Frontend Development</h3>
          <div className="experince_content">
            <article className='experince_details'>
              <BsPatchCheckFill className='icon' />
              <div className="">
                <h4>HTML</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experince_details'>
              <BsPatchCheckFill className='icon' />
              <div className="">
              <h4>CSS</h4>
              <small className='text-light'>Inetrmediate</small>
              </div>
            </article>
            <article className='experince_details'>
              <BsPatchCheckFill className='icon' />
              <div className="">
              <h4>Javascript</h4>
              <small className='text-light'>Expericne</small>
              </div>
            </article>

            <article className='experince_details'>
              <BsPatchCheckFill className='icon' />
              <div className="">
              <h4>Bootstrap</h4>
              <small className='text-light'>Expericne</small>
              </div>
            </article>

            <article className='experince_details'>
              <BsPatchCheckFill className='icon' />
              <div className="">
              <h4>
                Tailwind</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experince_details'>
              <BsPatchCheckFill className='icon' />
              <div className="">
              <h4>
                React</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experince_backend">
          <h3>Backtend Development</h3>
          <div className="experince_content">
            <article className='experince_details'>
              <BsPatchCheckFill className='icon' />
              <div className="">
              <h4>NodeJS</h4>
              <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experince_details'>
              <BsPatchCheckFill className='icon' />
              <div className="">
              <h4>Mongodb</h4>
              <small className='text-light'>Inetrmediate</small>
              </div>
            </article>
            <article className='experince_details'>
              <BsPatchCheckFill className='icon' />
              <div className="">
              <h4>Django</h4>
              <small className='text-light'>Expericne</small>
              </div>
            </article>

            <article className='experince_details'>
              <BsPatchCheckFill className='icon' />
              <div className="">
              <h4>PHP</h4>
              <small className='text-light'>Expericne</small>
              </div>
            </article>

            <article className='experince_details'>
              <BsPatchCheckFill className='icon' />
              <div className="">
              <h4>
                MySql</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experince