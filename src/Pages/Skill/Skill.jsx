import React from 'react'
import Skillcomponent from '../../Component/Skillcomp/Skillcomponent'
import './Skill.css'

const Skill = () => {
  return (
    <>  
       <div className='skillpage'>
          <h1 className='skill-heading'>Skills</h1>
          <hr />
          <div className='skillsection'>
              <div className='skill-part1'>
                <Skillcomponent title="CPP" length="90%"/>
                <Skillcomponent title="C"  length="90%"/>
                <Skillcomponent title="OOPS" length="80%"/>
                <Skillcomponent title="DSA" length="80%"/>
                <Skillcomponent title="DBMS" length="77%"/>
                <Skillcomponent title="MySql" length="82%"/>
              </div>
      
              <div className='skill-part2'>
               <Skillcomponent title="HTML" length="90%"/>
                <Skillcomponent title="CSS" length="77%"/>
                <Skillcomponent title="JavaScript" length="85%"/>
                <Skillcomponent title="React" length="70%"/>
              </div>
          </div>
       </div>
    </>
  )
}

export default Skill