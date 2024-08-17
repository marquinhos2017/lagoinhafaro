import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import './Player.css';

const Player = ({ track }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        const progress = (audio.currentTime / audio.duration) * 100;
        setProgress(progress);
    };

    return (
        <div className="player">
            <div className="album-cover">
                <img src={track.cover} alt="Album cover" />
            </div>
            <div className="track-info">
                {//    <h2>{track.title}</h2>//
                }
                <p>{track.title}</p>
            </div>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="controls">
                <button onClick={handlePlayPause} className="control-btn play-pause">
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
            </div>
            <audio
                ref={audioRef}
                src={track.src}
                onTimeUpdate={handleTimeUpdate} type="audio/mpeg"
                onEnded={() => setIsPlaying(false)}
            />
        </div>
    );
};

export default Player;
