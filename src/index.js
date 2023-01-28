import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Demonstration from './views/demonstration/demonstration.js';
import Home from './views/home/home.js';
import reportWebVitals from './reportWebVitals';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/demonstration",
    element: <Demonstration/>
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