import React from 'react';
import Player from './Player';
import './PlaylistPage.css';

const PlaylistPage3 = ({ song, onBack }) => {
    const tracks = [
        {
            title: `${song.title} (Original Version)`,
            artist: `${song.artist} - Original`,
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
            cover: "https://via.placeholder.com/400x400.png?text=Original+Version",
        },
        {
            title: `${song.title} (Rehearsal Version)`,
            artist: `${song.artist} - Rehearsal`,
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
            cover: "https://via.placeholder.com/400x400.png?text=Rehearsal+Version",
        },
        {
            title: `${song.title} (Alternate Version)`,
            artist: `${song.artist} - Alternate`,
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
            cover: "https://via.placeholder.com/400x400.png?text=Alternate+Version",
        },
    ];

    return (
        <div className="playlist-page">
            <button onClick={onBack} className="back-button">← Back to Songs</button>
            <h2>{song.title} - Playlist Page 3</h2>
            {tracks.map((track, index) => (
                <Player key={index} track={track} />
            ))}
        </div>
    );
};

export default PlaylistPage3;
