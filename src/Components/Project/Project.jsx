import React from 'react'
import { Element } from 'react-scroll'

function Project({title,link,nec}) {
  console.log(title);
  console.log(link);
  console.log(nec);
  return (
      <Element id='project'>

    <div style={{height:"1000px",width:"100%",backgroundColor:"red"}}>
        <h1>project</h1>
        
        <h1>{title}</h1>
        <h5>{link}</h5>
        <h1>Projects</h1>
        <p>Here Are Some Projects Which I done for making Lives of People Easy</p>
        <h1>Projects</h1>
        <p>Here Are Some Projects Which I done for making Lives of People Easy</p>
        <h1>Projects</h1>
        <p>Here Are Some Projects Which I done for making Lives of People Easy</p>
        <h1>Projects</h1>
        <p>Here Are Some Projects Which I done for making Lives of People Easy</p>
        

        



    </div>
      </Element>
  )
}

export default Project