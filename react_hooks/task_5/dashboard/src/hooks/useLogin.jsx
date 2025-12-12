import { useState } from 'react';

function useLogin(onLogin, loginEmail = '', loginPassword = '') {
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
    onLogin(formData.email, formData.password);
  }
  
  return {
    formData,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleLoginSubmit
  };
}

export default useLogin;