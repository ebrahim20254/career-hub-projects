import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Cover from "./Components/Cover/Cover";
import JobCategory from "./Components/JobCategory/JobCategory";
import Statistics from "./Components/Statistics/Statistics";
import Blog from "./Components/Blog/Blog";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import ViewDetails from "./Components/ViewDetails/ViewDetails";
import FourouFour from "./Components/FourouFour/FourouFour";


const router = createBrowserRouter([
  {path:'*' , element:<FourouFour></FourouFour>},
  {
    
    path: "/",
    element: <Header></Header>,
    children: [
      { path: "/", element: <Cover></Cover> },
      { path: "statistics", element: <Statistics></Statistics> },
      { path: "blog", element: <Blog></Blog> },
      { path: "appliedJobs", element: <AppliedJobs></AppliedJobs> },
      { path: "viewDetails/:idd" , element:<ViewDetails></ViewDetails>,
    loader:() => fetch("/Feature.json")
    },
      
    ],
  },
  { path: "/", element: <Footer></Footer> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
