import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test('inputs get focused when their related labels are clicked', async () => {
    const user = userEvent.setup();
    render(<Login />);
    
    const emailLabel = screen.getByText(/email:/i);
    const passwordLabel = screen.getByText(/password:/i);
    const emailInput = screen.getByLabelText(/email:/i);
    const passwordInput = screen.getByLabelText(/password:/i);
    
    await user.click(emailLabel);
    expect(emailInput).toHaveFocus();
    
    await user.click(passwordLabel);
    expect(passwordInput).toHaveFocus();
  });
});