import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('BodySectionWithMarginBottom', () => {
  test('Render the BodySectionWithMarginBottom component with a title and children, verify that both are displayed', () => {
    render(
      <BodySectionWithMarginBottom title="Test Title">
        <p>Test child content</p>
        <span>Another child</span>
      </BodySectionWithMarginBottom>
    );

    const titleElement = screen.getByRole('heading', { name: /test title/i });
    expect(titleElement).toBeInTheDocument();

    const child1 = screen.getByText('Test child content');
    const child2 = screen.getByText('Another child');
    expect(child1).toBeInTheDocument();
    expect(child2).toBeInTheDocument();
  });
});
