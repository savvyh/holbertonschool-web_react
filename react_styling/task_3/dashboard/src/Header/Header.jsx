import logo from '../assets/holberton-logo.jpg';
import React from 'react';

function Header() {
  return (
    <div className="flex items-center p-5 border-b-[3px] border-main-color">
      <img src={logo} alt="holberton logo" className="w-[200px] h-auto mr-5"/>
      <h1 className="text-[2rem] text-main-color">School dashboard</h1>
    </div>
  );
}

export default Header;