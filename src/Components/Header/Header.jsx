import React from 'react'
import './Header.css'
import {Link} from 'react-scroll'

function Header() {
  return (
    <div className='header'>
       <div className='header_left'>
           <h1>PortFol<span style={{color:"red"}}>io</span></h1>
       </div>
       <div className='header_right' >
           <Link to="about" smooth={true} duration={500}><h4>About</h4></Link>
           <Link to="main"><h4>Main</h4></Link>
           <Link to="project" smooth={true} duration={500}><h4>Project</h4></Link>
       </div>

    </div>
  )
}

export default Header