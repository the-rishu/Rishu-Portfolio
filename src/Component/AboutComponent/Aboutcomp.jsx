import React from 'react'
import './Aboutcomp.css'
const Aboutcomp = (props) => {
  return (
   <>
        <div className='detail'>
            <span> {props.title} : </span>
            <span> {props.value}</span>
        </div>
   </>
)
}

export default Aboutcomp