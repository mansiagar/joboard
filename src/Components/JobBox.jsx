import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobItem from "./JobItem";
import Navbar from "./Navbar";

const JobBox = () => {
  const [JobList, SetJobList] = useState([]);
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://remotive.com/api/remote-jobs")
      .then((response) => response.json())
      .then((data) => {
        SetJobList(data.jobs);
        setLoading(false);
      })
      .catch((error) => {
        console.error("error", error);
        setLoading(false);
      });
  }, []);
  const handleApplyClick = (company_name) => {
    // Pass the company_name to the /form route
    navigate("/form", { state: { company_name } });
  };
  return (
    <div>
      <Navbar />
      {Loading ? (
        <h1>Loading.....</h1>
      ) : (
        JobList.map((JobListItem) => (
          <JobItem
            key={JobListItem.id}
            id={JobListItem.id}
            title={JobListItem.title}
            company_name={JobListItem.company_name}
            candidate_required_location={
              JobListItem.candidate_required_location
            }
            job_type={JobListItem.job_type}
            salary={JobListItem.salary}
            onApply={handleApplyClick}
          />
        ))
      )}
    </div>
  );
};

export default JobBox;
