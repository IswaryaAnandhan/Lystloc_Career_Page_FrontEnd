import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "../Components/JobCard";
import JobDetails from "../Components/JobDetails";

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJobId, setSelectedJobId] = useState("");

  useEffect(() => {
    getAllJobs();
    getDepartments();
  }, []);

  const getAllJobs = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/get_all_jobs",
        {}
      );
      setJobs(response.data);
      setFilteredJobs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getDepartments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/departments");
      setDepartments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDepartmentChange = (event) => {
    const selectedDepartment = event.target.value;
    setSelectedDepartment(selectedDepartment);
    filterJobs(selectedDepartment, searchTerm);
  };

  const handleSearchTermChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    filterJobs(selectedDepartment, searchTerm);
  };

  const filterJobs = (department, searchTerm) => {
    let filteredJobs = jobs;
    if (department) {
      filteredJobs = filteredJobs.filter((job) =>
        job.depart.includes(department)
      );
    }
    if (searchTerm) {
      filteredJobs = filteredJobs.filter((job) =>
        job.job_title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredJobs(filteredJobs);
  };

  const handleJobDetails = (jobId) => {
    setSelectedJobId(jobId);
  };

  return (
    <div className="container">
      <h1 className="mb-3 text-center p-2 text-primary">Lystloc Career Page</h1>
      <h3 className="mb-3">Opening Position</h3>
      <div className="row mb-3">
        <div className="col-md-4">
          <select
            value={selectedDepartment}
            className="form-select"
            onChange={handleDepartmentChange}
          >
            <option value="">All Departments</option>
            {departments.map((department) => (
              <option key={department.depart_id} value={department.depart_name}>
                {department.depart_name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-select"
            value={searchTerm}
            onChange={handleSearchTermChange}
            placeholder="Which role you're looking for?"
          />
        </div>
      </div>
      <div className="row">
        {filteredJobs.map((job) => (
          <JobCard key={job.job_id} job={job} handleJobDetails={handleJobDetails} />
        ))}
      </div>
      {selectedJobId && (
        <JobDetails
          jobId={selectedJobId}
          handleGoBack={() => setSelectedJobId("")}
        />
      )}
    </div>
  );
};

export default Career;
