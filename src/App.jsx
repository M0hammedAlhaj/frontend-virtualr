import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import React from "react";
import Features from "./components/Features"; 
import Workflow from "./components/Workflow";
const App = () => {
  return (
    <>
      <div className="flex flex-col gap-[10rem] w-full ">
        <Navbar />
        <Hero/>
        <Features />
        <Workflow/>
      </div>
    </>
  );
};

export default App;
