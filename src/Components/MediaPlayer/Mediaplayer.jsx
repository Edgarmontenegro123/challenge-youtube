import React, { useRef, useEffect } from 'react';
import audioFile from '../../assets/RadioheadSitDownStandUp.mp3';
import './MediaPlayer.scss'

// Corregir que arranca automáticamente
const MediaPlayer = () => {
    const audioRef = useRef(null);

    useEffect(() => {

            if (audioRef.current) {
                audioRef.current.currentTime = 30;
                audioRef.current.play();
                setTimeout(() => {
                    audioRef.current.pause();
                }, 15000);
            }

        // handlePlayAudio();

        return () => {
            // Limpiar el temporizador al desmontar el componente
            clearTimeout();
        };
    }, []);

    return (
        <div className='mediaPlayer'>
            <audio ref={audioRef} controls>
                <source src={audioFile} type="audio/mpeg" />
            </audio>
        </div>
    );
};

export default MediaPlayer;
