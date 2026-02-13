import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from '../App';
import mockAxios from 'jest-mock-axios';
import authReducer from '../features/auth/authSlice';
import notificationsReducer from '../features/notifications/notificationsSlice';
import coursesReducer from '../features/courses/coursesSlice';

afterEach(() => {
  mockAxios.reset();
});

const renderWithRedux = (component, initialState = {}) => {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      notifications: notificationsReducer,
      courses: coursesReducer,
    },
    preloadedState: {
      auth: {
        user: {
          email: '',
          password: '',
        },
        isLoggedIn: false,
        ...initialState.auth,
      },
      notifications: {
        notifications: [],
        ...initialState.notifications,
      },
      courses: {
        courses: [],
        ...initialState.courses,
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

const mockCoursesData = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

describe('App', () => {
  test('Create a mock store with isLoggedIn set to false, render App with the mock store and verify that the Login component is displayed', async () => {
    renderWithRedux(<App />, {
      auth: {
        isLoggedIn: false,
      },
    });

    mockAxios.mockResponse({ data: { notifications: mockNotificationsData } });

    await waitFor(() => {
      const emailLabelElement = screen.getByLabelText(/email/i);
      const passwordLabelElement = screen.getByLabelText(/password/i);
      expect(emailLabelElement).toBeInTheDocument();
      expect(passwordLabelElement).toBeInTheDocument();
    });
  });

  test('Create a mock store with isLoggedIn set to true, render App with the mock store and verify that the CourseList component is displayed', async () => {
    renderWithRedux(<App />, {
      auth: {
        isLoggedIn: true,
      },
    });

    mockAxios.mockResponse({ data: { notifications: mockNotificationsData } });
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockCoursesData),
      })
    );

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /course list/i })).toBeInTheDocument();
    });
  });

  test('Mock the fetchNotifications API call, render App and check that the notification items are displayed on mount', async () => {
    renderWithRedux(<App />);

    mockAxios.mockResponse({ data: { notifications: mockNotificationsData } });

    await waitFor(() => {
      expect(screen.getByText('New course available')).toBeInTheDocument();
      expect(screen.getByText('New resume available')).toBeInTheDocument();
    });
  });
});
