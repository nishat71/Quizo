import React from 'react';
import { Link,NavLink } from 'react-router-dom';

const Header = () => {
    return (
    <div className="px-6 font-semibold text-gray-100 bg-gray-800 shadow-2xl navbar">
      <div className="flex-1">
        <Link to="" className="text-xl font-bold normal-case btn btn-ghost sm:text-2xl">QUIZO</Link>
      </div>
      <div className="flex-none">
        <ul className="flex items-center space-x-4 sm:space-x-8">
          <li>
            <NavLink to="/home"
             aria-label='Home'
             title='Home'
            className={({ isActive })=>
            isActive
            ? "font-medium tracking-wide text-yellow-300 hover:text-yellow-300 transition-colors duration-200 sm:text-lg text-sm"
            : "font-medium tracking-wide text-gray-100 hover:text-yellow-300 transition-colors duration-200 sm:text-lg text-sm"
            }>
            Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/topics"
             aria-label='Topics'
             title='Topics'
            className={({ isActive })=>
            isActive
            ? "font-medium tracking-wide text-yellow-300 hover:text-yellow-300 transition-colors duration-200 sm:text-lg text-sm"
            : "font-medium tracking-wide text-gray-100 hover:text-yellow-300 transition-colors duration-200 sm:text-lg text-sm"
            }>
            Topics
            </NavLink>
          </li>         
          <li>
            <NavLink to="/statistics"
             aria-label='Statistics'
             title='Statistics'
            className={({ isActive })=>
            isActive
            ? "font-medium tracking-wide text-yellow-300 hover:text-yellow-300 transition-colors duration-200 sm:text-lg text-sm"
            : "font-medium tracking-wide text-gray-100 hover:text-yellow-300 transition-colors duration-200 sm:text-lg text-sm"
            }>
            Statistics
            </NavLink>
          </li>         
          <li>
            <NavLink to="/blog"
             aria-label='Blog'
             title='Blog'
            className={({ isActive })=>
            isActive
            ? "font-medium tracking-wide text-yellow-300 hover:text-yellow-300 transition-colors duration-200 sm:text-lg text-sm"
            : "font-medium tracking-wide text-gray-100 hover:text-yellow-300 transition-colors duration-200 sm:text-lg text-sm"
            }>
            Blog
            </NavLink>
          </li>
        </ul>   
      </div>
    </div>   
    );
};

export default Header;
