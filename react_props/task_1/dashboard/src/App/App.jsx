import { Fragment } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { getLatestNotification } from '../utils/utils';

function App() {
  const notificationsList = [
    {
      id: 1,
      type: 'default',
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
      html: { __html: getLatestNotification() }
    }
  ];

  return (
    <Fragment>
      <div className="root-notifications">
        <Notifications notifications={notificationsList} />
      </div>
      <Header />
      <Login />
      <Footer />
    </Fragment>
  );
}

export default App;