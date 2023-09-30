import React from 'react'
import Project from '../components/Project'
import "./Portfolio.css"

const projects=[
    {
        id:1,
        title:"project1",
        description:"description1",
  
        githubURL:""

    },
    {
        id:2,
        title:"project1",
        description:"description1",
    
        githubURL:""
    },
    {
        id:3,
        title:"project1",
        description:"description1",
       
        githubURL:""
    },
    {
        id:4,
        title:"project1",
        description:"description1",
        
        githubURL:""

    },
    {
        id:5,
        title:"project1",
        description:"description1",
       
        githubURL:""

    },

    {
        id:6,
        title:"project1",
        description:"description1",
       
        githubURL:""

    }
]

export default function Portfolio() {
  return (
    <div className="portfolio">
        {projects.map(project=>{
            return  <Project project={project}/>
        })}

    </div>
  )
}
