import React from 'react';
import Header from '../Header/Header';
import image from './404-error.png'
import pc from './computer.png'
import { Link } from 'react-router-dom';

const FourouFour = () => {
    return (
      <div className="pt-11 pb-44 w-full mx-auto container mt-20 bg-gradient-to-r from-indigo-100 via-slate-300 to-cyan-100">
        <h1 className="text-center text-6xl font-bold">Not working!!!</h1>

        <div className="flex gap-32 justify-center mt-20">
          <img className="w-56" src={image} alt="" />
          <img className="w-56" src={pc} alt="" />
        </div>
        <div>
          <p className="text-center mt-10 text-4xl font-semibold">
            We still trying to fix it..
          </p>
          <p className="text-center mt-10 text-xl font-semibold">
            Or go back to your site
          </p>
          <p className=" text-center mt-10 text-lg font-semibold">
            click here ...{" "}
            <button className='bg-indigo-500 text-white py-3 px-5 rounded-2xl'>
              <Link to="/">Home</Link>
            </button>
          </p>
        </div>
      </div>
    );
};

export default FourouFour;