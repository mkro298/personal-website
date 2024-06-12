import React from 'react'; 
import "./Header.css"; 
import { recback, rec2, rec3, rec4} from '../../assets';
import { useTypewriter } from 'react-simple-typewriter'

const Header = () => { 

  const [text] = useTypewriter({
    words: ['a student', 'an engineer', 'an artist', 'Monisha!'],
    loop: 0
  })

  return (
    <div>
        <div className='wrapper'>
            <div className='box'>
              <div className='headboard'>
                <img src={recback}></img>
              </div>
                <div className='overlap'>
                  <div className='text'>
                  <span style={{ fontFamily: 'Piazzolla, serif', fontSize: '40px' }}>
                      Hi, I am {text}
                  </span>
                  </div>
                  <div className='blurb'>
                  <h1 style={{fontFamily: 'Piazzolla, serif', fontSize: '20px', fontWeight: 'normal', textAlign: 'center'}}>
                  Welcome to my personal website! I’m Monisha, an incoming sophomore at UPenn studying computer science and economics. Come explore my journey through code!
                  </h1>
                  </div>
                <div className='buttons'>
                  <button onClick={handleRec3}>
                   <img src={rec3}></img>
                   </button>
                  <button onClick={handleRec2}>
                  <img src={rec2}></img>
                  </button>
                  <button onClick={handleRec4}>
                  <img src={rec4}></img>
                  </button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
function handleRec3() {
  window.location.href = '/projects'
}

function handleRec2() {
  window.location.href = '/resume'
}

function handleRec4() {
  window.location.href = '/about'
}

export default Header