import React, { useState, useEffect } from 'react';
import Player from './Player';
import './PlayerPage3.css';
import { useNavigate } from 'react-router-dom';



const PlayerPage4 = () => {
    const [selectedTrack, setSelectedTrack] = useState(null);
    const navigate = useNavigate();

    // Definir as opções de versões
    const tracks = [
        {
            title: 'Principal',
            artist: 'Artist 1 - Live',
            src: '/audio/Principal_1.wav', // Caminho relativo para o arquivo MP3
            cover: 'https://via.placeholder.com/400x400.png?text=Principal - Base',
        },
        {
            title: 'Segunda',
            artist: 'Artist 1 - Live',
            src: '/audio/2 - Vocal_1.wav', // Caminho relativo para o arquivo MP3
            cover: 'https://via.placeholder.com/400x400.png?text=Segunda Voz - Terça',
        },
        {
            title: 'Terceira',
            artist: 'Artist 1 - Live',
            src: '/audio/3 - Vocal_1.wav', // Caminho relativo para o arquivo MP3
            cover: 'https://via.placeholder.com/400x400.png?text=Terceira Voz - Quinta',
        },
        {
            title: 'Todos',
            artist: 'Artist 1 - Live',
            src: '/audio/Back.wav', // Caminho relativo para o arquivo MP3
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
            <h2>Nada Importa Mais</h2>

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

export default PlayerPage4;

