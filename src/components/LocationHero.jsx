import React from 'react'
import location from '../assets/location.jpg'

const LocationHero = () => {
  return (
    <>
    <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <img 
          src={location} 
          alt="DJ Background" 
          className="object-cover w-full h-full" 
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-teal-500 text-center">
            These are the hottest <span className="text-white">artists of the week</span>
          </h1>
        </div>
      </div>
    </>
  )
}

export default LocationHero
