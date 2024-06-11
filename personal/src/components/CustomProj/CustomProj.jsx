import React from 'react'
import "./CustomProj.css"

const CustomProj = ({text, title, link, image, pos}) => {
const containerClass = pos === 'right' ? 'right' : 'left';
console.log(containerClass); 
  return (
    <>
    <div className={containerClass}>
    <div className='text'>
        <div className='title'>
        <h1 style={{fontFamily: 'Piazzolla, serif', fontSize: '40px', fontWeight: 'bold'}}>{title}</h1>
        </div>
        <div className='cont'>
        <p style={{fontFamily: 'Piazzolla, serif', fontSize: '20px', fontWeight: 'normal'}}>{text}</p>
        </div>
        <a href={link} className='link' style={{fontFamily: 'Piazzolla, serif', fontSize: '20px', fontWeight: 'normal'}}>Source Code</a>
    </div>
    <img src={image} className='image' draggable='false'></img>
    </div>
    </>
  )
}

export default CustomProj