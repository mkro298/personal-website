import React, { useEffect } from 'react';
import "./Scroll.css";
import CustomProj from '../CustomProj/CustomProj';
import {lc4, game, bot, brush, kiki, paper, water} from '../../assets'

const Scroll = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show'); 
                } else {
                    entry.target.classList.remove('show'); 
                }
            }); 
        }); 
        const hiddenElem = document.querySelectorAll(".hidden"); 
        hiddenElem.forEach((el) => observer.observe(el));

        return () => {
            hiddenElem.forEach((el) => observer.unobserve(el));
        };
    }, []); 

    return (
        <>
            <section className='hidden'><CustomProj text={"Built a disassembler in C that takes machine code and reverse assembles it to assembly language code. The program works by taking  a .obj file and parsing through contents to extract and store the  code/data sections and their PC addresses. The extracted code is then parsed through and the binary instructions for each line of code are broken down to be categorized into a type of assembly instruction. These instructions are translated into assembly code based on the LC4 ISA instructions, which are then compiled into one .asm file which can be run through an assembler and run as intended by the original file."} 
            title={"LC4 Disassembler"} link={"https://github.com/mkro298/lc4Dissasembler"} image={lc4} pos={'left'} but={'Source Code'}/></section>

            <section className='hidden'><CustomProj text={"Built a clone of the game 2048 using Java to develop the backend and the GUI. I replicated all the features of the original game, and improved upon the game functionality by adding an undo move button that allowed the user to return to all their previous moves, up until the first move played."} 
            title={"2048 Clone"} link={"https://github.com/mkro298/2048"} image={game} pos={'right'} but={'Source Code'}/></section>

            <section className='hidden'><CustomProj text={"Built a Textbot in Java using a Markov’s Chain model trained on a series of tweets that can generate a tweet/block of text of an inputted desired length. I took a file of tweets, cleaned for training, and used it to map the probability distribution of adjacent words. The probability distribution was then used in the text generation process to pick the next word based on the start word in the sequence until a tweet of desired length was generated."} 
            title={"TextBot"} link={"https://github.com/mkro298/TextBot"} image={bot} pos={'left'} but={'Source Code'}/></section>

            <section className='hidden'><CustomProj text={"Built a beginner friendly programming language called Brush for users to create easy digital art with a team of 4 other students. We used Rust on the backend to build an interpreter and compiler for the Brush syntax that we designed and built a frontend for  users to practice writing and running code in our language and view their designs immediately."} 
            title={"Brush"} link={"https://github.com/mkro298/Brush"} image={brush} pos={'right'} but={'Source Code'}/></section>

            <section className='hidden'><CustomProj text={"Built a video game using C# called Kiki, a re-imaged and modern version of the game Kiby’s adventure. Worked in a team of 5 students to develop the game using the Minimalist Game Development Framework with improved storytelling and visuals. We designed our own assets, storyline, and player-game dynamics using the MDA framework."} 
            title={"Kiki"} link={"https://github.com/mkro298/kiki-s-adventure-game"} image={kiki} pos={'left'} but={'Source Code'}/></section>

            <section className='hidden'><CustomProj text={"Conducted an engineering research project on utilizing constructed wetlands for treating polluted water pertaining from agricultural runoff and built a prototype wetland that was able to decrease levels of key pollutants by 49.15% on average. Conducted literature reviews and analyzed existing technologies related to research topics and to write a research paper which won multiple awards including the Washington State Junior Stockholm Water Prize."} 
            title={"Independent Research Project"} link={paper} image={water} pos={'right'} but={'Research'}/></section>
        </>
    );
};

export default Scroll;
