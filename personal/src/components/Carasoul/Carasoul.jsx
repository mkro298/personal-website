import React, { useState } from 'react';
import { art1, art10, art11, art12, art13, art2, art4, art6, art7, art8, art9 } from '../../assets';
import './Carasoul.css';

const Carasoul = () => {
    const [enlargedImage, setEnlargedImage] = useState(null);

    const handleImageClick = (src) => {
        setEnlargedImage(src);
    };

    const handleOverlayClick = (e) => {
        if (e.target.tagName !== 'IMG') {
            setEnlargedImage(null);
        }
    };

    return (
        <>
        <div className='fade-out-text'>
        <p style={{fontFamily: 'Piazzolla, serif', fontSize: '30px', fontWeight: 'normal'}}>Scroll through sideways and click on images to enlarge</p>
        </div>
            <div className='back-container'>
                <div className='image-track'>
                    <button onClick={() => handleImageClick(art1)}><img src={art1} draggable="false" alt="Art 1" /></button>
                    <button onClick={() => handleImageClick(art10)}><img src={art10} draggable="false" alt="Art 10" /></button>
                    <button onClick={() => handleImageClick(art11)}><img src={art11} draggable="false" alt="Art 11" /></button>
                    <button onClick={() => handleImageClick(art12)}><img src={art12} draggable="false" alt="Art 12" /></button>
                    <button onClick={() => handleImageClick(art2)}><img src={art2} draggable="false" alt="Art 2" /></button>
                    <button onClick={() => handleImageClick(art4)}><img src={art4} draggable="false" alt="Art 4" /></button>
                    <button onClick={() => handleImageClick(art13)}><img src={art13} draggable="false" alt="Art 13" /></button>
                    <button onClick={() => handleImageClick(art6)}><img src={art6} draggable="false" alt="Art 6" /></button>
                    <button onClick={() => handleImageClick(art7)}><img src={art7} draggable="false" alt="Art 7" /></button>
                    <button onClick={() => handleImageClick(art8)}><img src={art8} draggable="false" alt="Art 8" /></button>
                    <button onClick={() => handleImageClick(art9)}><img src={art9} draggable="false" alt="Art 9" /></button>
                </div>
            </div>

            {enlargedImage && (
                <div className='overlay' onClick={handleOverlayClick}>
                    <img className='enlarged-image' src={enlargedImage} alt="Enlarged Art" />
                </div>
            )}
        </>
    );
};

export default Carasoul;
