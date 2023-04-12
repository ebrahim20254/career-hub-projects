import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Blog from './Components/Blog';
import Statistics from './Components/Statistics';
import Jobs from './Components/Jobs';
 
const router = createBrowserRouter([
  {
  path: '/',
  element: <App></App>,
  children:([
    {
      path: '/',
      element:<Home></Home>
    },
    {
      path:'/Statistics',
      element: <Statistics></Statistics>
    },
    {
      path:'/jobs',
      element:<Jobs></Jobs>
    },
    {
      path: '/blog',
      element: <Blog></Blog>
    },
  ])
 },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
