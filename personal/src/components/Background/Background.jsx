import React from 'react'; 
import "./Background.css"; 
import {topF, bottomF} from "../../assets/index.js"; 

const Background = () => {
  return (
    <>
         <div className="border">
            <img src={topF} className='top'></img>
            <img src={bottomF} className='bottom'></img>
         </div>
    </>
  )
}

export default Background