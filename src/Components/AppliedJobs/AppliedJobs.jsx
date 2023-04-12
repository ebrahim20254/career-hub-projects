import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AppliedJobs.css";
const AppliedJobs = () => {
  const jobApplications = [];

  const keys = Object.keys(localStorage);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const jobApplication = JSON.parse(localStorage.getItem(key));
    jobApplications.push(jobApplication);
  }

  return (
    <div>
      <div className="mx-auto bg-gradient-to-r from-indigo-100 via-slate-100 to-cyan-100 mt-14 pt-10 pb-24 rounded-2xl">
        <h1 className="text-center text-3xl font-bold">Applied Jobs:</h1>
      </div>
      <div className="mt-5 flex justify-end">
        <div className="relative inline-block cursor-pointer">
          <label
            for="filter-dropdown"
            className="cursor-pointer inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filter by
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 14l5-5H5l5 5z"
                clip-rule="evenodd"
              />
            </svg>
          </label>
          <input type="checkbox" id="filter-dropdown" className="hidden" />
          <div
            className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="filter-dropdown"
            tabindex="-1"
          >
            <div
              className="py-1 border bg-gradient-to-r from-indigo-100 via-slate-100 to-cyan-100"
              role="none"
            >
              <Link
                to=""
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Onsite
              </Link>
              <Link
                to=""
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Remote
              </Link>
            </div>
          </div>

          {/*  */}

          {/*  */}
        </div>
      </div>
      <div className="mt-24">
        <ul className="">
          {jobApplications.map((jobApplication) => (
            <div className="mt-5 py-8 border rounded-2xl">
              <li key={jobApplication.id}>
                <div className="flex items-center justify-around">
                  <div>
                    <img
                      className="bg-gradient-to-r from-indigo-100 via-slate-100 to-cyan-100 py-14 px-10 rounded-2xl"
                      src={jobApplication.company_logo}
                      alt=""
                    />
                  </div>
                  {/*  */}
                  <div>
                    <p className="text-xl font-semibold">
                      {jobApplication.job_title}
                    </p>
                    <p className="mt-2 font-semibold text-slate-500">
                      {jobApplication.company_name}
                    </p>
                    <div className="flex gap-10 mt-2">
                      <p className="border py-2 px-3 rounded-xl border-indigo-600 font-semibold text-indigo-800">
                        {jobApplication.fulltime_or_parttime}
                      </p>
                      <p className="border py-2 px-3 rounded-xl border-indigo-600 font-semibold text-indigo-800">
                        {jobApplication.remote_or_onsite}
                      </p>
                    </div>
                    <div className="flex gap-10 mt-2">
                      <p className="font-semibold text-slate-700">
                        {jobApplication.location}
                      </p>
                      <p className="font-semibold text-slate-700">
                        {jobApplication.salary}
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div>
                    <Link to={`/viewDetails/${jobApplication.id}`}>
                      <button className="mt-10 border py-4 px-5 rounded-2xl bg-indigo-500 text-white font-semibold hover:bg-blue-700">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppliedJobs;
