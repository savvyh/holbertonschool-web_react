import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';

describe('BodySection', () => {
  test('Render the BodySection component with a title and children, and verify that both are displayed', () => {
    render(
      <BodySection title="Test Title">
        <p>Test child</p>
      </BodySection>
    );

    const titleElement = screen.getByRole('heading', { name: /test title/i });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H2');

    const childElement = screen.getByText('Test child');
    expect(childElement).toBeInTheDocument();
  });
});
