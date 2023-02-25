import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Skill from './Pages/Skill/Skill';
import Portfolio from './Pages/Portfolio/Portffolio'
import Contact from './Pages/Contact/Contact'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<App/>}>
          <Route path='/' element={<Home/>} />
          <Route path="about" element={<About/>}/>
          <Route path="skill" element={<Skill/>}/>
          <Route path="portfolio" element={"/portfolio"?<Portfolio/> : <Navigate to={"expense-tracker-the-rishu.vercel.app"}  replace/>} />
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
   </BrowserRouter>

   </>
);

