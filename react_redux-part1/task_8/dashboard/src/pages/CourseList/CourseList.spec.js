import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CourseList from './CourseList';
import coursesReducer from '../../../features/courses/coursesSlice';

const renderWithRedux = (component, initialState = {}) => {
  const store = configureStore({
    reducer: {
      courses: coursesReducer,
    },
    preloadedState: {
      courses: {
        courses: [],
        ...initialState.courses,
      },
    },
  });

  return render(<Provider store={store}>{component}</Provider>);
};

test('it should render the CourseList component with 5 rows', () => {
  renderWithRedux(<CourseList />, {
    courses: {
      courses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
      ],
    },
  });

  const rowElements = screen.getAllByRole('row');

  expect(rowElements).toHaveLength(5);
});

test('it should render the CourseList component with 1 row', () => {
  renderWithRedux(<CourseList />, {
    courses: {
      courses: [],
    },
  });

  const rowElement = screen.getAllByRole('row');
  const rowText = screen.getByText(/No course available yet/i);

  expect(rowElement).toHaveLength(1);
  expect(rowText).toBeInTheDocument();
});
