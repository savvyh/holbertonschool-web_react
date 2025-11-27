import React from 'react';
import PropTypes from 'prop-types';

function BodySection({ title, children }) {
  return (
    <div className="bodySection mb-5">
      <h2 className="font-bold text-xl mt-8">{title}</h2>
      {children}
    </div>
  );
}

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

BodySection.defaultProps = {
  children: null
};

export default BodySection;

