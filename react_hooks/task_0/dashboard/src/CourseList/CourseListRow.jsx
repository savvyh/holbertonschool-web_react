import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className="bg-table-header/[0.66]">
          <th className="border border-gray-400 pl-2" colSpan="2">{textFirstCell}</th>
        </tr>
      );
    }
    return (
      <tr className="bg-table-header/[0.66]">
        <th className="border border-gray-400 pl-2">{textFirstCell}</th>
        <th className="border border-gray-400 pl-2">{textSecondCell}</th>
      </tr>
    );
  }

  if (textSecondCell === null) {
    return (
      <tr className="bg-table-header/[0.66]">
        <td colSpan="2" className="no-course-message border border-gray-400 pl-2">{textFirstCell}</td>
      </tr>
    );
  }

  return (
    <tr className="bg-table-rows/[0.45]">
      <td className="border border-gray-400 pl-2">{textFirstCell}</td>
      <td className="border border-gray-400 pl-2">{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: '',
  textSecondCell: null
};

export default CourseListRow;