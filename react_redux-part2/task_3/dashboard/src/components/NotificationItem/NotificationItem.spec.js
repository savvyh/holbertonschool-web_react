import { render, fireEvent } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import NotificationItem from './NotificationItem';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('NotificationItem', () => {
  test('Render the NotificationItem component with default type and verify that it displays the notification text in blue', () => {
    const markAsRead = jest.fn();
    const { container } = render(
      <NotificationItem
        id={1}
        type="default"
        value="Test notification"
        markAsRead={markAsRead}
      />
    );

    const notificationElement = container.querySelector('[data-notification-type="default"]');
    expect(notificationElement).toBeInTheDocument();
    expect(notificationElement).toHaveTextContent('Test notification');
    expect(notificationElement).toHaveStyle({ color: 'blue' });

    fireEvent.click(notificationElement);
    expect(markAsRead).toHaveBeenCalledWith(1);
  });

  test('Render the NotificationItem component with urgent type and verify that it displays the notification text in red', () => {
    const markAsRead = jest.fn();
    const { container } = render(
      <NotificationItem
        id={2}
        type="urgent"
        value="Urgent notification"
        markAsRead={markAsRead}
      />
    );

    const notificationElement = container.querySelector('[data-notification-type="urgent"]');
    expect(notificationElement).toBeInTheDocument();
    expect(notificationElement).toHaveTextContent('Urgent notification');
    expect(notificationElement).toHaveStyle({ color: 'red' });

    fireEvent.click(notificationElement);
    expect(markAsRead).toHaveBeenCalledWith(2);
  });
});
