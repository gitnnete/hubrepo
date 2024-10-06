import { useState, useEffect } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const song = {
    title: 'Song Title',
    artist: 'Artist Name',
    album: 'Album Name',
    albumArt: 'https://via.placeholder.com/100' // Replace with actual image URL
  };

  useEffect(() => {
    // Automatically display the player when the page loads
    setIsVisible(true);
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const closePlayer = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={song.albumArt}
          alt={song.album}
          className="w-16 h-16 mr-4 object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{song.title}</h3>
          <p className="text-sm">{song.artist}</p>
          <p className="text-xs">{song.album}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="text-xl hover:text-green-500"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <i className="fas fa-pause"></i> 
          ) : (
            <i className="fas fa-play"></i> 
          )}
        </button>
        <button
          className="text-xl text-red-500 hover:text-red-700"
          onClick={closePlayer}
        >
          <i className="fas fa-times"></i> 
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
