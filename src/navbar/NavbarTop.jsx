import React from 'react'

const NavbarTop = () => {

  return (
    <div className="bg-gray-900 p-4">
      <div className="container mx-auto max-w-8xl px-4"> 
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-white text-2xl md:text-4xl me-5">locked<span className='text-green-600 font-bold'>Hub</span></div>
            <input 
              type="text" 
              placeholder="Search..." 
              className="p-1 w-60 rounded hidden md:block" // Adjusted padding for height
            />
          </div>
          <div className="flex space-x-4">
            <div className="text-white cursor-pointer hover:bg-red-900 p-2 rounded">Logout</div> 
          </div>
        </div>
        <div className="md:hidden mt-2">
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2 rounded w-full" // Adjusted padding for height
          />
        </div>
      </div>
    </div>

  )
}

export default NavbarTop
