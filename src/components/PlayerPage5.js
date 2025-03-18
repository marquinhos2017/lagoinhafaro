import React, { useState, useEffect } from 'react';
import Player from './Player';
import './PlayerPage3.css';
import { useNavigate } from 'react-router-dom';



const PlayerPage5 = () => {
    const [selectedTrack, setSelectedTrack] = useState(null);
    const navigate = useNavigate();

    // Definir as opções de versões
    const tracks = [
        {
            title: 'Contralto',
            artist: '',
            src: '/audio/Contralto.wav', // Caminho relativo para o arquivo MP3

        },
        {
            title: 'Mezo',
            artist: '',
            src: '/audio/Mezo.wav', // Caminho relativo para o arquivo MP3

        },
        {
            title: 'Soprano',
            artist: '',
            src: '/audio/Soprano.wav', // Caminho relativo para o arquivo MP3

        },
        {
            title: 'Todos',
            artist: '',
            src: '/audio/Master.wav', // Caminho relativo para o arquivo MP3
            cover: 'https://via.placeholder.com/400x400.png?',
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
            <h2>O Grito</h2>

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

export default PlayerPage5;

