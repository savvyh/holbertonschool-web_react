import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    render(<App />);
    const notificationsText = screen.getByText(/your notifications/i);
    expect(notificationsText).toBeInTheDocument();
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

  test('renders CourseList when user is logged in', async () => {
    const user = userEvent.setup();
    render(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });

    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'password123');
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByText(/login to access the full dashboard/i)).not.toBeInTheDocument();
    });

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });

  test('not render CourseList when user is not logged in', () => {
    render(<App />);
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();

    const table = screen.queryByRole('table');
    expect(table).not.toBeInTheDocument();
  });


  test('displays news section with title and paragraph by default', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 2, name: /news from the school/i })).toBeInTheDocument();
    expect(screen.getByText(/ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, asperiores architecto blanditiis fuga doloribus sit illum aliquid ea distinctio minus accusantium, impedit quo voluptatibus ut magni dicta. Recusandae, quia dicta?/i)).toBeInTheDocument();
  });

  test('displays logoutSection in Header when user logs in', async () => {
    const user = userEvent.setup();
    render(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });

    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'password123');
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/welcome test@example.com/i)).toBeInTheDocument();
    });

    const logoutSection = screen.getByText(/welcome test@example.com/i);
    expect(logoutSection).toHaveAttribute('id', 'logoutSection');
  });

  test('hides logoutSection when user logs out via logout link', async () => {
    const user = userEvent.setup();
    render(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });

    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'password123');
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/welcome test@example.com/i)).toBeInTheDocument();
    });

    const logoutLink = screen.getByText(/logout/i);
    await user.click(logoutLink);

    await waitFor(() => {
      expect(screen.queryByText(/welcome test@example.com/i)).not.toBeInTheDocument();
    });

    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
  });

  test('updates UI correctly when state changes from logged out to logged in', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    expect(screen.queryByText(/welcome/i)).not.toBeInTheDocument();

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });

    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'password123');
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByText(/login to access the full dashboard/i)).not.toBeInTheDocument();
    });

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText(/welcome test@example.com/i)).toBeInTheDocument();
  });

  test('updates UI correctly when state changes from logged in to logged out', async () => {
    const user = userEvent.setup();
    render(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });

    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'password123');
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByRole('table')).toBeInTheDocument();
    });

    const logoutLink = screen.getByText(/logout/i);
    await user.click(logoutLink);

    await waitFor(() => {
      expect(screen.queryByRole('table')).not.toBeInTheDocument();
    });

    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
    expect(screen.queryByText(/welcome/i)).not.toBeInTheDocument();
  });

  test('removes notification from list when clicking on it and logs correct message', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();
    render(<App />);

    const notificationsTitle = screen.getByText(/your notifications/i);
    await user.click(notificationsTitle);

    await waitFor(() => {
      expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    });

    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems).toHaveLength(3);

    const firstNotification = notificationItems[0];
    await user.click(firstNotification);

    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

    await waitFor(() => {
      const remainingNotifications = screen.getAllByRole('listitem');
      expect(remainingNotifications).toHaveLength(2);
    });

    consoleSpy.mockRestore();
  });

  test('displayDrawer is initially false', () => {
    render(<App />);
    expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
  });

  test('handleDisplayDrawer sets displayDrawer to true', async () => {
    const user = userEvent.setup();
    render(<App />);

    const closeButton = screen.queryByRole('button', { name: /close/i });
    if (closeButton) {
      await user.click(closeButton);
      
      await waitFor(() => {
        expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
      });
    }

    const notificationsTitle = screen.getByText(/your notifications/i);
    await user.click(notificationsTitle);

    await waitFor(() => {
      expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    });
  });

  test('handleHideDrawer sets displayDrawer to false', async () => {
    const user = userEvent.setup();
    render(<App />);

    // First, open the drawer
    const notificationsTitle = screen.getByText(/your notifications/i);
    await user.click(notificationsTitle);

    await waitFor(() => {
      expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    });

    // Then close it
    const closeButton = screen.getByRole('button', { name: /close/i });
    await user.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
    });
  });
});