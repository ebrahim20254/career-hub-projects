import React, { useEffect, useState } from 'react';
import JobCategoryCard from '../JobCategoryCard/JobCategoryCard';


const JobCategory = () => {
   const [categories, setCategories] = useState([])
   useEffect(() =>{
fetch("category.json")
  .then((res) => res.json())
  .then((data) => setCategories(data));
   },[])
    return (
      <div className="mt-20">
        <h1 className="text-4xl text-center font-bold">Job Category List</h1>
        <p className="mt-5 text-center font-semibold">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="container gap-5 content-center items-center flex flex-col  lg:p-0 lg:flex-row justify-around mt-20">
          {categories.map((data) => (
            <JobCategoryCard key={data.id} data={data}></JobCategoryCard>
          ))}
        </div>
      </div>
    );
};

export default JobCategory;