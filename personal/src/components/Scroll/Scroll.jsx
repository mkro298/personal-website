import React, { useEffect } from 'react';
import "./Scroll.css";
import CustomProj from '../CustomProj/CustomProj';
import {lc4, game} from '../../assets'

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
            <section className='hidden'><CustomProj text={"Built a disassembler in C that takes machine code and reverse assembles it to assembly language code. Took  a .obj file and parsed through contents to extract and store code/data sections and corresponding PC addresses. Parsed through extracted code and translated binary to assembly code based on the LC4 ISA instructions to produce a .asm file."} 
            title={"LC4 Disassembler"} link={"https://github.com/mkro298/lc4Dissasembler"} image={lc4} pos={'left'}/></section>

            <section className='hidden'><CustomProj text={"Built a clone of the game 2048 using Java for backend and frontend. Improved game functionality by adding an undo move button that allowed the user to return to all their previous moves."} 
            title={"2048 Clone"} link={"https://github.com/mkro298/2048"} image={game} pos={'right'}/></section>
        </>
    );
};

export default Scroll;
