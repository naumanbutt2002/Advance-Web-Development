import React from 'react'

function Header() {
  return (
    <header className="bg-gray-200 p-4 flex flex-col md:flex-row items-center justify-center">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">Muhammad Nauman</h1>
          <p className="text-sm md:text-base mb-4 md:mb-0 max-w-md">
            AI- Powered Web and Mobile App Developer
          </p>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 text-center">
          <img src="dp.jpg" alt="Profile" className="w-32 h-32 md:w-48 md:h-auto md:mx-auto max-w-full float-right 
          border-2 rounded-full border-slate-50 shadow-xl
          " />
        </div>
      </header>
  )
}

export default Header
