import React from 'react'
import Project from '../Project/Project'

function Down() {
    let Projects=[
        {
            title:"one",
            link:"link1"
        },
        {
            title:"ontwoe",
            link:"link1"
        },
        {
            title:"three",
            link:"link1"
        }
    ]
    let data={
        case:"KK",
        base:"qw"
    }
  return (
    <div>
        {
            Projects.map((item)=>{
                return(
                    <Project 
                    title={item.title}
                    link={item.link}
                    nec={data.base}
                    />
                )
            })
        }
    </div>
  )
}

export default Down