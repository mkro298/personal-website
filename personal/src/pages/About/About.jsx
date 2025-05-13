import React from 'react'
import { Nav, Background} from '../../components'
import {prof, rec2, rec1, em, link, res, aboutback} from '../../assets'
import './About.css'


const About = () => {
  const email = "monishak@seas.upenn.edu";
  return (
    <>
    <Background />
    <img src={aboutback} className='aboutback'></img>
    <div className='about-cont'>
    <div className='pic'>
      <img src={prof} draggable='fasle'></img>
    </div>
    <div className='rightside'>
    <div className='chunks'>
      <div>
      <p style={{fontFamily: 'Piazzolla, serif', fontSize: '20px', fontWeight: 'bold'}}>Monisha Krothapalli</p>
      <p style={{fontFamily: 'Piazzolla, serif', fontSize: '20px', fontWeight: 'normal'}}>I am a CIS undergraduate student at UPenn, concentrating in AI. I’m passionate about using AI and its implications to reshape our world. I primarily have experience with Java, Python, and C but also work with numerous other languages and frameworks. I am always eager to learn and explore new opportunities in software development and AI and to expand my skill set. Please feel free to contact me to connect or discuss potential collaborations! </p>
      </div>
      <div className='education'>
      <p style={{fontFamily: 'Piazzolla, serif', fontSize: '17px', fontWeight: 'bold'}}>Education</p>
        <p style={{fontFamily: 'Piazzolla, serif', fontSize: '17px', fontWeight: 'normal'}}>University of Pennsylvania - Aug 2023 - May 2027 (Expected)</p>
        <p style={{fontFamily: 'Piazzolla, serif', fontSize: '17px', fontWeight: 'normal'}}>Bachelor of Science in Engineering (B.S.E.), Computer Science </p>
        <p style={{fontFamily: 'Piazzolla, serif', fontSize: '17px', fontWeight: 'normal'}}>Relevant Courses: Data Structures and Algorithms, Operating Systems, Linear Algebra, Statistics, Applied ML</p>
      </div>
      <div className='contact'>
      <a href={res} target="_blank" >
      <button>
          <img src={rec2}></img>
          <p style={{fontFamily: 'Piazzolla, serif', fontSize: '13px', fontWeight: 'normal'}}>Resume</p>
        </button>
      </a>
        <button onClick={handleGit}>
         <img src={rec1}></img>
         <p style={{fontFamily: 'Piazzolla, serif', fontSize: '13px', fontWeight: 'normal'}}> Github</p>
        </button>
        <button onClick={handleLink}>
          <img src={link}></img>
          <p style={{fontFamily: 'Piazzolla, serif', fontSize: '13px', fontWeight: 'normal'}}>LinkedIn</p>
        </button>
        <a href={`mailto:${email}`}>
        <button>
          <img src={em}></img>
          <p style={{fontFamily: 'Piazzolla, serif', fontSize: '13px', fontWeight: 'normal'}}>Email</p>
        </button>
         </a>
    </div>
    </div>
    </div>
    </div>

    <Nav />
    </>
  )

  function handleGit() {
    window.open('https://github.com/mkro298', '_blank')
  }
  
  function handleLink() {
    window.open('https://www.linkedin.com/in/monisha-krothapalli/', '_blank')
  }
  
}

export default About