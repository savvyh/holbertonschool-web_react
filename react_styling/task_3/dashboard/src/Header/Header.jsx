import logo from '../assets/holberton-logo.jpg';
import React from 'react';

function Header() {
  return (
    <div className="flex items-center py-2">
      <img src={logo} alt="holberton logo" className="w-[200px] h-auto mr-5"/>
      <h1 className="text-[2rem] text-main-color font-bold">School dashboard</h1>
    </div>
  );
}

export default Header;