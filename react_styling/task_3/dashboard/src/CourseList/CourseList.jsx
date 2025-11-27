import PropTypes from 'prop-types';
import React from 'react';
import CourseListRow from './CourseListRow';

function CourseList({ courses = [] }) {
  return (
    <div className="w-[80%] mx-auto my-32">
      <table id="CourseList" className="w-full">
        {courses.length > 0 && (
          <thead>
            <CourseListRow textFirstCell="Available courses" isHeader={true} />
            <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
          </thead>
        )}
        <tbody>
          {courses.length === 0 ? (
            <CourseListRow textFirstCell="No course available yet" isHeader={false} />
          ) : (
            courses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                isHeader={false}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired
    })
  )
};

CourseList.defaultProps = {
  courses: []
};

export default CourseList;