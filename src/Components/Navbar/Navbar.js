import React from 'react'
import './Navbar.css'
import logoBlack from './assets/logo-black.png'
import logoWhite from './assets/logo-white.png';
import day from './assets/day.png';
import night from './assets/night.png';
import searchBlack from './assets/search-b.png';
import searchWhite from './assets/search-w.png';
const Navbar = ({theme,setTheme}) => {
    const ToggleFc=()=>{
        theme=="light"?setTheme("dark"):setTheme("light");
        console.log("theme",theme);
          }
  return (
    <div className='navbar-container'>
 <div className={`Navbar ${theme}`}>
    <img src={theme=="light"? logoBlack:logoWhite} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>Services</li>
        <li>About</li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img src={theme=="light"?searchWhite:searchBlack } alt="" />
      </div>
      <img src={theme=="light"? night:day} alt="" className="toggle-icon" onClick={()=>ToggleFc()} />
      
    </div>
    </div>
  )
}

export default Navbar
