import React from 'react'
import { Element } from 'react-scroll'
import img from './../../assests/backw.jfif'
import './main.css'
import {LinearProgress} from '@mui/material'
function Main() {
  return (
      <Element id='main'>


    <div className='main' >
        <div className='image_c'>
            <img src={img} alt="" />
        </div>
        <div className='main_Skill'>
            <h2>
              SKILLSET
              </h2>
        <div className='SkillSet' >
          <h5>React</h5>
          <div className='SkillContainer  slide_1'>
            <LinearProgress variant='determinate' value={70}/>

          </div>
        </div>
        <div className='SkillSet' >
          <h5>Angular</h5>
          <div className='SkillContainer slide_2'>
            <LinearProgress variant='determinate' value={90}/>

          </div>
        </div>
        <div className='SkillSet' >
          <h5>Nodejs</h5>
          <div className='SkillContainer slide_3'>
            <LinearProgress variant='determinate' value={80}/>

          </div>
        </div>
    
     
        </div>
    </div>
      </Element>
  )
}

export default Main