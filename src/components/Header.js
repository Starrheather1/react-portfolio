import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"
import { useState } from 'react'

export default function Header() {
   const [active,setActive]=useState("about")
  return (
    <header>
     <nav>
       <Link>Heather</Link>
      <ul className="navbar">
         
         <li className={active=="about"?"active":""}>
            <Link to="/" onClick={()=>{setActive("about")}}>About Me</Link>
         </li>
         <li className={active=="portfolio"?"active":""}>
            <Link to="/portfolio" onClick={()=>{setActive("portfolio")}}>Portfolio</Link>
         </li>
         <li className={active=="contact"?"active":""}>
            <Link to="/contact" onClick={()=>{setActive("contact")}}>Contact</Link>
         </li>
         <li className={active=="resume"?"active":""}>
            <Link  to ="/resume" onClick={()=>{setActive("resume")}}>
               Resume
            </Link>
         </li>
      </ul>


     </nav>


    </header>
  )
}
