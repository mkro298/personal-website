import React from 'react'
import "./CustomProj.css"

const CustomProj = ({text, title, link, image}) => {
  return (
    <>
    <div className='container'>
    <p>{title}</p>
    <p>{text}</p>
    <a href={link} className='link'>Github Link</a>
    <img src={image} className='image'></img>
    </div>
    </>
  )
}

export default CustomProj