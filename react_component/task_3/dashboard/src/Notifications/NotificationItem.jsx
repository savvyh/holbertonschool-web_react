import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
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
    const { type, html, value, markAsRead } = this.props;
    const styles = {
      color: type === 'urgent' ? 'red' : 'blue',
      cursor: markAsRead ? 'pointer' : 'default'
    };

    if (html) {
      return (
        <li
          data-notification-type={type}
          style={styles}
          onClick={this.handleClick}
          dangerouslySetInnerHTML={html}
        />
      );
    }

    return (
      <li
        data-notification-type={type}
        style={styles}
        onClick={this.handleClick}
      >
        {value}
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