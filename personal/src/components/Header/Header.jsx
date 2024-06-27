import React, {useState, useEffect } from 'react'; 
import "./Header.css"; 
import { recback, exp, rec3, rec4, pallete} from '../../assets';
import { useTypewriter } from 'react-simple-typewriter'

const Header = () => { 
  const [loopComplete, setLoopComplete] = useState(false);
  const [text, count] = useTypewriter({
    words: ['a student', 'an engineer', 'an artist', 'Monisha!'],
    loop: false,
    onLoopDone: () => setLoopComplete(true)
  })

  useEffect(() => {
    if (loopComplete) {
      setFinalText('Monisha!');
    }
  }, [loopComplete]);

  const [finalText, setFinalText] = useState('');

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
                      Hi, I am {finalText || text}
                  </span>
                  </div>
                  <div className='blurb'>
                  <h1 style={{fontFamily: 'Piazzolla, serif', fontSize: '20px', fontWeight: 'normal', textAlign: 'center'}}>
                  Welcome to my personal website! I’m Monisha, an incoming sophomore at UPenn studying computer science and economics. Come explore my journey through code! Click on the below icons to look through my projects, art, and background.
                  </h1>
                  </div>
                <div className='buttons'>
                  <button onClick={handleRec3}>
                   <img src={rec3}></img>
                   <div className='button-text'>
                   <p style={{fontFamily: 'Piazzolla, serif', fontSize: '20px', fontWeight: 'normal', textAlign: 'center'}}>Projects</p>
                   </div>                   
                   </button>
                  <button onClick={handleRec2}>
                  <img src={pallete}></img>
                  <div className='button-text'>
                  <p style={{fontFamily: 'Piazzolla, serif', fontSize: '20px', fontWeight: 'normal', textAlign: 'center'}}>Art</p>
                  </div>
                  </button>
                  <button onClick={handleRec4}>
                  <img src={rec4}></img>
                  <div className='button-text'>
                  <p style={{fontFamily: 'Piazzolla, serif', fontSize: '20px', fontWeight: 'normal', textAlign: 'center'}}>About</p>
                  </div>
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
  window.location.href = '/art'
}

function handleRec4() {
  window.location.href = '/about'
}

export default Header