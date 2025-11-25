import './Header.css';
import logo from '../assets/holberton-logo.jpg';
import React from 'react';

function Header() {
  return (
    <div className="App-header">
      <img src={logo} alt="holberton logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;