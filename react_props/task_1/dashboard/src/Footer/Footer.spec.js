import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders without crashing', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(
      new RegExp(`copyright ${currentYear}`, 'i')
    );
    expect(copyrightText).toBeInTheDocument();
  });

  test('p element renders the expected string', () => {
  render(<Footer />);
  const currentYear = getCurrentYear();
  const footerText = getFooterCopy(true);
  
  const paragraphElement = screen.getByText(
    `Copyright ${currentYear} - ${footerText}`
  );
  
  expect(paragraphElement).toBeInTheDocument();
});
});