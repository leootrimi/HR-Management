import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faClock, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './JobsPage.css';

const JobsPage = () => {
  const initialJobs = [
    { title: 'Software Developer', company: 'Tech Corp', salary: '$100k', status: 'Open' },
    { title: 'Product Manager', company: 'Innovate Ltd.', salary: '$90k', status: 'Open' },
    { title: 'UX Designer', company: 'Design Co.', salary: '$80k', status: 'Closed' },
  ];

  const [allJobs, setAllJobs] = useState(initialJobs);

  const handleStatusChange = (index, newStatus) => {
    const updatedJobs = [...allJobs];
    updatedJobs[index].status = newStatus;
    setAllJobs(updatedJobs);
  };

  const availableJobs = allJobs.filter(job => job.status === 'Open');

  return (
    <div className="jobs-page">
      {/* All Jobs Section */}
      <div className="jobs-section">
        <div className="jobs-header">All Jobs</div>
        <div className="stat-group">
          {allJobs.map((job, index) => (
            <div className="job-box" key={index} style={{ backgroundColor: '#ffffff' }}>
              <div className="job-box-content">
                <FontAwesomeIcon icon={faBriefcase} size="2x" className="icons" />
                <div className="job-content">
                  <div className="job-content-left">
                    <div className="job-title">{job.title}</div>
                    <div className="job-company">{job.company}</div>
                  </div>
                  <div className="job-content-right">
                    <div className="job-salary">{job.salary}</div>
                    <div className="job-status">
                      <select
                        className="job-status-select"
                        value={job.status}
                        onChange={(e) => handleStatusChange(index, e.target.value)}
                      >
                        <option value="Open">Open</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Jobs Section */}
      <div className="jobs-section">
        <div className="jobs-header">Available Jobs to Hire</div>
        <div className="stat-group">
          {availableJobs.length > 0 ? (
            availableJobs.map((job, index) => (
              <div className="job-box" key={index} style={{ backgroundColor: '#ffffff' }}>
                <div className="job-box-content">
                  <FontAwesomeIcon icon={faClock} size="2x" className="icons" />
                  <div className="job-content">
                    <div className="job-content-left">
                      <div className="job-title">{job.title}</div>
                      <div className="job-company">{job.company}</div>
                    </div>
                    <div className="job-content-right">
                      <div className="job-salary">{job.salary}</div>
                      <div className="job-status">
                        <select
                          className="job-status-select"
                          value={job.status}
                          onChange={(e) => handleStatusChange(index, e.target.value)}
                        >
                          <option value="Open">Open</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No available jobs to hire.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
