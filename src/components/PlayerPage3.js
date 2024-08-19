import React, { useState, useEffect } from 'react';
import Player from './Player';
import './PlayerPage3.css';
import { useNavigate } from 'react-router-dom';

const PlayerPage3 = () => {
    const [selectedTrack, setSelectedTrack] = useState(null);
    const navigate = useNavigate();

    // Definir as opções de versões
    const tracks = [
        {
            title: 'Barítono e Mezzo',
            artist: 'Artist 1 - Live',
            src: '/audio/Baritono_e_Mezzo.wav', // Caminho relativo para o arquivo MP3
            cover: 'https://via.placeholder.com/400x400.png?text=Barítono e Mezzo',
        },
        {
            title: 'Tenor e Soprano',
            artist: 'Artist 1 - Live',
            src: '/audio/Tenor_e_Soprano.wav', // Caminho relativo para o arquivo MP3
            cover: 'https://via.placeholder.com/400x400.png?text=Tenor e Soprano',
        },

    ];

    useEffect(() => {
        if (tracks.length > 0) {
            setSelectedTrack(tracks[0]);
        }
    }, []);

    return (
        <div className="player-page">
            <button onClick={() => navigate('/')} className="back-button">← Voltar para músicas</button>
            <h2>Canção ao Cordeiro</h2>

            {selectedTrack && <Player track={selectedTrack} />}
            <div className="track-options">
                {tracks.map((track, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedTrack(track)}
                        className={`track-button ${selectedTrack === track ? 'active' : ''}`}
                    >
                        {track.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PlayerPage3;
