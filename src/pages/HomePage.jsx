import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUserCheck, faEllipsisH } from '@fortawesome/free-solid-svg-icons'; // Import icons for metrics
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import Chart from 'chart.js/auto'; 
import './HomePage.css';

const HomePage = () => {
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);

  useEffect(() => {
    // Sample data for line chart (replace with your actual data)
    const data1 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Sales',
          data: [65, 59, 20, 81, 56, 55, 40],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };

    // Line chart configuration
    const config1 = {
      type: 'line',
      data: data1,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const data2 = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: ['#433D8B', '#2E236C', '#17153B'],
          hoverOffset: 4,
        },
      ],
    };

    const config2 = {
      type: 'pie',
      data: data2,
    };

    // Initialize the charts
    if (chartRef1.current && chartRef2.current) {
      const myChart1 = new Chart(chartRef1.current, config1);
      const myChart2 = new Chart(chartRef2.current, config2);
      return () => {
        myChart1.destroy();
        myChart2.destroy();
      }; // Cleanup on component unmount
    }
  }, []);

  return (
    <div className="home-page">
      {/* Navbar */}
      <div className="navbar">
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="profile-icon">
          {/* Profile icon */}
          <FontAwesomeIcon icon={faUser} size="lg" />
        </div>
      </div>

      {/* Metrics section */}
      <div className="metrics">
        <div className="metric-box">
          <FontAwesomeIcon className="icons" icon={faBuilding} size="2x" />
          <div className="metric-content">
            <h2>Employers</h2>
            <p>1234</p>
          </div>
        </div>
        <div className="metric-box">
          <FontAwesomeIcon className="icons" icon={faUserCheck} size="2x" />
          <div className="metric-content">
            <h2>Active</h2>
            <p>567</p>
          </div>
        </div>
        <div className="metric-box">
          <FontAwesomeIcon className="icons" icon={faEllipsisH} size="2x" />
          <div className="metric-content">
            <h2>...</h2>
            <p>...</p>
          </div>
        </div>
        <div className="metric-box">
          <FontAwesomeIcon className="icons" icon={faEllipsisH} size="2x" />
          <div className="metric-content">
            <h2>...</h2>
            <p>...</p>
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
