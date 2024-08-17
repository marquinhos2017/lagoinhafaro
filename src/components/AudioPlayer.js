import React, { useState, useRef } from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({ title, src }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="audio-player">
            <div className="track-info">
                <p>{title}</p>
                <button onClick={togglePlayPause} className="play-pause-btn">
                    {isPlaying ? '⏸️' : '▶️'}
                </button>
            </div>
            <audio ref={audioRef} src={src} controls />
        </div>
    );
};

export default AudioPlayer;
