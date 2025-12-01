import logo from '../assets/holberton-logo.jpg';
import React from 'react';

function Header() {
  return (
    <div className="flex items-center py-2 max-[519px]:flex-col max-[519px]:items-center">
      <img src={logo} alt="holberton logo" className="w-[200px] h-auto mr-5 max-[519px]:mr-0 max-[519px]:mb-5"/>
      <h1 className="text-[2rem] text-main-color font-bold max-[519px]:text-[1.5rem]">School dashboard</h1>
    </div>
  );
}

export default Header;