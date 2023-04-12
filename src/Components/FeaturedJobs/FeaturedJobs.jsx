import React, { useEffect, useState } from 'react';
import FeaturedJobsDetails from '../FeaturedJobsDetails/FeaturedJobsDetails';
import { Link } from 'react-router-dom';

const FeaturedJobs = () => {
    let [feature , setFeature] = useState([])
    let[seeMore, setSeeMore] = useState(false)
    let SeeMoreData =()=>{
      setSeeMore(true);
    }
    useEffect(() =>{
fetch("Feature.json")
  .then((res) => res.json())
  .then((data) => setFeature(data));
    },[])
    return (
      <div className="container">
        <h1 className="text-center mt-36 text-4xl font-bold">Featured Jobs</h1>
        <p className="text-center font-semibold mt-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 lg:px-0">
          {feature.slice(0, seeMore ? 6 : 4).map((data) => (
            <FeaturedJobsDetails
              key={data.id}
              data={data}
            ></FeaturedJobsDetails>
          ))}
        </div>

        <section className="text-center mt-12">
          {!seeMore && (
            <Link
              onClick={SeeMoreData}
              className="px-4 py-3 rounded-xl bg-indigo-500 text-white font-semibold"
            >
              See All Jobs
            </Link>
          )}
        </section>
      </div>
    );
};

export default FeaturedJobs;