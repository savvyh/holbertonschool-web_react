import { render, screen } from '@testing-library/react';
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
});