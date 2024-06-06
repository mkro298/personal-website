import React from 'react'; 
import "./Header.css"; 
import { recback, text, rec1, rec2, rec3} from '../../assets';

const Header = () => {
  return (
    <div>
        <div className='wrapper'>
            <div className='container'>
                <div className='overlap'>
                <img src={text}></img>
                <div className='buttons'>
                  <button onClick={handleRec1}>
                  <img src={rec1}></img>
                  </button>
                  <button onClick={handleRec3}>
                   <img src={rec3}></img>
                   </button>
                  <button onClick={handleRec2}>
                  <img src={rec2}></img>
                  </button>
                </div>
                </div>
                <img src={recback}></img>
            </div>
        </div>
    </div>
  )
}
function handleRec1() {
  window.location.href = '/projects'
}

function handleRec2() {
  window.location.href = '/resume'
}

function handleRec3() {
  window.location.href = '/solutions'
}

export default Header