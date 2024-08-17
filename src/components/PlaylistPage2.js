import React from 'react';
import Player from './Player';
import './PlaylistPage.css';

const PlaylistPage2 = ({ song, onBack }) => {
    const tracks = [
        {
            title: `${song.title} (Demo Version)`,
            artist: `${song.artist} - Demo`,
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
            cover: "https://via.placeholder.com/400x400.png?text=Demo+Version",
        },
        {
            title: `${song.title} (Instrumental Version)`,
            artist: `${song.artist} - Instrumental`,
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
            cover: "https://via.placeholder.com/400x400.png?text=Instrumental+Version",
        },
        {
            title: `${song.title} (Extended Version)`,
            artist: `${song.artist} - Extended`,
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
            cover: "https://via.placeholder.com/400x400.png?text=Extended+Version",
        },
    ];

    return (
        <div className="playlist-page">
            <button onClick={onBack} className="back-button">← Back to Songs</button>
            <h2>{song.title} - Playlist Page 2</h2>
            {tracks.map((track, index) => (
                <Player key={index} track={track} />
            ))}
        </div>
    );
};

export default PlaylistPage2;
