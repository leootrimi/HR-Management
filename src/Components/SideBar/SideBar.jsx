import React from 'react';
import { ReactComponent as YourSvg } from '../../assets/life.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBriefcase, faCalendar, faUsers, faEnvelope, faChartLine, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <YourSvg className="svg-icon" />
        <h1>Feel Change</h1>
      </div>
      <div className="items">
      <ul>
        <li className="active">
          <a href="#dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
            Dashboard
          </a>
        </li>
        <li>
          <a href="#jobs">
            <FontAwesomeIcon icon={faBriefcase} className="icon" />
            Jobs
          </a>
        </li>
        <li>
          <a href="#schedule">
            <FontAwesomeIcon icon={faCalendar} className="icon" />
            Schedule
          </a>
        </li>
        <li>
          <a href="#emplyoers">
            <FontAwesomeIcon icon={faUsers} className="icon" />
            Employers
          </a>
        </li>
        <li>
          <a href="#messages">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            Requests
          </a>
        </li>
        <li>
          <a href="#analysis">
            <FontAwesomeIcon icon={faChartLine} className="icon" />
            Analysis
          </a>
        </li>
        <li>
          <a href="#logout">
            <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
            Logout
          </a>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default SideBar;
