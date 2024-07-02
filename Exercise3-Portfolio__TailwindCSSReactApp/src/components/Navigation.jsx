import React from 'react'

function Navigation() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex flex-wrap justify-between">
        <ul className="flex justify-start">
          <li className="mr-4">
            <a href="#educational-history" className="hover:text-gray-300">Educational History</a>
          </li>
          <li className="mr-4">
            <a href="#professional-skills" className="hover:text-gray-300">Professional Skills</a>
          </li>
          <li className="mr-4">
            <a href="#professional-projects" className="hover:text-gray-300">Professional Projects</a>
          </li>
          <li className="mr-4">
            <a href="#hobbies" className="hover:text-gray-300">Hobbies</a>
          </li>
          <li className="mr-4">
            <a href="#life-ambitions" className="hover:text-gray-300">Life Ambitions</a>
          </li>
          <li className="mr-4">
            <a href="#efforts-for-country" className="hover:text-gray-300">Efforts for Country</a>
          </li>
        </ul>
        <div>
          <a href="#footer" className="hover:text-gray-300">Contact Me</a>
        </div>
    </nav>
  )
}

export default Navigation
