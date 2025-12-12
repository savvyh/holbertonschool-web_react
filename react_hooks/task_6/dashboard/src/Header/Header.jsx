import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/holberton-logo.jpg';

function Header({ user, logOut }) {
  const handleLogoutClick = (event) => {
    event.preventDefault();
    logOut();
  };

  return (
    <>
      <div className="flex items-center py-2 max-[519px]:flex-col max-[519px]:items-center">
        <img src={logo} alt="holberton logo" className="w-[200px] h-auto mr-5 max-[519px]:mr-0 max-[519px]:mb-5"/>
        <h1 className="text-[2rem] text-main-color font-bold max-[519px]:text-[1.5rem]">School dashboard</h1>
      </div>
      {user.isLoggedIn && (
        <div id="logoutSection">
          Welcome {user.email} (<a href="#" onClick={handleLogoutClick}>logout</a>)
        </div>
      )}
    </>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    isLoggedIn: PropTypes.bool
  }),
  logOut: PropTypes.func
};

Header.defaultProps = {
  user: {
    email: '',
    password: '',
    isLoggedIn: false
  },
  logOut: () => {}
};

export default Header;