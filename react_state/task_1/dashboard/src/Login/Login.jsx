import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      enableSubmit: false
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email }, () => {
      this.checkEnableSubmit();
    });
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password }, () => {
      this.checkEnableSubmit();
    });
  }

  checkEnableSubmit() {
    const { email, password } = this.state;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = password.length >= 8;
    const enableSubmit = isValidEmail && isValidPassword;
    this.setState({ enableSubmit });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className="flex flex-col p-5 pl-10 h-[45vh] border-t-4 border-main-color">
        <p className="text-xl">Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit} className="mt-8 text-lg flex flex-col sm:block">
          <label htmlFor="email" className="pr-2">Email</label>
          <input
            type="email"
            name="user_email"
            id="email"
            value={email}
            onChange={this.handleChangeEmail}
            className="border rounded w-full sm:w-auto"
          />
          <label htmlFor="password" className="pl-0 sm:pl-2 pr-2 mt-2 sm:mt-0">Password</label>
          <input
            type="password"
            name="user_password"
            id="password"
            value={password}
            onChange={this.handleChangePassword}
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
}

export default Login;