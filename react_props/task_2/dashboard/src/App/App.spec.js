import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    const h1Element = screen.getByRole('heading', { 
      level: 1, 
      name: /school dashboard/i 
    });
    expect(h1Element).toBeInTheDocument();
  });

  test('renders Notifications component', () => {
    const { container } = render(<App />);
    const notificationsDiv = container.querySelector('.root-notifications');
    expect(notificationsDiv).toBeInTheDocument();
  });

  test('renders Header component', () => {
    render(<App />);
    const h1Element = screen.getByRole('heading', { 
      level: 1, 
      name: /school dashboard/i 
    });
    expect(h1Element).toBeInTheDocument();
  });

  test('renders Login component', () => {
    render(<App />);
    const loginText = screen.getByText(/login to access the full dashboard/i);
    expect(loginText).toBeInTheDocument();
  });

  test('renders Footer component', () => {
    render(<App />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(
      new RegExp(`copyright ${currentYear}`, 'i')
    );
    expect(copyrightText).toBeInTheDocument();
  });
});