import React from 'react';

const JobCategoryCard = ({data}) => {
    let { category_logo, category_name, jobs_available } = data;
    return (
      <div className=''>
        <div className='border  rounded-2xl p-12 bg-indigo-50'>
          <img className='w-14' src={category_logo} alt="icons" />
          <p className='font-bold mt-5'>{category_name}</p>
          <p>{jobs_available} jobs available</p>
        </div>
      </div>
    );
};

export default JobCategoryCard;