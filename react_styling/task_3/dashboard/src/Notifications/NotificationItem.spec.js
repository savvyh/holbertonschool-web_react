import { render, screen, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  test('renders value text correctly', () => {
    render(
      <NotificationItem type="default" value="Test notification text" />
    );
    
    const notification = screen.getByText('Test notification text');
    expect(notification).toBeInTheDocument();
  });

  test('renders HTML content correctly when html prop is provided', () => {
    const htmlContent = { __html: '<strong>Urgent requirement</strong> - complete by EOD' };
    const { container } = render(
      <NotificationItem type="urgent" html={htmlContent} />
    );
    
    const liElement = container.querySelector('li');
    expect(liElement.innerHTML).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });

  test('calls markAsRead when notification item is clicked', () => {
    const markAsReadMock = jest.fn();
    const { container } = render(
      <NotificationItem id={1} type="default" value="Notification" markAsRead={markAsReadMock} />
    );

    const liElement = container.querySelector('li');
    fireEvent.click(liElement);

    expect(markAsReadMock).toHaveBeenCalledWith(1);
  });
});