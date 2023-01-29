import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Demonstration from './views/demonstration/demonstration.js';
import Home from './views/home/home.js';
import AboutUs from "./views/aboutUs/aboutUs.js";
import Testimonials from "./views/testimonials/testimonials.js";
import reportWebVitals from './reportWebVitals';
import "./index.css";
import ContactUs from './views/contactUs/contactUs.js';
import Blog from "./views/blog/blog.js";

const router = createBrowserRouter([
  {
    path: "/demonstration",
    element: <Demonstration/>
  },
  {
    path: "/aboutUs",
    element: <AboutUs/>
  },
  {
    path: "/blog",
    element: <Blog/>
  },
  {
    path: "/testimonials",
    element: <Testimonials/>
  },
  {
    path: "/contactUs",
    element: <ContactUs/>
  },
  {
    path: "*",
    element: <Home/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();