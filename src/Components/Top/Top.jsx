import React from 'react'
import { Element } from 'react-scroll'
import About from '../About/About'
import './Top.css'

function Top() {
  return (
    <div className='aboutONe'>
        <Element name='about' >
            <About/>
        </Element>
    </div>
  )
}

export default Top