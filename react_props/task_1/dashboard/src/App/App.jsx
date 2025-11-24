import { Fragment } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

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
      html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' }
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