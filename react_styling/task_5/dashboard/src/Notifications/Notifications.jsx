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
    return (
      nextProps.notifications.length !== this.props.notifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  handleClose() {
    console.log('Close button has been clicked');
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { notifications, displayDrawer = true } = this.props;
    const shouldBounce = notifications.length > 0 && !displayDrawer;

    return (
      <div className="flex flex-col items-end gap-2 pr-4">
        <div className={`text-right font-medium ${shouldBounce ? 'animate-bounce' : ''}`}>
          Your notifications
        </div>
        {displayDrawer && (
          <div className="max-[912px]:fixed max-[912px]:top-0 max-[912px]:left-0 max-[912px]:w-full max-[912px]:h-full max-[912px]:bg-white max-[912px]:z-50 max-[912px]:border-none max-[912px]:p-0 relative max-w-md border-2 border-dashed border-main-color px-6 py-4">
            {notifications.length > 0 ? (
              <>
                <p className="text-sm font-medium max-[912px]:text-[20px] max-[912px]:mt-2">Here is the list of notifications</p>
                <button
                  type="button"
                  className="absolute right-4 top-3 bg-transparent border-0 cursor-pointer"
                  onClick={this.handleClose}
                >
                  <img src={closeIcon} alt="close icon" className="w-[15px] h-[15px]" />
                </button>
                <ul className="max-[912px]:p-[12px]">
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