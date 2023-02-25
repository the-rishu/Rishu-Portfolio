import React from 'react'
import Aboutcomp from '../../Component/AboutComponent/Aboutcomp'
import './About.css'
import Aboutedu from '../../Component/AboutComponent/Aboutedu'
import { Link } from 'react-router-dom'
import Resume from '../Resume.pdf'

const About = () => {
  return (
    <>
      <div className='aboutpage'>
              <h1>About Me</h1>
              <hr />
          <div className='about-section'>
                <div className="about-section1">
                    <Aboutcomp title="Name" value="Rishu Kumar Gupta"/>
                    <Aboutcomp title="Age" value="21"/> 
                    <Aboutcomp title="Mobile No . " value="8130186551"/>
                    <Aboutcomp title="Email Id " value="rishuk261@gmail.com"/>
                    <Aboutcomp title="Address" value="New Delhi, India"/>
                    <Aboutcomp title="Qualification" value="B.Tech"/>
                    <div className='resume'><Link to={Resume} style={{textDecoration:"none",
                  color:"white"}}  download target="_blank">Download Resume</Link></div>
                </div>
                <div className="about-section2">
                    <Aboutedu heading="B.Tech" title="Dronacharya College Of Engineering ,  Gurgaon" course="Computer Science and Engineering"  percent="73%" year="2019-2023"/>
                      <hr />
                    <Aboutedu heading="Higher Secondary School" title="Shri Daulat Ram Public Sr. Sec. School,Delhi" course="CBSE"  percent="76%" year="2017-2018"/>
                    <hr />
                    <Aboutedu heading="Senior Secondary School" title="Shri Daulat Ram Public Sr. Sec. School,Delhi" course="CBSE"  percent="74%" year="2015-2016"/>

                </div>
          </div>
      </div>
    </>
  )
}

export default About