import React from 'react';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
} from "recharts";



const Statistics = () => {
   const objects = [
     { id: 1, Assignment: "Assignment : 1", Marks: 58 },
     { id: 2, Assignment: "Assignment : 2", Marks: 55 },
     { id: 3, Assignment: "Assignment : 3", Marks: 60 },
     { id: 4, Assignment: "Assignment : 4", Marks: 60 },
     { id: 5, Assignment: "Assignment : 5", Marks: 58 },
     { id: 6, Assignment: "Assignment : 6", Marks: 49 },
     { id: 7, Assignment: "Assignment : 7", Marks: 60 },
     { id: 8, Assignment: "Assignment : 8", Marks: 60 },
   ]; 
    return (
      
      <div className='container mt-14 bg-indigo-50 py-10 mb-20'>
        <h1 className='text-center text-4xl font-bold mb-14'>Here is My marks from  Assignment 1 to 8 : </h1>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          width={1500}
          height={700}
          data={objects}
        >
          <PolarAngleAxis dataKey="Assignment"></PolarAngleAxis>
          <PolarRadiusAxis />
          <Radar fill="#808B96" stroke="#8884d8" dataKey="Marks"></Radar>
          <PolarGrid />
          <Tooltip></Tooltip>
        </RadarChart>
      </div>
      
    );
};

export default Statistics;