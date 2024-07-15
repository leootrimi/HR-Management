import React from 'react';
import './login.css';
import { ReactComponent as YourSvg } from '../../assets/login.svg';
import life from '../../assets/91life.jpg';

const Login = () => {
  return (
    <div className="login-container">
        <div className="circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
      <div className="login-page">
        <div className="left-section">
          <div className="circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>

          <div className="content">
            <h1>Welcome Back </h1>
            <p>To keep connected with us please login with your personal information</p>
            {/* <button className="sign-in-button">Sign In</button> */}
            <YourSvg className="svg-icon" />
          </div>
        </div>

        <div className="right-section">
          <img src={life} alt="Logo" className="logo" />
          <h2>Log In to your account to continue!</h2>
          <form>
            <input type="text" placeholder="Username or Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
