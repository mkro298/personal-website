import React, { useRef, useEffect } from 'react';
import { art1, art10, art11, art12, art13, art2, art4, art6, art7, art8, art9 } from '../../assets';
import './Carasoul.css';

const Carasoul = () => {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;

        const handleMouseDown = e => {
            track.dataset.mouseDownAt = e.clientX;
        };

        const handleMouseMove = e => {
            if (track.dataset.mouseDownAt === "0") return;

            const mouseD = parseFloat(track.dataset.mouseDownAt) - e.clientX;
            const maxD = window.innerWidth / 2;
            const p = (mouseD / maxD) * -100;
            const nextPU = parseFloat(track.dataset.prevPercent) + p;
            const nextP = Math.max(Math.min(nextPU, 0), -100);
            track.dataset.p = nextP;
            track.animate({
                transform: `translate(${nextP}%, -50%)`
            }, { duration: 1200, fill: "forwards" }); 

            for (const image of track.getElementsByTagName('img')) {
                image.animate({
                    objectPosition: `${100 + nextP}% center`
                }, { duration: 1200, fill: 'forwards' });
            }
        };

        const handleMouseUp = () => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercent = track.dataset.p;
        };

        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
        <p style={{fontFamily: 'Piazzolla, serif', fontSize: '20px', fontWeight: 'normal', textAlign: 'center'}}>
                  Feel free to scroll through by dragging to view some of my art!
                  </p>
        <div className='image-track' data-mouse-down-at="0" data-prev-percent="0" ref={trackRef}>
            <img src={art1} draggable="false" />
            <img src={art10} draggable="false" />
            <img src={art11} draggable="false" />
            <img src={art12} draggable="false" />
            <img src={art2} draggable="false" />
            <img src={art4} draggable="false" />
            <img src={art13} draggable="false" />
            <img src={art6} draggable="false" />
            <img src={art7} draggable="false" />
            <img src={art8} draggable="false" />
            <img src={art9} draggable="false" />
        </div>
        </>
    );
};

export default Carasoul;
