import React, { useEffect } from 'react';
import "./Scroll.css";
import CustomProj from '../CustomProj/CustomProj';
import {rec1} from '../../assets'

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
            <section className='hidden'><CustomProj text={"Built a disassembler in C that takes machine code and reverse assembles it to assembly language code. Took  a .obj file and parsed through contents to extract and store code/data sections and corresponding PC addresses. Parsed through extracted code and translated binary to assembly code based on the LC4 ISA instructions to produce a .asm file. "} 
            title={"LC4 Disassembler"} link={"https://github.com/mkro298/lc4Dissasembler"} image={rec1}/></section>

        </>
    );
};

export default Scroll;
