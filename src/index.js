import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./routes/Home.jsx"
import { Signin } from "./routes/Signin.jsx"
import { Login } from "./routes/Login.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "login",
    Component: Login
  },
  {
    path: "signin",
    Component: Signin
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);