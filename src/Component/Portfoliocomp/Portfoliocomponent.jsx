import React from 'react'
import './Portfoliocomponent.css'
import { Link } from 'react-router-dom'
const Portfoliocomponent = (props) => {
  return (
    <>
        <div className='web'>
            <div className='web-desc'>
                <h1>{props.pname}</h1>
                <ul>
                    <li>{props.line1}</li>
                    <li>{props.line2}</li>
                    <li>{props.line3}</li>
                </ul>
            </div>
            <div className='web-link'>
                <Link  to={props.url} style={{
                    color:"white",
                    textDecoration:"none",
                    fontSize:"20px",
                }} target="_blank">Visit</Link>
            </div>
        </div>
    </>
  )
}

export default Portfoliocomponent