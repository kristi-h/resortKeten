import "./App.css";
import Landing from "./components/modules/Landing";
import Cal from "./components/Cal";
import Contact from "./components/Contact";
import { useState } from "react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import { NavLink } from "react-router-dom";
import Header from "./components/ui/Header";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  return (
    <BrowserRouter router={router}>
      <div className="container">
        <div className="bg-none">
          <Header />

          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            ></div>
            {/* <Routes> */}
            <Landing />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          ></div>
        </div>
      </div>
    </BrowserRouter>
  );
}
