import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Notifications from "./Notifications";
import { getLatestNotification } from "../../utils/utils";
import notificationsReducer from "../../../features/notifications/notificationsSlice";

jest.mock("../../utils/utils", () => ({
  getLatestNotification: jest.fn(),
}));

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

describe("Notifications component", () => {
  beforeEach(() => {
    getLatestNotification.mockReturnValue(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });

  test("renders the notifications title", () => {
    renderWithRedux(<Notifications />, {
      notifications: {
        notifications: [
          { id: 1, type: "default", value: "New course available" },
        ],
        displayDrawer: true,
      },
    });
    const titleElement = screen.getByText(/Here is the list of notifications/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the close button", () => {
    renderWithRedux(<Notifications />, {
      notifications: {
        notifications: [
          { id: 1, type: "default", value: "New course available" },
        ],
        displayDrawer: true,
      },
    });
    const buttonElement = screen.getByRole("button", { name: /close/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("logs message when close button is clicked", () => {
    const { store } = renderWithRedux(<Notifications />, {
      notifications: {
        notifications: [
          { id: 1, type: "default", value: "New course available" },
        ],
        displayDrawer: true,
      },
    });

    const buttonElement = screen.getByRole("button", { name: /close/i });

    fireEvent.click(buttonElement);

    const state = store.getState();
    expect(state.notifications.displayDrawer).toBe(false);
  });

  test("it should display 3 notification items as expected through props", () => {
    renderWithRedux(<Notifications />, {
      notifications: {
        notifications: [
          { id: 1, type: "default", value: "New course available" },
          { id: 2, type: "urgent", value: "New resume available" },
          { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
        ],
        displayDrawer: true,
      },
    });

    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(3);
  });

  test('it should not display a title, button and a 3 list items, whenever the "displayDrawer" set to false', () => {
    renderWithRedux(<Notifications />, {
      notifications: {
        notifications: [
          { id: 1, type: "default", value: "New course available" },
          { id: 2, type: "urgent", value: "New resume available" },
          { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
        ],
        displayDrawer: false,
      },
    });

    const notificationsTitle = screen.queryByText(
      /here is the list of notifications/i
    );
    const notificationsButton = screen.queryByRole("button");
    const notificationsListItems = screen.queryAllByRole("listitem");

    expect(notificationsTitle).toBeNull();
    expect(notificationsButton).toBeNull();
    expect(notificationsListItems).toHaveLength(0);
  });

  test('it should display a paragraph of "No new notifications for now" whenever the listNotification prop is empty', () => {
    renderWithRedux(<Notifications />, {
      notifications: {
        notifications: [],
        displayDrawer: true,
      },
    });

    const notificationsTitle = screen.getByText(/no new notifications for now/i);
    const notificationsListItems = screen.queryAllByRole("listitem");

    expect(notificationsListItems).toHaveLength(0);
    expect(notificationsTitle).toBeInTheDocument();
  });

  test('it should display "Your notifications" in all cases', () => {
    const notificationsData = [
      { id: 1, type: "default", value: "New course available" },
    ];

    const { rerender } = renderWithRedux(
      <Notifications />,
      {
        notifications: {
          notifications: [],
          displayDrawer: false,
        },
      }
    );

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();

    rerender(
      <Provider store={configureStore({
        reducer: { notifications: notificationsReducer },
        preloadedState: {
          notifications: {
            notifications: [],
            displayDrawer: true,
          },
        },
      })}>
        <Notifications />
      </Provider>
    );

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();

    rerender(
      <Provider store={configureStore({
        reducer: { notifications: notificationsReducer },
        preloadedState: {
          notifications: {
            notifications: notificationsData,
            displayDrawer: true,
          },
        },
      })}>
        <Notifications />
      </Provider>
    );

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
  });

  test("it should display close button, p element, and notification items when displayDrawer is true", () => {
    renderWithRedux(<Notifications />, {
      notifications: {
        notifications: [
          { id: 1, type: "default", value: "New course available" },
          { id: 2, type: "urgent", value: "New resume available" },
          { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
        ],
        displayDrawer: true,
      },
    });

    const closeButton = screen.getByRole("button", { name: /close/i });
    const pElement = screen.getByText(/here is the list of notifications/i);
    const listItems = screen.getAllByRole("listitem");

    expect(closeButton).toBeInTheDocument();
    expect(pElement).toBeInTheDocument();
    expect(listItems).toHaveLength(3);
  });

  test("it should call markNotificationAsRead when a notification item is clicked", () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { store } = renderWithRedux(<Notifications />, {
      notifications: {
        notifications: [
          { id: 1, type: "default", value: "New course available" },
          { id: 2, type: "urgent", value: "New resume available" },
          { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
        ],
        displayDrawer: true,
      },
    });

    const listItems = screen.getAllByRole("listitem");

    fireEvent.click(listItems[0]);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    let state = store.getState();
    expect(state.notifications.notifications).toHaveLength(2);
    expect(state.notifications.notifications.find(n => n.id === 1)).toBeUndefined();

    fireEvent.click(listItems[1]);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 2 has been marked as read');
    state = store.getState();
    expect(state.notifications.notifications).toHaveLength(1);

    fireEvent.click(listItems[2]);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 3 has been marked as read');
    state = store.getState();
    expect(state.notifications.notifications).toHaveLength(0);

    consoleSpy.mockRestore();
  });

  test('should update when the notifications length changes', () => {
    const initialNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
    ];

    const newNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];

    const { rerender } = renderWithRedux(<Notifications />, {
      notifications: {
        notifications: initialNotifications,
        displayDrawer: true,
      },
    });

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(1);

    rerender(
      <Provider store={configureStore({
        reducer: { notifications: notificationsReducer },
        preloadedState: {
          notifications: {
            notifications: newNotifications,
            displayDrawer: true,
          },
        },
      })}>
        <Notifications />
      </Provider>
    );

    const updatedListItems = screen.getAllByRole('listitem');
    expect(updatedListItems).toHaveLength(2);
  });

  test('should maintain same content when notifications are unchanged', () => {
    const initialNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];

    const { rerender } = renderWithRedux(<Notifications />, {
      notifications: {
        notifications: initialNotifications,
        displayDrawer: true,
      },
    });

    const firstListItems = screen.getAllByRole('listitem');
    expect(firstListItems).toHaveLength(2);

    rerender(
      <Provider store={configureStore({
        reducer: { notifications: notificationsReducer },
        preloadedState: {
          notifications: {
            notifications: initialNotifications,
            displayDrawer: true,
          },
        },
      })}>
        <Notifications />
      </Provider>
    );

    const secondListItems = screen.getAllByRole('listitem');
    expect(secondListItems).toHaveLength(2);
    expect(secondListItems[0].textContent).toBe(firstListItems[0].textContent);
  });

  test('should call handleDisplayDrawer when "Your notifications" is clicked', () => {
    const { store } = renderWithRedux(<Notifications />, {
      notifications: {
        notifications: [],
        displayDrawer: false,
      },
    });

    const notificationTitle = screen.getByText('Your notifications');
    fireEvent.click(notificationTitle);

    const state = store.getState();
    expect(state.notifications.displayDrawer).toBe(true);
  });

  test('should call handleHideDrawer when close button is clicked', () => {
    const { store } = renderWithRedux(<Notifications />, {
      notifications: {
        notifications: [{ id: 1, type: 'default', value: 'Test notification' }],
        displayDrawer: true,
      },
    });

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    const state = store.getState();
    expect(state.notifications.displayDrawer).toBe(false);
  });
});
