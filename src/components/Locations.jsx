import React from "react";
import artistImage from "../assets/blankCover.jpg"; // Replace with your actual image path
import songsData from "../data/songs.json";

const Locations = () => {
  const artistsByLocation = songsData.reduce((acc, song) => {
    if (!acc[song.location]) {
      acc[song.location] = [];
    }
    acc[song.location].push(song.artist);
    return acc;
  }, {});
  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold mb-8 text-gray-300">
          By{" "}
          <span className="border-b-4 border-green-500 inline-block pb-1">
            Location
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(artistsByLocation).map(([location, artists]) => (
            <div
              key={location}
              className="bg-gray-800 rounded-lg p-4 text-white"
            >
              <h3 className="text-xl font-semibold mb-4">{location}</h3>
              <ul>
                {artists.map((artist, index) => (
                  <li key={index} className="flex items-center space-x-3 mb-2">
                    <img
                      src={artistImage}
                      alt={artist}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{artist}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Locations;
