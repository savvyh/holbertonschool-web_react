import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login Component', () => {
  test('renders without crashing', () => {
    render(<Login />);
  });

  test('contains 2 labels, 3 inputs (email, password, submit), and submit is accessible as button', () => {
    const { container } = render(<Login />);

    const labels = container.querySelectorAll('label');
    expect(labels).toHaveLength(2);

    const inputs = container.querySelectorAll('input');
    expect(inputs).toHaveLength(3);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
  });

  test('inputs get focused when their related labels are clicked', async () => {
    const user = userEvent.setup();
    render(<Login />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await user.click(emailInput);
    expect(emailInput).toHaveFocus();

    await user.click(passwordInput);
    expect(passwordInput).toHaveFocus();
  });

  test('submit button is disabled by default', () => {
    render(<Login />);
    const submitButton = screen.getByRole('button', { name: /ok/i });
    expect(submitButton).toBeDisabled();
  });

  test('submit button becomes enabled when email and password meet criteria', async () => {
    const user = userEvent.setup();
    render(<Login />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });
    expect(submitButton).toBeDisabled();

    await user.type(emailInput, 'test@example.com');
    expect(submitButton).toBeDisabled();

    await user.type(passwordInput, 'password123');
    expect(submitButton).toBeEnabled();

    await user.clear(emailInput);
    await user.type(emailInput, 'invalid-email');
    expect(submitButton).toBeDisabled();

    await user.type(emailInput, 'test@example.com');
    await user.clear(passwordInput);
    await user.type(passwordInput, 'short');
    expect(submitButton).toBeDisabled();
  });

  test('calls logIn with email and password when form is submitted', async () => {
    const logIn = jest.fn();
    const user = userEvent.setup();
    render(<Login logIn={logIn} />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });

    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'password123');

    fireEvent.click(submitButton);

    expect(logIn).toHaveBeenCalledWith('test@example.com', 'password123');
  });
});