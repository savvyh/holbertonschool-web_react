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
    const { notifications, displayDrawer = true } = this.props;

    return (
      <div className="flex flex-col items-end gap-2 pr-4">
        <p className="text-right font-medium">Your notifications</p>
        {displayDrawer && (
          <div className="relative max-w-md border-2 border-dashed border-main-color px-6 py-4">
            {notifications.length > 0 ? (
              <>
                <p className="mb-4 text-sm font-medium">Here is the list of notifications</p>
                <button
                  type="button"
                  className="absolute right-4 top-3 bg-transparent border-0 cursor-pointer"
                  onClick={this.handleClose}
                >
                  <img src={closeIcon} alt="close icon" className="w-[15px] h-[15px]" />
                </button>
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
            ) : (
              <p className="text-sm">No new notification for now</p>
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