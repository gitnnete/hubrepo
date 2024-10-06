import React from 'react'
import cdj from  '../assets/cdj.jpg' // Import the background image

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <img 
          src={cdj} 
          alt="DJ Background" 
          className="object-cover w-full h-full" 
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-teal-500 text-center">
            Discover the <span className="text-white">stars of tomorrow</span>
          </h1>
        </div>
      </div>
    </>
  )
}

export default Hero
