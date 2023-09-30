import React from 'react'
import "./Project.css"
import github from "../Assets/github.png"
export default function Project({project}) {
  return (
    <div className="project">
    <h3>{project.title}</h3>
    <p>
     {project.description}
       
    </p>
 <a href={project.githubURL}>
         <img style={{width:40}} src={github} />

        </a>
    </div>
  )
}
