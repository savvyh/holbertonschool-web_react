import { render, screen, within } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  test('Render the CourseListRow component as a header with one cell and verify that it spans two columns', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="First" textSecondCell={null} />
        </tbody>
      </table>
    );

    const thElement = screen.getByRole('columnheader');
    expect(thElement).toHaveAttribute('colSpan', '2');
  });

  test('Render the CourseListRow component as a header with two cells and verify both are displayed', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />
        </tbody>
      </table>
    );

    const thElements = screen.getAllByRole('columnheader');
    expect(thElements).toHaveLength(2);
    expect(thElements[0]).toHaveTextContent('First');
    expect(thElements[1]).toHaveTextContent('Second');
  });

  test('Render the CourseListRow component as a regular row and verify both cells are displayed', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="Data1" textSecondCell="Data2" />
        </tbody>
      </table>
    );

    const trElement = screen.getByRole('row');
    const tdElements = within(trElement).getAllByRole('cell');

    expect(trElement).toBeInTheDocument();
    expect(tdElements).toHaveLength(2);
    expect(tdElements[0]).toHaveTextContent('Data1');
    expect(tdElements[1]).toHaveTextContent('Data2');
  });
});
