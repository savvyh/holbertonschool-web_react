import React, { Fragment, Component } from 'react';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import WithLogging from '../HOC/WithLogging';
import AppContext from '../Context/context';

const CourseListWithLogging = WithLogging(CourseList);
const LoginWithLogging = WithLogging(Login);

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);

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

    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      logOut: () => {},
      notifications: notificationsList,
      courses: coursesList
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);

    this.state.logOut = this.logOut;
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    });
  }

  logOut() {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      }
    });
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  markNotificationAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
    this.setState(prevState => ({
      notifications: prevState.notifications.filter(notification => notification.id !== id)
    }));
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.logOut();
    }
  }

  render() {
    const { displayDrawer, user, logOut, notifications, courses } = this.state;

    const contextValue = {
      user,
      logOut
    };

    return (
      <AppContext.Provider value={contextValue}>
        <Fragment>
          <div className="min-h-screen flex flex-col m-0">
            <div className="absolute top-0 right-0 z-10">
              <Notifications 
                notifications={notifications} 
                displayDrawer={displayDrawer} 
                handleDisplayDrawer={this.handleDisplayDrawer} 
                handleHideDrawer={this.handleHideDrawer}
                markNotificationAsRead={this.markNotificationAsRead}
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
                  <LoginWithLogging logIn={this.logIn} email={user.email} password={user.password} />
                </BodySectionWithMarginBottom>
              )}
              <BodySection title="News from the School">
                <p>ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, asperiores architecto blanditiis fuga doloribus sit illum aliquid ea distinctio minus accusantium, impedit quo voluptatibus ut magni dicta. Recusandae, quia dicta?</p>
              </BodySection>
            </div>
            <Footer />
          </div>
        </Fragment>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {};

export default App;