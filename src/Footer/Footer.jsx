import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white py-4">
        <div className="container  mt-9 mx-auto flex flex-wrap justify-between">
          {/* Left Section: Social Links */}
          <div className="w-full md:w-1/3 px-4 ">
            <h3 className="text-uppercase text-green-500 font-bold text-2xl">Links</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon text-green-500">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon text-green-500">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon text-green-500">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Center Section: Links */}
          <div className="w-full md:w-1/3 px-4">
            <h3 className="text-uppercase text-green-500 font-bold text-2xl">More about</h3>
            <ul className="list-none">
              <li><a href="#pricing" className="hover:underline text-green-500">Pricing</a></li>
              <li><a href="#policy" className="hover:underline text-green-500">Our Policy</a></li>
              <li><a href="#terms" className="hover:underline text-green-500">Terms of Use</a></li>
              <li><a href="#api" className="hover:underline text-green-500">API</a></li>
            </ul>
          </div>

          {/* Right Section: Contact Info */}
          <div className="w-full md:w-1/3 px-4">
            <h3 className="text-uppercase text-green-500 font-bold text-2xl">Question/Business Inquiry</h3>
            <p>Contact us: <a href="mailto:info@lockedhub.com" className="hover:underline text-green-500">info@lockedhub.com</a></p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
