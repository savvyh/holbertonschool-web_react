import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Footer from './Footer';
import authReducer from '../../../features/auth/authSlice';
import { getCurrentYear } from '../../../utils/utils';

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

  return render(<Provider store={store}>{component}</Provider>);
};

describe('Footer', () => {
  test('Render the Footer component and verify that the Copyright {current year} - Holberton School text is displayed', () => {
    renderWithRedux(<Footer />);

    const footerParagraph = screen.getByText(/copyright/i);
    const currentYear = getCurrentYear();

    expect(footerParagraph).toHaveTextContent(new RegExp(`copyright ${currentYear}`, 'i'));
    expect(footerParagraph).toHaveTextContent(/holberton school/i);
  });

  test('Create a mock store with isLoggedIn set to true, render the Footer component and verify that the "Contact us" link is displayed', () => {
    renderWithRedux(<Footer />, {
      auth: {
        isLoggedIn: true,
      },
    });

    const contactLink = screen.getByText(/contact us/i);
    expect(contactLink).toBeInTheDocument();
  });

  test('Create a mock store with isLoggedIn set to false, render the Footer and verify that the "Contact us" link is not displayed', () => {
    renderWithRedux(<Footer />, {
      auth: {
        isLoggedIn: false,
      },
    });

    const contactLink = screen.queryByText(/contact us/i);
    expect(contactLink).not.toBeInTheDocument();
  });
});
