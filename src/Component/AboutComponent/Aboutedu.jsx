import React from 'react'
import './Aboutedu.css'
const Aboutedu = (props) => {
  return (
   <>
        <div className="educationpart">
            <span>{props.heading} :</span>
            <div className='edutitle'>
                <span>{props.title}</span>
                <span>{props.year}</span>
            </div>
            <div className='edutitle'>
                <span>{props.course}</span>
                <span>{props.percent}</span>
            </div>
        </div>
   </>
  )
}

export default Aboutedu