import React from 'react';
import cover from '../../Media/cover.png'
import { Link } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
const Cover = () => {
    return (
      <div className=''>
        <div className="px-10 lg:py-0 py-10 mt-14 rounded-xl flex flex-col-reverse gap-30 lg:flex-row items-center  bg-indigo-100">
          <div className="text-left">
            <h1 className="text-4xl lg:text-7xl mt-5 font-bold">
              One Step closer <br /> to Your <br />
              <span className="text-indigo-500">Dream Job</span>
            </h1>
            <p className="mt-5 font-semibold">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <Link>
              <button className="mt-10 border py-3 px-3 rounded-2xl bg-indigo-500 text-white font-semibold hover:bg-blue-700">
                Get Started
              </button>
            </Link>
          </div>
          <div>
            <img src={cover} alt="" />
          </div>
        </div>
        <JobCategory></JobCategory>
        <FeaturedJobs></FeaturedJobs>
      </div>
    );
};

export default Cover;