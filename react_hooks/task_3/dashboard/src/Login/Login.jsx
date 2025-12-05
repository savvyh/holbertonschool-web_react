import { useState } from 'react';
import PropTypes from 'prop-types';

function Login ({logIn, email: loginEmail = '', password: loginPassword = ''}) {
  const [formData, setFormData] = useState({ 
    email: loginEmail, 
    password: loginPassword 
  });
  const [enableSubmit, setEnableSubmit] = useState(false)

  const checkEnableSubmit = (currentEmail, currentPassword) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(currentEmail);
    const isValidPassword = currentPassword.length >= 8;
    return isValidEmail && isValidPassword;
  }


  const handleChangeEmail = (event) => {
    const newEmail = event.target.value;
    setFormData({ ...formData, email: newEmail });

    const isValidEmail = checkEnableSubmit(newEmail, formData.password);
    setEnableSubmit(isValidEmail);
  }

  const handleChangePassword = (event) => {
    const newPassword = event.target.value;
    setFormData({ ...formData, password: newPassword });

    const isValidPassword = checkEnableSubmit(formData.email, newPassword);
    setEnableSubmit(isValidPassword);
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    logIn(formData.email, formData.password);
  }

    return (
      <div className="flex flex-col p-5 pl-10 h-[45vh] border-t-4 border-main-color">
        <p className="text-xl">Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit} className="mt-8 text-lg flex flex-col sm:block">
          <label htmlFor="email" className="pr-2">Email</label>
          <input
            type="email"
            name="user_email"
            id="email"
            value={formData.email}
            onChange={handleChangeEmail}
            className="border rounded w-full sm:w-auto"
          />
          <label htmlFor="password" className="pl-0 sm:pl-2 pr-2 mt-2 sm:mt-0">Password</label>
          <input
            type="password"
            name="user_password"
            id="password"
            value={formData.password}
            onChange={handleChangePassword}
            className="border rounded w-full sm:w-auto"
          />
          <input
            type="submit"
            value="OK"
            disabled={!enableSubmit}
            className={`cursor-pointer border px-1 rounded ml-0 sm:ml-2 mt-2 sm:mt-0 w-20 sm:w-auto ${!enableSubmit ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
        </form>
      </div>
    );
  }

Login.propTypes = {
  logIn: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string
};

Login.defaultProps = {
  logIn: () => {},
  email: '',
  password: ''
};

export default Login;