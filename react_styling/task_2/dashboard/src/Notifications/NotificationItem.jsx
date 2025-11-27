import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { markAsRead, id } = this.props;
    if (markAsRead) {
      markAsRead(id);
    }
  }
  render() {
    const { type, html, value } = this.props;
    const textColor = type === 'urgent'
      ? 'text-urgent-notification-item'
      : 'text-default-notification-item';
    const bulletColor = type === 'urgent'
      ? 'bg-urgent-notification-item'
      : 'bg-default-notification-item';

    return (
      <li
        data-notification-type={type}
        className="flex items-center cursor-pointer gap-2 text-sm"
        onClick={this.handleClick}
      >
        <span
          className={`h-[6px] w-[6px] ${bulletColor}`}
          aria-hidden="true"
        />
        {html ? (
          <span className={textColor} dangerouslySetInnerHTML={html} />
        ) : (
          <span className={textColor}>{value}</span>
        )}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  html: null,
  value: '',
  markAsRead: () => {}
};

export default NotificationItem;