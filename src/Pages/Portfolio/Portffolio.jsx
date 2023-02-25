import React from 'react'
import Portfoliocomponent from '../../Component/Portfoliocomp/Portfoliocomponent'
import './Portfolio.css'

const Portffolio = () => {
  return (
    <>
        <div className='portfolio-page'>
          <h1>PortFolio</h1>
          <hr />
          <div className="portfolio-section">
            <Portfoliocomponent 
                pname = "Expense Tracker" 
                line1="It is fronted responsive dynamic website ."
                line2="It is used to maintain  expenses send on thing."
                line3="Technology : HTML , CSS, JS, ReactJs ."
                url = "https://expense-tracker-the-rishu.vercel.app/"
            />
             <Portfoliocomponent 
                pname = "Shopmart Website" 
                line1="It is frontend responsive project ."
                line2="It is Landing Page of an E-Commerce Website ."
                line3="Technology : HTML , CSS, JS ."
                url = "https://shopmart-the-rishu.vercel.app/"
            />
             { <Portfoliocomponent 
                pname = "Music Website" 
                line1="It is fronted website only for desktop supportable."
                line2="It is Landing page with stylish UI."
                line3="Technology : HTML , CSS, ReactJs ."
                url = "https://music-website-the-rishu.vercel.app/"
            /> }
          </div>
        </div>
    </>
  )
}

export default Portffolio