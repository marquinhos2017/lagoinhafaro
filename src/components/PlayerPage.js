import React, { useState, useEffect } from 'react';
import Player from './Player';
import './PlayerPage.css';
import { useNavigate } from 'react-router-dom';

const PlayerPage1 = () => {
    const [selectedTrack, setSelectedTrack] = useState(null);
    const navigate = useNavigate();

    // Definir as opções de versões
    const tracks = [
        {
            title: 'Contralto',
            artist: 'Artist 1 - Live',
            src: '/audio/Contralto.mp3', // Caminho relativo para o arquivo MP3
            cover: 'https://via.placeholder.com/400x400.png?text=Contralto',
        },
        {
            title: 'Tenor',
            artist: 'Artist 1 - Live',
            src: '/audio/Tenor.mp3', // Caminho relativo para o arquivo MP3
            cover: 'https://via.placeholder.com/400x400.png?text=Tenor',
        },
        {
            title: 'Barítono',
            artist: 'Artist 1 - Acoustic',
            src: '/audio/Baritono.mp3', // Caminho relativo para o arquivo MP3
            cover: 'https://via.placeholder.com/400x400.png?text=Barítono',
        },
        {
            title: 'Soprano',
            artist: 'Artist 1 - Remix',
            src: '/audio/Soprano.mp3', // Caminho relativo para o arquivo MP3
            cover: 'https://via.placeholder.com/400x400.png?text=Soprano',
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

export default PlayerPage1;
