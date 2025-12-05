import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import WithLogging from '../HOC/WithLogging';
import React, { useState, useEffect } from 'react';
import AppContext from '../Context/context';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import Footer from '../Footer/Footer';


const CourseListWithLogging = WithLogging(CourseList);
const LoginWithLogging = WithLogging(Login);

function App() {
  const notificationsList = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
  ];

  const coursesList = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  const [displayDrawer, setDisplayDrawer] = useState(false)
  const [user, setUser] = useState({email: '', password: '', isLoggedIn: false})
  const [notifications, setNotifications] = useState(notificationsList);
  const [courses, setCourses] = useState(coursesList);

  const logIn = (email, password) => {
    setUser({
      email: email,
      password: password,
      isLoggedIn: true,
    })
  }

  const logOut = () => {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false,
    })
  }

  const handleDisplayDrawer = () => {
    setDisplayDrawer(true);
  }

  const handleHideDrawer = () => {
    setDisplayDrawer(false);
  }

  const markNotificationAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
    setNotifications(prevNotifications  => (
      prevNotifications.filter(notification => notification.id !== id)
    ));
  }

  const contextValue = {
    user,
    logOut
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'h') {
        event.preventDefault();
        alert('Logging you out');
        logOut();
      }
    };
  
    document.addEventListener('keydown', handleKeyDown);
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <AppContext.Provider value={contextValue}>
        <div className="min-h-screen flex flex-col m-0">
          <div className="absolute top-0 right-0 z-10">
            <Notifications 
              notifications={notifications} 
              displayDrawer={displayDrawer} 
              handleDisplayDrawer={handleDisplayDrawer} 
              handleHideDrawer={handleHideDrawer}
              markNotificationAsRead={markNotificationAsRead}
            />
          </div>
          <Header />
          <div className="flex-1 px-4 md:px-8">
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseListWithLogging courses={courses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <LoginWithLogging logIn={logIn} email={user.email} password={user.password} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, asperiores architecto blanditiis fuga doloribus sit illum aliquid ea distinctio minus accusantium, impedit quo voluptatibus ut magni dicta. Recusandae, quia dicta?</p>
            </BodySection>
          </div>
          <Footer />
        </div>
    </AppContext.Provider>
  );
}

App.propTypes = {};

export default React.memo(App);