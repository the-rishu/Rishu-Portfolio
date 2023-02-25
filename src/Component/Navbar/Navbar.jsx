import React from 'react'
import './Navbar.css'
import logo from '../../Component/logo.jpg'
import { NavLink } from 'react-router-dom'
import house from '../../Font/house-solid.svg'
import user from '../../Font/user-solid.svg'
import contact from '../../Font/paper-plane-solid.svg'
import skill from '../../Font/code-solid.svg'
import port from '../../Font/folder-solid.svg'

const Navbar = () => {

 let style = {
    color :"black",
    textDecoration:"none",
    fontSize:"20px",
}

  return (
   <>
        <div className='header-div'>
            <div className='logo-div'> 
                  <img src={logo} alt=""  className='logo'/>  
            </div>
            <div className='nav-bar'>
                <ul className="nav-list">
                    <li className="nav-item"><NavLink to="/" style={({isActive}) => (style)}>Home</NavLink></li>

                    <li className="nav-item"><NavLink 
                    style={({isActive}) => (style)}to='about'>About</NavLink></li>

                    <li className="nav-item"><NavLink style={({isActive}) => (style)}to="skill">Skill</NavLink></li>

                    <li className="nav-item"><NavLink style={({isActive}) => (style)}to="portfolio">Portfolio</NavLink></li>

                    <li className="nav-item"><NavLink style={({isActive}) => (style)}to="contact">Contact</NavLink></li>
                </ul>
            </div>
        </div>
            {/* Mobile navbar */}
            <div className="nav-icon">
                <ul className='icon-list'>
                    <li>
                        <NavLink to="/"><img src={house} alt="" className='mobile-icon' /></NavLink>
                    </li>
                    <li>
                        <NavLink to='about'><img src={user} alt="" className='mobile-icon' /></NavLink>
                    </li>
                    <li>
                        <NavLink to="skill"><img src={skill} alt="" className='mobile-icon' /></NavLink>
                    </li>
                    <li>
                        <NavLink to="portfolio"><img src={port} alt="" className='mobile-icon' /></NavLink>
                    </li>
                    <li>
                        <NavLink to="contact"><img src={contact} alt="" className='mobile-icon' /></NavLink>
                    </li>
                </ul>
            </div>
   </>
  )
}

export default Navbar