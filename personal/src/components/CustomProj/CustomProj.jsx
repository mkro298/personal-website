import React from 'react'
import "./CustomProj.css"

const CustomProj = ({text, title, link, image, pos, but}) => {
const containerClass = pos === 'right' ? 'right' : 'left'; 
console.log(but); 
  return (
    <>
    <div className={containerClass}>
    <div className='text'>
        <div className='title'>
        <h2 style={{fontFamily: 'Piazzolla, serif', fontSize: '40px', fontWeight: 'normal'}}>{title}</h2>
        </div>
        <div className='cont'>
        <p style={{fontFamily: 'Piazzolla, serif', fontSize: '20px', fontWeight: 'normal'}}>{text}</p>
        </div>
        <a target="_blank" href={link} className='link' style={{fontFamily: 'Piazzolla, serif', fontSize: '20px', fontWeight: 'normal'}}>{but}</a>
    </div>
    <img src={image} className='image' draggable='false'></img>
    </div>
    </>
  )
}

export default CustomProj 