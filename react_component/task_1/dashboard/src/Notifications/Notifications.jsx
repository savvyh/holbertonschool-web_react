import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

function Notifications({ notifications = [], displayDrawer = false }) {
  const handleClose = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="notifications-container">
      <div className="notification-title">Your notifications</div>
      {displayDrawer && (
        <div className="notification-items">
          <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
            aria-label="Close"
            onClick={handleClose}
          >
            <img src={closeIcon} alt="close icon" style={{ width: '15px', height: '15px' }} />
          </button>
          {notifications.length === 0 ? (
            <p className="no-notification-message">No new notification for now</p>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string
      })
    })
  ),
  displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
  notifications: [],
  displayDrawer: false
};

export default Notifications;