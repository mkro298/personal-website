import React from 'react'
import {home, exp, rec3, rec4, menu, exit} from '../../assets'
import "./Nav.css"
import { useState } from 'react'

const Nav = () => {
    const [open, setOpen] = useState(false); 
    const handleNavigation = (path) => {
        window.location.href = path; 
      };
    
  return (
    <>
    <div className='menu-container'>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
            <img src={open ? exit: menu}></img>
        </div>
        <div className={`dropdown ${open? 'active' : 'inactive'}`} >
            <ul>
                <Drop img = {home} text = {"Home"} onClick={() => handleNavigation("/")}/>
                <Drop img = {rec3} text = {"Projects"} onClick={() => handleNavigation("/projects")}/>
                <Drop img = {exp} text = {"Experience"} onClick={() => handleNavigation("/resume")}/>
                <Drop img = {rec4} text = {"About"} onClick={() => handleNavigation("/about")}/>
            </ul>
        </div>
    </div>
    </>
  )
}

function Drop(props) {
    return (
        <li className='item' onClick={props.onClick}>
            <img src={props.img}></img>
            <a>{props.text}</a>
        </li>
    )
}

export default Nav