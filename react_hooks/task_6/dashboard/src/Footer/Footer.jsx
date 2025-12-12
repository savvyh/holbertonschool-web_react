import React from 'react';
import PropTypes from 'prop-types';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer({ user }) {
  return (
    <div className="border-t-[3px] border-[#e1003c] p-5">
      <p className="text-center italic text-sm md:text-base">
        Copyright {getCurrentYear()} - {getFooterCopy(true)}
      </p>
      {user.isLoggedIn && (
        <p className="text-center">
          <a href="#">Contact us</a>
        </p>
      )}
    </div>
  );
}

Footer.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    isLoggedIn: PropTypes.bool
  })
};

Footer.defaultProps = {
  user: {
    email: '',
    password: '',
    isLoggedIn: false
  }
};

export default Footer;