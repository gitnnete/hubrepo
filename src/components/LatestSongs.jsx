import React, { useState, useEffect } from "react";
import songsData from "../data/songs.json"; // Assuming your JSON file is here

// Import the album art image once
import albumArt from "../assets/blankCover.jpg"; // Replace with the actual path to your image

const LatestSongs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Simulate fetching from JSON
    setSongs(songsData);
  }, []);

  return (
    <div className="bg-gray-900  text-gray-300">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-4xl font-bold mb-26">
          Latest{" "}
          <span className="border-b-4 border-green-500 inline-block pb-1 mb-14">
            Songs
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {songs.map((song, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition-all duration-200"
            >
              {/* Use the imported album art for all songs */}
              <img
                src={albumArt}
                alt={song.title}
                className="w-16 h-16 object-cover rounded-lg"
              />

              <div className="bg-gray-400 !important">
                <h2 className="text-lg font-semibold">{song.title}</h2>
                <p className="text-lg text-gray-400">
                  {song.artist} • {song.album}
                </p>
                <p className="text-sm text-gray-400">{song.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestSongs;
