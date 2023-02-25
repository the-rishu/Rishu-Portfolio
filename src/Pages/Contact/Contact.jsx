import React from 'react'
import './Contact.css'
import { NavLink } from 'react-router-dom'
import github from '../../Font/github.svg'
import instagram from '../../Font/instagram.svg'
import linkedin from '../../Font/linkedin.svg'
import facebook from '../../Font/facebook.svg'

const Contact = () => {
  
  return (
    <>
      <div className='contact-page'>
        <h1>Contact ME!</h1>
        <hr />
        <form>
          <div className='form-div'>
            <input type="text" placeholder='Name'/><br />
            <input type="email" placeholder='Email' /><br />
            <input type="text" placeholder='Mobile' /><br />
            <textarea cols="32" rows="5" placeholder='Query'></textarea><br />
          </div>
        </form>
          
        <div className='send-btn'>
          <input type="submit" value="Send" />
        </div>

        <div className='contact-footer'>
          <ul>
            <li  className='contact-item'><NavLink to={"https://www.linkedin.com/in/rishu-kumar-gupta-74a0b0207/"} target="_blank"><img src={linkedin} alt="" className='footer-icon'/></NavLink></li>
            <li  className='contact-item'><NavLink ><img src={facebook} alt="" className='footer-icon'/></NavLink></li>
            <li  className='contact-item'><NavLink ><img src={instagram} alt="" className='footer-icon'/></NavLink></li>
            <li  className='contact-item'><NavLink to={"https://github.com/the-rishu"} target="_blank"><img src={github} alt="" className='footer-icon' /></NavLink></li>
          </ul>
        </div> 

    </div>
    </>
  )
}

export default Contact