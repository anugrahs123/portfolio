import React from 'react'
import { Link } from 'react-scroll'
import './About.css'

function About() {
  return (
    <div className='about'>
        <div className='about_content'>
            <h1>About</h1>
            <h1>Mr. P</h1>
            <p>  Web</p>
            <a href='www.google.com'>
                <button className='topContent__downloadButton'>Download CV</button>
            </a>
            <br />
            <br />
            <Link to='main'>

            <a href='www.google.com'>
                <button className='topContent__downloadButton1'>Academic qualifications </button>
            </a>
            </Link>

          
      
        </div>
    </div>
  )
}

export default About