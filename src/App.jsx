import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import JobBox from "./Components/JobBox";
import JobApplicationForm from "./Components/JobApplicationForm";
import Home from "./Home";
import Card from "./Card";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/JobList" element={<JobBox />} />
        <Route path="/form" element={<JobApplicationForm />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
