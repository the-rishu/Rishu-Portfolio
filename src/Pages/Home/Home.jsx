import React from 'react'
import profile from '../../Component/Profile.png'
import './Home.css'

const Home = () => {
  return (
   <>
        <div className="homepage">
        <div className='home-section-1'>
              <p>Hi, </p>
              <p>I'm Rishu Kumar Gupta.<br /> I am <b>Aspiring Software Engineer</b> and<br /> aiming to use  my skill in real world application </p>
          </div>
        <div className='home-section-2'>
              <img src={profile} alt="" />
          </div>
          
         
        </div>
   </>
  )
}

export default Home