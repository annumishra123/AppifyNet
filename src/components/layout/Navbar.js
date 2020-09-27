import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-secondary mb-5">
        <div className="container">
          <div className="navbar-header">
          <p className="navbar-brand text-white text-md brand-text">
          AppifyNet
            </p>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
            </li>
            <li className="nav-item d-inline-block mr-4">
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
