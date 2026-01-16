import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  test('Render the NotificationItem component with default type and verify that it displays the notification text in blue', () => {
    const { container } = render(
      <NotificationItem
        id={1}
        type="default"
        value="Test notification"
        markAsRead={jest.fn()}
      />
    );

    const notificationElement = container.querySelector('[data-notification-type="default"]');
    expect(notificationElement).toBeInTheDocument();
    expect(notificationElement).toHaveTextContent('Test notification');
    expect(notificationElement).toHaveStyle({ color: 'blue' });
  });

  test('Render the NotificationItem component with urgent type and verify that it displays the notification text in red', () => {
    const { container } = render(
      <NotificationItem
        id={2}
        type="urgent"
        value="Urgent notification"
        markAsRead={jest.fn()}
      />
    );

    const notificationElement = container.querySelector('[data-notification-type="urgent"]');
    expect(notificationElement).toBeInTheDocument();
    expect(notificationElement).toHaveTextContent('Urgent notification');
    expect(notificationElement).toHaveStyle({ color: 'red' });
  });
});
