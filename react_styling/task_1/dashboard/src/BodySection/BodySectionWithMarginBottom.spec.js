import { render } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom Component', () => {
  test('contains a div with the class bodySectionWithMargin', () => {
    const { container } = render(<BodySectionWithMarginBottom title="Test Title" />);
    const wrapper = container.querySelector('.bodySectionWithMargin');
    expect(wrapper).toBeInTheDocument();
  });

  test('renders BodySection component inside', () => {
    const { getByRole } = render(
      <BodySectionWithMarginBottom title="Nested Title">
        <p>Child content</p>
      </BodySectionWithMarginBottom>
    );

    expect(getByRole('heading', { level: 2, name: /nested title/i })).toBeInTheDocument();
  });
});

