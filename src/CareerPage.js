import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import jobsData from './data/jobs';
const CareerPage = () => {
    const [departmentFilter, setDepartmentFilter] = useState(''); 
  const [titleSearch, setTitleSearch] = useState(''); 

  const handleDepartmentChange = (e) => {
    setDepartmentFilter(e.target.value);
  };

  const handleTitleSearch = (e) => {
    setTitleSearch(e.target.value);
  };

  const filteredJobs = jobsData.filter((job) => {
    const matchesDepartment =
      departmentFilter === '' || job.department === departmentFilter;
    const matchesTitle =
      titleSearch === '' ||
      job.title.toLowerCase().includes(titleSearch.toLowerCase());
    return matchesDepartment && matchesTitle;
  });

  return (
    <div className="container">
         <h1 className="mb-3 text-center p-2 text-primary">Lystloc Career Page</h1>
      <h3 className="mb-3">Opening Position</h3>
      <div className="row mb-3">
      <div className="col-md-4">
        <select value={departmentFilter}  className="form-select" onChange={handleDepartmentChange}>
          <option value="">All</option>
          <option value="IT">IT</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>
      <div className="col-md-4">
        <input
          type="text"
          className="form-select"
          value={titleSearch}
          onChange={handleTitleSearch}
          placeholder="Which role you're looking for?"
        />
      </div>
      </div>
      <div className="row">
      {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default CareerPage;
