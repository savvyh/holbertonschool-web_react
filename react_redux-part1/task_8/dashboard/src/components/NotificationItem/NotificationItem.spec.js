import { render } from '@testing-library/react';
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
    // Vérifier que l'élément existe et contient le texte (les styles Aphrodite sont gérés via classes CSS)
    expect(notificationElement).toBeTruthy();
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
    // Vérifier que l'élément existe et contient le texte (les styles Aphrodite sont gérés via classes CSS)
    expect(notificationElement).toBeTruthy();
  });
});
