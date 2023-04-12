import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
       <div className="container mx-auto inline-block">

        <div className="mt-6 bg-base-100 align-items-center d-flex mx-auto">

            <a href='/' className="font-bold normal-case text-4xl 	display: flex">Job Application</a>
          
        </div>
        <ul className='md:flex gap-6 pb-12 absolute md:static duration-500 bg-purple-200 ml-12 px-12 py-8 '>
          <li>
            <NavLink to='/'> Home </NavLink>
          </li>
          <li>
            <NavLink to='/' className={({isActive})=> isActive ? 'text-blue-600': ''}> Statistics </NavLink>
          </li>
          <li>
            <NavLink to='/'> Applied Jobs </NavLink>
          </li>
          <li>
            <NavLink to='/'> Blog </NavLink>
          </li>
          <a href="question-blog.html"><button 
          className="bg-green-600 font-light text-sm px-5 py-1 rounded text-white">
          Apply Now
        </button></a>
        </ul>
       </div>
    );
};

export default Header;