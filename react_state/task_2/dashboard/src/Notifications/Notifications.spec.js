import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  const sampleNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
  ];

  test('always renders the notification title', () => {
    render(<Notifications notifications={sampleNotifications} />);
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
  });

  test('hides drawer content when displayDrawer is false', () => {
    render(<Notifications notifications={sampleNotifications} displayDrawer={false} />);

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  test('shows drawer content when displayDrawer is true', () => {
    render(<Notifications notifications={sampleNotifications} displayDrawer={true} />);

    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(sampleNotifications.length);
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
    expect(screen.getByText(/urgent requirement/i)).toBeInTheDocument();
  });

  test('logs to console when clicking close button while drawer visible', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    render(<Notifications notifications={sampleNotifications} displayDrawer={true} />);
    const closeButton = screen.getByRole('button', { name: /close/i });

    fireEvent.click(closeButton);

    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');

    consoleSpy.mockRestore();
  });

  test('renders fallback text when drawer open but there are no notifications', () => {
    render(<Notifications notifications={[]} displayDrawer={true} />);

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    expect(screen.getByText(/no new notification for now/i)).toBeInTheDocument();
    expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  test('renders fallback text when notifications prop omitted but drawer open', () => {
    render(<Notifications displayDrawer={true} />);

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    expect(screen.getByText(/no new notification for now/i)).toBeInTheDocument();
  });

  test('logs markAsRead message when clicking on a notification item', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    render(<Notifications notifications={sampleNotifications} displayDrawer={true} />);

    const notifications = screen.getAllByRole('listitem');
    fireEvent.click(notifications[1]);

    expect(consoleSpy).toHaveBeenCalledWith('Notification 2 has been marked as read');

    consoleSpy.mockRestore();
  });

  test('does not re-render when notifications length stays the same', () => {
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');
    const { rerender } = render(<Notifications notifications={sampleNotifications} displayDrawer={true} />);

    renderSpy.mockClear();
    rerender(<Notifications notifications={[...sampleNotifications]} displayDrawer={true} />);

    expect(renderSpy).not.toHaveBeenCalled();
    renderSpy.mockRestore();
  });

  test('re-renders when notifications length increases', () => {
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');
    const { rerender } = render(<Notifications notifications={sampleNotifications} displayDrawer={true} />);

    renderSpy.mockClear();
    const updatedNotifications = [...sampleNotifications, { id: 4, type: 'default', value: 'New notification' }];
    rerender(<Notifications notifications={updatedNotifications} displayDrawer={true} />);

    expect(renderSpy).toHaveBeenCalled();
    renderSpy.mockRestore();
  });

  test('calls handleDisplayDrawer when clicking on the menu item', () => {
    const handleDisplayDrawer = jest.fn();
    render(
      <Notifications 
        notifications={sampleNotifications} 
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawer}
      />
    );

    const menuItem = screen.getByText(/your notifications/i);
    fireEvent.click(menuItem);

    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  test('calls handleHideDrawer when clicking on the close button', () => {
    const handleHideDrawer = jest.fn();
    render(
      <Notifications 
        notifications={sampleNotifications} 
        displayDrawer={true}
        handleHideDrawer={handleHideDrawer}
      />
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(handleHideDrawer).toHaveBeenCalled();
  });
});