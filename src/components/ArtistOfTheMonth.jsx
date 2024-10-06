import React from "react";
import artist from "../assets/artist.jpg";

const ArtistOfTheMonth = () => {
  return (
    <>
      <div className="bg-gray-900  text-gray-300">
        <div className="container mx-auto px-4 py-2 mt-10">
          <h2 className="text-4xl font-bold mb-8">
            Our Artist {" "}
            <span className="border-b-4 border-green-500 inline-block pb-1">
              of the Month
            </span>
          </h2>
        </div>
      </div>

      <section className="md:flex bg-gray-100">
        {/* Left Section: Image */}
        <div className="relative w-full md:w-1/2">
          <img
            src={artist}
            alt="Artist of the Month"
            className="w-full h-full object-cover md:rounded-none rounded-md"
          />
          {/* Fading effect after md */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-gray-500 to-transparent opacity-30" />
        </div>

        {/* Right Section: Artist Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-start p-8 md:pl-12">
          <p className="text-4xl mt-4 text-white mb-6">
            John Doe is an exceptional musician known for blending classical and
            modern styles into a unique sound. His journey from the streets of
            Brooklyn to international stages has been one of dedication and
            passion.
          </p>

          {/* Read more button */}
          <button className="mt-6 max-w-xs px-1 py-4 border border-white text-white hover:bg-green-800 hover:text-white transition duration-300">
            Read More
          </button>
        </div>
      </section>
    </>
  );
};

export default ArtistOfTheMonth;
