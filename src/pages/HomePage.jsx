import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUserCheck, faEllipsisH, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { initializeCharts } from '../utils/homepage'; // Adjust the path if necessary
import './HomePage.css';

const HomePage = () => {
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);

  useEffect(() => {
    // Initialize the charts and get cleanup function
    const cleanupCharts = initializeCharts([chartRef1, chartRef2]);
    
    // Cleanup on component unmount
    return () => cleanupCharts();
  }, []);

  return (
    <div className="home-page">
      {/* Navbar */}
      <div className="navbar">
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
        <FontAwesomeIcon icon={faUser} className="profile-icon" />
      </div>

      {/* Metrics section */}
      <div className="metrics">
        <div className="metric-box">
          <div className="metric-content">
            {/* <FontAwesomeIcon icon={faBuilding} className="metric-icon" /> */}
            <div>
              <div className="stat-label">Employers</div>
              <div className="stat-number">1234</div>
            </div>
          </div>
        </div>
        <div className="metric-box">
          <div className="metric-content">
            {/* <FontAwesomeIcon icon={faUserCheck} className="metric-icon" /> */}
            <div>
              <div className="stat-label">Active</div>
              <div className="stat-number">567</div>
            </div>
          </div>
        </div>
        <div className="metric-box">
          <div className="metric-content">
            {/* <FontAwesomeIcon icon={faEllipsisH} className="metric-icon" /> */}
            <div>
              <div className="stat-label">...</div>
              <div className="stat-number">...</div>
            </div>
          </div>
        </div>
        <div className="metric-box">
          <div className="metric-content">
            {/* <FontAwesomeIcon icon={faEllipsisH} className="metric-icon" /> */}
            <div>
              <div className="stat-label">...</div>
              <div className="stat-number">...</div>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis section with charts */}
      <div className="analysis">
        {/* Line chart */}
        <div className="ref1">
          <canvas ref={chartRef1}></canvas>
        </div>
        {/* Pie chart */}
        <div className="ref2">
          <canvas ref={chartRef2}></canvas>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
