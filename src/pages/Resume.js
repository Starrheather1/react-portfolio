import React from 'react'
import resume from "../Assets/resume.docx"
import "./resume.css"
export default function() {
  return (
    <div className="resume">
       <p>
        Thank you for visiting my portfolio , you can have a copy of my resume <a href={resume} download>here</a>
       </p>
       




    </div>
  )
}
