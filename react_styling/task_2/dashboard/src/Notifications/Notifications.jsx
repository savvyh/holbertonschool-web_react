import React, { Component } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.notifications.length !== this.props.notifications.length;
  }

  handleClose() {
    console.log('Close button has been clicked');
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { notifications, displayDrawer } = this.props;

    return (
      <div className="notifications-container flex flex-col items-end">
        <div className="notification-title text-right">Your notifications</div>
        {displayDrawer && (
          <div className="notification-items w-1/4 border-2 border-dashed border-main-color p-1.5 relative">
            <button
              className="absolute top-2.5 right-2.5 bg-transparent border-none cursor-pointer"
              aria-label="Close"
              onClick={this.handleClose}
            >
              <img src={closeIcon} alt="close icon" className="w-[15px] h-[15px]" />
            </button>
            {notifications.length === 0 ? (
              <ul>
                <li className="no-notification-message text-urgent-notification-item cursor-default">No new notification for now</li>
              </ul>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
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
  displayDrawer: true
};

export default Notifications;