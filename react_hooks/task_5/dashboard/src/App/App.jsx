import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { getLatestNotification } from '../utils/utils';
import AppContext from '../Context/context';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import WithLogging from '../HOC/WithLogging';

const CourseListWithLogging = WithLogging(CourseList);
const LoginWithLogging = WithLogging(Login);

function App() {
  const [displayDrawer, setDisplayDrawer] = useState(true);
  const [user, setUser] = useState({ email: '', password: '', isLoggedIn: false });
  const [notifications, setNotifications] = useState([]);
  const [courses, setCourses] = useState([]);

  const logIn = useCallback((email, password) => {
    setUser({
      email,
      password,
      isLoggedIn: true
    });
  }, []);

  const logOut = useCallback(() => {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false
    });
  }, []);

  const handleDisplayDrawer = useCallback(() => {
    setDisplayDrawer(true);
  }, []);

  const handleHideDrawer = useCallback(() => {
    setDisplayDrawer(false);
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    console.log(`Notification ${id} has been marked as read`);
    setNotifications(prevNotifications =>
      prevNotifications.filter(notification => notification.id !== id)
    );
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/notifications.json');
        const notificationsData = response.data.map(notification => {
          if (notification.html === '__LATEST_NOTIFICATION__') {
            return {
              ...notification,
              html: { __html: getLatestNotification() }
            };
          }
          return notification;
        });
        setNotifications(notificationsData);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/courses.json');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, [user]);

  return (
    <AppContext.Provider value={{ user: user, logOut: logOut }}>
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

export default App;