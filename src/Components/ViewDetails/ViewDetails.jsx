import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { detailsData } from "../FeaturedJobsDetails/FeaturedJobsDetails";

const ViewDetails = () => {
 const handleApplyNow = (data) => {
   const key = `jobApplication_${Date.now()}`;
   localStorage.setItem(key, JSON.stringify(data));
 };
 

  let itemDetails = useLoaderData();
  console.log(itemDetails);
  const { idd } = useParams();
  

  return (
    <div>
      <div className="bg-indigo-100 py-12 mt-10 rounded-xl">
        <h1 className="text-center mt-10 text-4xl font-semibold">
          Job details
        </h1>
      </div>
      {itemDetails.map((data) => {
        if (data.id == idd) {
          return (
            <div className="mt-20">
              <div className="flex gap-40 items-center">
                <div>
                  <p>
                    <span className="text-xl font-bold">Job Description</span> :{" "}
                    <span className="font-semibold text-slate-600">
                      {data.job_description}
                    </span>
                  </p>

                  <p className="mt-8">
                    <span className="text-xl font-bold">
                      Job responsibility
                    </span>{" "}
                    :{" "}
                    <span className="font-semibold text-slate-600">
                      {data.job_responsibility}
                    </span>
                  </p>

                  <p className="mt-8">
                    <span className="text-xl font-bold">
                      Educational Requirements
                    </span>{" "}
                    :{" "}
                    <span className="block mt-2 font-semibold text-slate-600">
                      {data.educational_requirements}
                    </span>
                  </p>

                  <p className="mt-8">
                    <span className="text-xl font-bold">Experiences:</span> :{" "}
                    <span className="block mt-2 font-semibold text-slate-600">
                      {data.experiences}
                    </span>
                  </p>
                </div>
                {/*  */}
                <div className="border py-8 px-8 rounded-xl bg-indigo-50">
                  <h1 className="text-2xl font-semibold">Job Details</h1>
                  <hr className="w-96 mt-5  h-1 bg-indigo-200 " />
                  <p className="mt-4">
                    <span className="font-semibold text-lg">Salary</span> :{" "}
                    <span className="font-semibold text-slate-600">
                      {data.salary}
                    </span>{" "}
                    (per month)
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Job title</span> :{" "}
                    <span className="font-semibold text-slate-600">
                      {data.job_title}
                    </span>
                  </p>
                  <p className="mt-5 text-2xl font-semibold">
                    Contact Information
                  </p>
                  <hr className="w-96 mt-5  h-1 bg-indigo-200 " />
                  <p className="mt-4">
                    <span className="font-semibold text-lg ">Phone</span> :
                    <span className="font-semibold text-slate-600">
                      {data.contact_information.phone}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold text-lg ">Email</span> :
                    <span className="font-semibold text-slate-600">
                      {data.contact_information.email}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold text-lg ">Address</span> :{" "}
                    <span className="font-semibold text-slate-600">
                      {data.address}
                    </span>
                  </p>
                  <Link>
                    <button
                      onClick={() => handleApplyNow(data)}
                      className="mt-10 w-full border py-3 px-3 rounded-2xl bg-indigo-500 text-white font-semibold hover:bg-blue-700"
                    >
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ViewDetails;
