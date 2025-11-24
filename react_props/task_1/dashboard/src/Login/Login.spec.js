import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  test('renders without crashing', () => {
    render(<Login />);
    const loginText = screen.getByText(/login to access the full dashboard/i);
    expect(loginText).toBeInTheDocument();
  });

  test('includes 2 labels, 2 inputs and a button', () => {
    const { container } = render(<Login />);
    const labels = container.querySelectorAll('label');
    expect(labels.length).toBe(2);
    const inputs = container.querySelectorAll('input');
    expect(inputs.length).toBe(2);
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
  });

  test('inputs get focus when clicked', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/email:/i);
    const passwordInput = screen.getByLabelText(/password:/i);

    emailInput.focus();
    expect(emailInput).toHaveFocus();

    passwordInput.focus();
    expect(passwordInput).toHaveFocus();
  });
});