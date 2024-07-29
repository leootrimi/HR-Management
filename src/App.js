import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import SideBar from './Components/SideBar/SideBar';
import HomePage from './pages/HomePage';
import Employers from './pages/Employers';
import AddUser from './pages/AddUser';
import Schedule from './pages/Schedule';
import JobsPage from './pages/JobsPage'
import HRNotifications from './pages/HRNotifications';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/admin/*"
            element={
              <div className="main-layout1">
                <SideBar className="SideBar" />
                <div className="content1">
                  <Routes>
                    <Route path="/dashboard" element={<HomePage />} />
                    <Route path="/employers" element={<Employers />} />
                    <Route path="/add" element={<AddUser />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/jobs" element={<JobsPage />} />
                    <Route path="/requests" element={<HRNotifications />} />
                    
                  </Routes>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
