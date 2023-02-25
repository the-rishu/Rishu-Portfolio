import React from 'react'
import './Skillcomponent.css'
const Skillcomponent = (props) => {
  return (
    <>
        <div className="skill-bar">
          <label>{props.title}</label>
          <div className="status">
            <div className="status-bar" style={{
                width:props.length
            }}></div>
          </div>
        </div>
    </>
  )
}

export default Skillcomponent