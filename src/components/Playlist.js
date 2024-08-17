import React from 'react';
import Player from './Player';
import './Playlist.css';

const Playlist = ({ song, onBack }) => {
    const tracks = [
        {
            title: `${song.title} (Acoustic Version)`,
            artist: `${song.artist} - Acoustic`,
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            cover: "https://via.placeholder.com/400x400.png?text=Acoustic+Version",
        },
        {
            title: `${song.title} (Live Version)`,
            artist: `${song.artist} - Live`,
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
            cover: "https://via.placeholder.com/400x400.png?text=Live+Version",
        },
        {
            title: `${song.title} (Remix Version)`,
            artist: `${song.artist} - Remix`,
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
            cover: "https://via.placeholder.com/400x400.png?text=Remix+Version",
        },
    ];

    return (
        <div className="playlist">
            <button onClick={onBack} className="back-button">← Back to Songs</button>
            <h2>{song.title} - Playlist</h2>
            {tracks.map((track, index) => (
                <Player key={index} track={track} />
            ))}
        </div>
    );
};

export default Playlist;
