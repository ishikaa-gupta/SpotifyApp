import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

export default function Navbar({ code }) {
  return (
    <div className="main-container">
      <div className="topbar">
        <div className="prev-next-buttons">
          <button type="button" className="fa fas fa-chevron-left"></button>
          <button type="button" className="fa fas fa-chevron-right"></button>
        </div>

        <div className="navbar">
          <ul>
            <li>
              <a href="#">Premium</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
            <li className="divider">|</li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>

          {code ? <Dashboard code={code} /> : <Login />}
        </div>
      </div>
    </div>
  );
}