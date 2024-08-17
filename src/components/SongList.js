import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SongList.css';

const SongList = () => {
    const navigate = useNavigate();

    const songs = [
        { title: 'Canção ao Cordeiro', artist: '', path: '/song1' },
        { title: 'Santo pra Sempre', artist: '', path: '/song2' },
        //    { title: 'Santo pra sempre', artist: 'Artist 3', path: '/song3' },
        //    { title: 'Canção do Apocalipse', artist: 'Artist 4', path: '/song4' },
    ];

    return (
        <div className="song-list">
            <h2>Lagoinha Music Faro</h2>
            <ul>
                {songs.map((song, index) => (
                    <li key={index} onClick={() => navigate(song.path)}>
                        <p>{song.title}</p>
                        <span>{song.artist}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongList;
