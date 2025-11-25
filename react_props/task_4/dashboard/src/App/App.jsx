import React, { Fragment } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';

function App({ isLoggedIn = true }) {
  const notificationsList = [
    {
      id: 1,
      type: 'urgent',
      value: 'Notification available now'
    },
    {
      id: 2,
      type: 'urgent',
      value: 'Notification available now'
    },
    {
      id: 3,
      type: 'urgent',
      html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' }
    }
  ];

  const coursesList = [
    
  ];

  return (
    <Fragment>
      <div className="root-notifications">
        <Notifications notifications={notificationsList} />
      </div>
      <Header />
      <div className="App-body">
        {isLoggedIn ? (
          <CourseList courses={coursesList} />
        ) : (
          <Login />
        )}
      </div>
      <Footer />
    </Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: true
};

export default App;