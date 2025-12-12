import React, { useReducer, useCallback, useEffect } from 'react';
import axios from 'axios';
import { getLatestNotification } from '../utils/utils';
import { appReducer, initialState, APP_ACTIONS } from './appReducer';
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
  const [state, dispatch] = useReducer(appReducer, initialState);

  const logIn = useCallback((email, password) => {
    dispatch({
      type: APP_ACTIONS.LOGIN,
      payload: { email, password }
    });
  }, []);

  const logOut = useCallback(() => {
    dispatch({ type: APP_ACTIONS.LOGOUT });
  }, []);

  const handleDisplayDrawer = useCallback(() => {
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER });
  }, []);

  const handleHideDrawer = useCallback(() => {
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER });
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    console.log(`Notification ${id} has been marked as read`);
    dispatch({
      type: APP_ACTIONS.MARK_NOTIFICATION_READ,
      payload: { id }
    });
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
        dispatch({
          type: APP_ACTIONS.SET_NOTIFICATIONS,
          payload: { notifications: notificationsData }
        });
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
        dispatch({
          type: APP_ACTIONS.SET_COURSES,
          payload: { courses: response.data }
        });
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, [state.user]);

  return (
    <div className="min-h-screen flex flex-col m-0">
      <div className="absolute top-0 right-0 z-10">
        <Notifications
          notifications={state.notifications}
          displayDrawer={state.displayDrawer}
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
          markNotificationAsRead={markNotificationAsRead}
        />
      </div>
      <Header user={state.user} logOut={logOut} />
      <div className="flex-1 px-4 md:px-8">
        {state.user.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseListWithLogging courses={state.courses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <LoginWithLogging logIn={logIn} email={state.user.email} password={state.user.password} />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p>ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, asperiores architecto blanditiis fuga doloribus sit illum aliquid ea distinctio minus accusantium, impedit quo voluptatibus ut magni dicta. Recusandae, quia dicta?</p>
        </BodySection>
      </div>
      <Footer user={state.user} />
    </div>
  );
}

export default App;