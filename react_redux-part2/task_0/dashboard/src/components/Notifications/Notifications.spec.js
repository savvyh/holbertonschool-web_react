import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Notifications from "./Notifications";
import notificationsReducer from "../../features/notifications/notificationsSlice";
import { fetchNotifications } from "../../features/notifications/notificationsSlice";
import mockAxios from 'jest-mock-axios';

afterEach(() => {
  mockAxios.reset();
});

const renderWithRedux = (component, initialState = {}) => {
  const store = configureStore({
    reducer: {
      notifications: notificationsReducer,
    },
    preloadedState: {
      notifications: {
        notifications: [],
        displayDrawer: true,
        ...initialState.notifications,
      },
    },
  });

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

const mockNotificationsData = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '' } }
];

describe("Notifications", () => {
  test('Mock the fetchNotifications API call, render the Notifications component and verify that the notification items are displayed', async () => {
    const { store } = renderWithRedux(<Notifications />);

    act(() => {
      store.dispatch(fetchNotifications.fulfilled(mockNotificationsData));
    });

    await waitFor(() => {
      expect(screen.getByText('New course available')).toBeInTheDocument();
      expect(screen.getByText('New resume available')).toBeInTheDocument();
    });
  });

  test('Simulate closing the drawer and verify that the displayDrawer state is set to false', () => {
    const { store } = renderWithRedux(<Notifications />, {
      notifications: {
        notifications: mockNotificationsData,
        displayDrawer: true,
      },
    });

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    const state = store.getState();
    expect(state.notifications.displayDrawer).toBe(false);
  });

  test('Simulate opening the drawer and verify that the displayDrawer state is set to true', () => {
    const { store } = renderWithRedux(<Notifications />, {
      notifications: {
        notifications: mockNotificationsData,
        displayDrawer: false,
      },
    });

    const notificationTitle = screen.getByText('Your notifications');
    fireEvent.click(notificationTitle);

    const state = store.getState();
    expect(state.notifications.displayDrawer).toBe(true);
  });

  test('Simulate marking a notification as read and verify that it is removed from the list', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { store } = renderWithRedux(<Notifications />, {
      notifications: {
        notifications: mockNotificationsData,
        displayDrawer: true,
      },
    });

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);

    fireEvent.click(listItems[0]);

    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    
    const state = store.getState();
    expect(state.notifications.notifications).toHaveLength(2);
    expect(state.notifications.notifications.find(n => n.id === 1)).toBeUndefined();

    consoleSpy.mockRestore();
  });
});
