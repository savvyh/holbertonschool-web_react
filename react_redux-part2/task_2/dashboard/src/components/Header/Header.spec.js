import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Header from './Header';
import authReducer from '../../features/auth/authSlice';
import { login } from '../../features/auth/authSlice';

const renderWithRedux = (component, initialState = {}) => {
  const store = configureStore({
    reducer: {
      auth: authReducer,
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
    },
  });

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('Header', () => {
  test('Create a mock store with isLoggedIn set to true, render the Header component, and verify that the logout link is displayed', () => {
    renderWithRedux(<Header />, {
      auth: {
        isLoggedIn: true,
        user: {
          email: 'test@test.com',
          password: 'password123',
        },
      },
    });

    const logoutLink = screen.getByText(/logout/i);
    expect(logoutLink).toBeInTheDocument();
  });

  test('Create a mock store, dispatch the login action, render the Header component, and verify that a welcome message is displayed with the entered email', async () => {
    const { store } = renderWithRedux(<Header />);

    act(() => {
      store.dispatch(login({ email: 'test@test.com', password: 'password123' }));
    });

    await waitFor(() => {
      expect(screen.getByText(/test@test.com/i)).toBeInTheDocument();
      expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    });
  });

  test('Simulate a logout action and verify that isLoggedIn is set to false', () => {
    const { store } = renderWithRedux(<Header />, {
      auth: {
        isLoggedIn: true,
        user: {
          email: 'test@test.com',
          password: 'password123',
        },
      },
    });

    const logoutLink = screen.getByText(/logout/i);
    fireEvent.click(logoutLink);

    const state = store.getState();
    expect(state.auth.isLoggedIn).toBe(false);
    expect(state.auth.user.email).toBe('');
    expect(state.auth.user.password).toBe('');
  });
});
