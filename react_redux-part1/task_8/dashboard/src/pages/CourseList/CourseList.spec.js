import { render, screen, waitFor, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CourseList from './CourseList';
import coursesReducer from '../../features/courses/coursesSlice';
import { logout } from '../../features/auth/authSlice';
import authReducer from '../../features/auth/authSlice';

const renderWithRedux = (component, initialState = {}) => {
  const store = configureStore({
    reducer: {
      courses: coursesReducer,
      auth: authReducer,
    },
    preloadedState: {
      courses: {
        courses: [],
        ...initialState.courses,
      },
      auth: {
        user: {
          email: '',
          password: '',
        },
        isLoggedIn: false,
        ...initialState.auth,
      },
    },
  });

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

const mockCoursesData = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

describe('CourseList', () => {
  test('Mock the fetchCourses API call, render the CourseList and verify that the courses list is displayed', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockCoursesData),
      })
    );

    renderWithRedux(<CourseList />, {
      courses: {
        courses: mockCoursesData,
      },
    });

    await waitFor(() => {
      expect(screen.getByText('ES6')).toBeInTheDocument();
      expect(screen.getByText('Webpack')).toBeInTheDocument();
      expect(screen.getByText('React')).toBeInTheDocument();
    });
  });

  test('Dispatch the logout action, render the CourseList component and verify that the courses array is reset', () => {
    const { store } = renderWithRedux(<CourseList />, {
      courses: {
        courses: mockCoursesData,
      },
    });

    expect(store.getState().courses.courses).toHaveLength(3);

    act(() => {
      store.dispatch(logout());
    });

    expect(store.getState().courses.courses).toHaveLength(0);
  });
});
