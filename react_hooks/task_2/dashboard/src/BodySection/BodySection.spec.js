import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';

describe('BodySection Component', () => {
  test('renders heading with the provided title', () => {
    render(<BodySection title="Test Title" />);
    expect(screen.getByRole('heading', { level: 2, name: /test title/i })).toBeInTheDocument();
  });

  test('renders children content', () => {
    render(
      <BodySection title="Section Title">
        <p>Child 1</p>
        <p>Child 2</p>
      </BodySection>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });
});

