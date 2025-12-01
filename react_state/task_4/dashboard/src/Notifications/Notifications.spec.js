import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  const sampleNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
  ];

  test('always renders the notification title', () => {
    render(<Notifications notifications={sampleNotifications} markNotificationAsRead={() => {}} />);
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
  });

  test('hides drawer content when displayDrawer is false', () => {
    render(
      <Notifications 
        notifications={sampleNotifications} 
        displayDrawer={false}
        markNotificationAsRead={() => {}}
      />
    );

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  test('shows drawer content when displayDrawer is true', () => {
    render(
      <Notifications 
        notifications={sampleNotifications} 
        displayDrawer={true}
        markNotificationAsRead={() => {}}
      />
    );

    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(sampleNotifications.length);
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
    expect(screen.getByText(/urgent requirement/i)).toBeInTheDocument();
  });

  test('renders fallback text when drawer open but there are no notifications', () => {
    render(
      <Notifications 
        notifications={[]} 
        displayDrawer={true}
        markNotificationAsRead={() => {}}
      />
    );

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    expect(screen.getByText(/no new notification for now/i)).toBeInTheDocument();
    expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  test('renders fallback text when notifications prop omitted but drawer open', () => {
    render(
      <Notifications 
        displayDrawer={true}
        markNotificationAsRead={() => {}}
      />
    );

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    expect(screen.getByText(/no new notification for now/i)).toBeInTheDocument();
  });

  test('calls markNotificationAsRead when clicking on a notification item', () => {
    const markNotificationAsRead = jest.fn();
    render(
      <Notifications 
        notifications={sampleNotifications} 
        displayDrawer={true}
        markNotificationAsRead={markNotificationAsRead}
      />
    );

    const notifications = screen.getAllByRole('listitem');
    fireEvent.click(notifications[1]);

    expect(markNotificationAsRead).toHaveBeenCalledWith(2);
  });

  test('does not re-render when notifications length stays the same (PureComponent)', () => {
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');
    const { rerender } = render(
      <Notifications 
        notifications={sampleNotifications} 
        displayDrawer={true}
        markNotificationAsRead={() => {}}
      />
    );

    renderSpy.mockClear();
    rerender(
      <Notifications
        notifications={sampleNotifications}
        displayDrawer={true}
        markNotificationAsRead={() => {}}
      />
    );

    expect(renderSpy).not.toHaveBeenCalled();
    renderSpy.mockRestore();
  });

  test('re-renders when notifications length increases (PureComponent)', () => {
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');
    const { rerender } = render(
      <Notifications 
        notifications={sampleNotifications} 
        displayDrawer={true}
        markNotificationAsRead={() => {}}
      />
    );

    renderSpy.mockClear();
    const updatedNotifications = [...sampleNotifications, { id: 4, type: 'default', value: 'New notification' }];
    rerender(
      <Notifications 
        notifications={updatedNotifications} 
        displayDrawer={true}
        markNotificationAsRead={() => {}}
      />
    );

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
        markNotificationAsRead={() => {}}
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
        markNotificationAsRead={() => {}}
      />
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(handleHideDrawer).toHaveBeenCalled();
  });
});