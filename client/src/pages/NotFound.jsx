import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-blue-500 to-purple-500 px-4">
      <h1 className="text-white text-[10rem] md:text-[15rem] font-extrabold animate-bounce select-none drop-shadow-lg">404</h1>
      <p className="text-white text-2xl md:text-3xl font-semibold mb-8 animate-fadeIn">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-white text-purple-700 font-bold rounded-lg shadow-lg hover:bg-purple-100 transition"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound