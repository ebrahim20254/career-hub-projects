import React, { createContext } from 'react';
import { Link } from 'react-router-dom';
import {  } from "react-icons/fa";
export const detailsData = createContext([])
const FeaturedJobsDetails = ({data}) => {
    let {
      id,
      company_logo,
      job_title,
      company_name,
      remote_or_onsite,
      fulltime_or_parttime,
      location,
      salary,
    } = data;
    return (
      <div className="border rounded-2xl mt-10 container">
        <detailsData.Provider value={data}>
          <div className="px-16 py-8">
            <img src={company_logo} alt="" />
            <p className="mt-8 text-lg font-bold">{job_title}</p>
            <p className=" mt-1 text-lg text-slate-400 font-semibold">
              {company_name}
            </p>
            <div className="flex gap-8 mt-3">
              <p className="text-indigo-600 border-indigo-600 border px-3 py-2 rounded-lg">
                {remote_or_onsite}
              </p>
              <p className="text-indigo-600 border-indigo-600 border px-3 py-2 rounded-lg">
                {fulltime_or_parttime}
              </p>
            </div>
            <div className="flex items-center gap-12  mt-5">
              <div className="flex">
                <p className="font-semibold text-slate-500">
                  {/*  */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>

                  {/*  */}

                  {location}
                </p>
              </div>
              <p className="font-semibold text-slate-500">Salary : {salary}</p>
            </div>
            <span className="inline-block border px-4 py-3 rounded-xl bg-indigo-500 text-white font-semibold mt-5">
              <Link to={`viewDetails/${id}`}>View Details</Link>
            </span>
          </div>
        </detailsData.Provider>
      </div>
    );
};

export default FeaturedJobsDetails;