import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders h1 element with text "School dashboard"', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: /School dashboard/i })).toBeInTheDocument();
  })

  test('renders correct text content in App-body and App-footer paragraphs', () => {
    render(<App />);
    expect(screen.getByRole('paragraph', { name: /Login to access the full dashboard/i })).toBeInTheDocument();
    expect(screen.getByRole('paragraph', { name: /Copyright \d{4} - holberton School/i })).toBeInTheDocument();
  })

  test('renders img element', () => {
    render(<App />);
    expect(screen.getByRole('img', { name: /holberton logo/i })).toBeInTheDocument();
  })
})