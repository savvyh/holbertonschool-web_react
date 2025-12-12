import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  test('contains holberton logo image', () => {
    render(<Header />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders without crashing', () => {
    render(<Header />);
    const h1Element = screen.getByRole('heading', { 
      level: 1, 
      name: /School dashboard/i
    });
    expect(h1Element).toBeInTheDocument();
  });

  test('does not render logoutSection when user is logged out', () => {
    const user = {
      email: '',
      password: '',
      isLoggedIn: false
    };

    render(<Header user={user} />);
    const logoutSection = screen.queryByText(/welcome/i);
    expect(logoutSection).not.toBeInTheDocument();
  });

  test('renders logoutSection when user is logged in', () => {
    const user = {
      email: 'test@example.com',
      password: 'password123',
      isLoggedIn: true
    };
    const logOut = jest.fn();

    render(<Header user={user} logOut={logOut} />);

    const logoutSection = screen.getByText(/welcome test@example.com/i);
    expect(logoutSection).toBeInTheDocument();
    expect(logoutSection).toHaveAttribute('id', 'logoutSection');
  });

  test('calls logOut when logout link is clicked', () => {
    const user = {
      email: 'test@example.com',
      password: 'password123',
      isLoggedIn: true
    };
    const logOut = jest.fn();

    render(<Header user={user} logOut={logOut} />);

    const logoutLink = screen.getByText(/logout/i);
    fireEvent.click(logoutLink);

    expect(logOut).toHaveBeenCalledTimes(1);
  });
});