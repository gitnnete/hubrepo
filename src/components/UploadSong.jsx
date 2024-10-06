import React, { useState } from "react";

const UploadSong = () => {
  const [songData, setSongData] = useState({
    title: "",
    artist: "",
    album: "",
    year: "",
    location: "",
    file: null,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setSongData({
      ...songData,
      [name]: files ? files[0] : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the file upload and other song data submission here
    console.log(songData);
    alert("Song uploaded successfully!");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-1">
        <div className="bg-white rounded-lg shadow-sm p-1 w-full max-w-xl md:max-w-2xl">
          <h1 className="text-2xl p-4 font-bold mb-6 text-center text-gray-300 md:text-4xl">
            Upload a New Song
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* File Upload */}
            <div>
              <label className="ms-2 block text-gray-200 text-sm mb-2 font-semibold">
                <span>Upload Song File</span>
              </label>
              <input
                type="file"
                name="file"
                accept="audio/*"
                onChange={handleChange}
                className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-green-100 file:text-green-700
              hover:file:bg-green-200"
                required
              />
            </div>

            {/* Song Title */}
            <div>
              <label className="block ms-2 text-gray-700 text-sm mb-2 font-semibold">
                Song Title
              </label>
              <input
                type="text"
                name="title"
                value={songData.title}
                onChange={handleChange}
                placeholder="Enter song title"
                className="px-4  py-2 ms-2 md:w-96 text-white border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 mb-4" // Added margin-bottom
                required
              />
            </div>

            {/* Artist */}
            <div>
              <label className="block text-gray-700 text-sm mb-2 font-semibold">
                Artist Name
              </label>
              <input
                type="text"
                name="artist"
                value={songData.artist}
                onChange={handleChange}
                placeholder="Enter artist name"
                className="ms-2 md:w-96 px-4 py-2 border text-white border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 mb-4" // Added margin-bottom
                required
              />
            </div>

            {/* Album */}
            <div>
              <label className="block text-gray-700 text-sm mb-2 font-semibold">
                Album Name
              </label>
              <input
                type="text"
                name="album"
                value={songData.album}
                onChange={handleChange}
                placeholder="Enter album name"
                className="ms-2 md:w-96 px-4 py-2 border text-white border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 mb-4" // Added margin-bottom
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-700 text-sm mb-2 font-semibold">
                Location (Province)
              </label>
              <select
                name="location"
                value={songData.location}
                onChange={handleChange}
                className="ms-2 md:w-96 px-4 py-2 border text-white border-gray-green-00 rounded-lg focus:ring-green-500 focus:border-green-500 mb-4" // Added margin-bottom
                required
              >
                <option value="">Select location</option>
                <option value="Pretoria">Pretoria</option>
                <option value="Johannesburg">Johannesburg</option>
                <option value="Limpopo">Limpopo</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="ms-2 md:w-96 bg-green-500 text-white mb-10 py-2 px-4 rounded-lg font-semibold hover:bg-green-600 focus:ring-4 focus:ring-green-300 transition duration-300" // Increased mb-6 to mb-10
            >
              Upload Song
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadSong;
