import { render, screen } from '@testing-library/react';
import { getCurrentYear, getFooterCopy } from '../utils/utils';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders without crashing', () => {
    const user = {
      email: '',
      password: '',
      isLoggedIn: false
    };
    render(<Footer user={user} />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(
      new RegExp(`copyright ${currentYear}`, 'i')
    );
    expect(copyrightText).toBeInTheDocument();
  });

  test('p element renders the expected string', () => {
    const user = {
      email: '',
      password: '',
      isLoggedIn: false
    };
    render(<Footer user={user} />);
    const currentYear = getCurrentYear();
    const footerText = getFooterCopy(true);
    
    const paragraphElement = screen.getByText(
      `Copyright ${currentYear} - ${footerText}`
    );
    
    expect(paragraphElement).toBeInTheDocument();
  });

  test('does not display Contact us link when user is logged out', () => {
    const user = {
      email: '',
      password: '',
      isLoggedIn: false
    };

    render(<Footer user={user} />);

    const contactLink = screen.queryByText(/contact us/i);
    expect(contactLink).not.toBeInTheDocument();
  });

  test('displays Contact us link when user is logged in', () => {
    const user = {
      email: 'test@example.com',
      password: 'password123',
      isLoggedIn: true
    };

    render(<Footer user={user} />);

    const contactLink = screen.getByText(/contact us/i);
    expect(contactLink).toBeInTheDocument();
  });
});