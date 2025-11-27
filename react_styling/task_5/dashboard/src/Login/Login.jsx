import React from 'react';

function Login() {
  return (
    <div className="flex flex-col p-5 pl-10 h-[45vh] border-t-4 border-main-color">
      <p className="text-xl">Login to access the full dashboard</p>
      <div className="mt-8 text-lg flex flex-col sm:block">
        <label htmlFor="email" className="pr-2">Email</label>
        <input type="email" name="user_email" id="email" className="border rounded w-full sm:w-auto" />
        <label htmlFor="password" className="pl-0 sm:pl-2 pr-2 mt-2 sm:mt-0">Password</label>
        <input type="password" name="user_password" id="password" className="border rounded w-full sm:w-auto" />
        <button className="cursor-pointer border px-1 rounded ml-0 sm:ml-2 mt-2 sm:mt-0 w-20 sm:w-auto">OK</button>
      </div>
    </div>
  );
}

export default Login;