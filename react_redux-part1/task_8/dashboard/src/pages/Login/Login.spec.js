import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Login from './Login';
import authReducer from '../../features/auth/authSlice';

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

describe('Login', () => {
  test('Render the Login component and verify that the login form is displayed with email, password fields, and submit button', () => {
    renderWithRedux(<Login />);

    const emailLabelElement = screen.getByLabelText(/email/i);
    const passwordLabelElement = screen.getByLabelText(/password/i);
    const buttonElementText = screen.getByRole('button', { name: 'OK' });

    expect(emailLabelElement).toBeInTheDocument();
    expect(passwordLabelElement).toBeInTheDocument();
    expect(buttonElementText).toBeInTheDocument();
  });

  test('Simulate form submission with valid credentials and verify that isLoggedIn is set to true', () => {
    const { store } = renderWithRedux(<Login />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const submitButton = screen.getByRole('button', { name: /ok/i });
    fireEvent.click(submitButton);

    const state = store.getState();
    expect(state.auth.isLoggedIn).toBe(true);
    expect(state.auth.user.email).toBe('test@test.com');
    expect(state.auth.user.password).toBe('password123');
  });

  test('Simulate form submission with invalid credentials and verify that isLoggedIn remains false', () => {
    const { store } = renderWithRedux(<Login />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    // Invalid email
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const submitButton = screen.getByRole('button', { name: /ok/i });
    expect(submitButton).toBeDisabled();

    // Valid email but short password
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'short' } });

    expect(submitButton).toBeDisabled();

    const state = store.getState();
    expect(state.auth.isLoggedIn).toBe(false);
  });
});
