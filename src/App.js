import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import SideBar from './Components/SideBar/SideBar';
import HomePage from './pages/HomePage';

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
