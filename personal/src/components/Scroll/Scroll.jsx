import React, { useEffect } from 'react';
import "./Scroll.css";
import CustomProj from '../CustomProj/CustomProj';
import {lc4, dys, brush, kiki, paper, water, mix, tt, fl} from '../../assets'

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
            <div className='text-top'>
            <p style={{fontFamily: 'Piazzolla, serif', fontSize: '30px', fontWeight: 'normal'}}> Scroll down to view all projects</p>
            </div>
            <div className='proj'>
            <section className='hidden'><CustomProj text={"Conducted an engineering research project on utilizing constructed wetlands for treating polluted water pertaining from agricultural runoff and built a prototype wetland that was able to decrease levels of key pollutants by 49.15% on average. Conducted literature reviews and analyzed existing technologies related to research topics and to write a research paper which won multiple awards including the Washington State Junior Stockholm Water Prize."} 
            title={"Independent Research Project"} link={paper} image={water} pos={'left'} but={'Research'}/></section>

            <section className='hidden'><CustomProj text={"Built a video game using C# called Kiki, a re-imaged and modern version of the game Kiby’s adventure. Worked in a team of 5 students to develop the game using the Minimalist Game Development Framework with improved storytelling and visuals. We designed our own assets, storyline, and player-game dynamics using the MDA framework."} 
            title={"Kiki"} link={"https://github.com/mkro298/kiki-s-adventure-game"} image={kiki} pos={'right'} but={'Source Code'}/></section>

            <section className='hidden'><CustomProj text={"Built a beginner friendly programming language called Brush for users to create easy digital art with a team of 4 other students. We used Rust on the backend to build an interpreter and compiler for the Brush syntax that we designed and built a frontend for  users to practice writing and running code in our language and view their designs immediately."} 
            title={"Brush"} link={"https://github.com/mkro298/Brush"} image={brush} pos={'left'} but={'Source Code'}/></section>

            <section className='hidden'><CustomProj text={"Built a disassembler in C that takes machine code and reverse assembles it to assembly language code. The program works by taking  a .obj file and parsing through contents to extract and store the  code/data sections and their PC addresses. The extracted code is then parsed through and the binary instructions for each line of code are broken down to be categorized into a type of assembly instruction. These instructions are translated into assembly code based on the LC4 ISA instructions, which are then compiled into one .asm file which can be run through an assembler and run as intended by the original file."} 
            title={"LC4 Disassembler"} link={"https://github.com/mkro298/lc4Dissasembler"} image={lc4} pos={'right'} but={'Source Code'}/></section>

            <section className='hidden'><CustomProj text={"Developed a recommendation engine that generates a playlist of recommended songs based on a user-selected track. Used the Spotify API to comb through the Spotify song database to find songs that the user searches for and to authenticate the access token which allows the program to make changes to the users Spotify dashboard. Used content-based filtering with Flask on the backend to identify 20 similar songs based on genre and atmosphere, seamlessly adding them to the playlist, which the user can view in their Spotify account."} 
            title={"MixEngine"} link={"https://github.com/mkro298/MixEngine"} image={mix} pos={'left'} but={'Source Code'}/></section>

            <section className='hidden'><CustomProj text={"Created an AI study tool that takes a PDF of a textbook from the user and allows them to select a chapter within the book to be analyzed. Uses the Facebook BART model to summarize the chapter and the text2text generation pipeline to create flippable flashcards based on the text."} 
            title={"TextTrove"} link={"https://github.com/mkro298/TextTrove"} image={tt} pos={'right'} but={'Source Code'}/></section>

            <section className='hidden'><CustomProj text={"Built a web application in collaboration with Casey Family Programs, a national foundation focused on child welfare and foster care, with a small team of college students designed to support youth who recently aged out of the foster care system. The platform works as a social app with verified access for Casey Family Programs alumni to ensure the site stays as a safe place for foster care alumni only. It includes a community forum page that allows real-time social interactions akin to Reddit (posting, commenting, upvoting/downvoting) and encryption algorithms to protect user data and information."} 
            title={"FosterLink"} link={"https://github.com/konankisa/FosterLink"} image={fl} pos={'left'} but={'Source Code'}/></section>

            <section className='hidden'><CustomProj text={"Developed an AI-powered tool to assist K-2nd grade educators with flagging childhood dyslexia through handwriting samples. Trained a neural network for image classification that took students writing samples and flagged them as either containing indicators of dyslexia or not and integrated a chatbot with OpenAI for teachers to create customized lesson plans. Won first place at the Wharton Hack-AI-thon and presented at the 2025 Wharton AI & Analytics Initiative Advisory Board Conference."} 
            title={"Dyscover"} link={"https://github.com/shriyasane/wh-hackaithon-2025"} image={dys} pos={'right'} but={'Source Code'}/></section>

            </div>
        </>
    );
};

export default Scroll;
