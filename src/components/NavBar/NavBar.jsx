import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
   <nav className="bg-white p-4 flex items-center justify-between">
      {/* Hamburger Menu */}
      <div className="flex items-center">
        <Link to='/' className="text-black pr-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </Link>
      </div>

      {/* Centered Logo */}
      <div className="text-black  text-xl">me<span className='font-bold'>today</span></div>

      {/* Right-side Icons */}
      <div className="flex items-center space-x-4">
        <Link to='/admin' className="text-black cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 10h6m-3-3v6m5 3h3a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1a2 2 0 012-2h3m3-13a2 2 0 00-2 2v1a2 2 0 002 2h6a2 2 0 002-2V9a2 2 0 00-2-2H9z"
            />
          </svg>
        </Link>
        <div className="text-black cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 20h.01M8 20h4m3-7V4a3 3 0 00-3-3h0a3 3 0 00-3 3v9m6 4v3m0 0h-4m4 0a4 4 0 110-8h0a4 4 0 110 8z"
            />
          </svg>
        </div>
        <div className="text-black cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 9a8.003 8.003 0 00-2.343-5.657m0 0C16.268 2.628 13.148 2 10 2s-6.268.628-7.657 1.343m0 0A8.003 8.003 0 004 9a8.003 8.003 0 001.343 4.343m2.828 2.828A8.003 8.003 0 0010 20c3.148 0 6.268-.628 7.657-1.343m0 0A8.003 8.003 0 0020 15a8.003 8.003 0 00-1.343-4.343"
            />
          </svg>
        </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar