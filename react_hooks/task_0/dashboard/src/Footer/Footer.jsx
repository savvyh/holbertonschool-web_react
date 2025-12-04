import React, { useContext } from 'react';
import { getCurrentYear, getFooterCopy } from '../utils/utils';
import AppContext from '../Context/context';

function Footer() {
  const { user } = useContext(AppContext);

  return (
        <div className="border-t-[3px] border-[#e1003c] p-5">
          <p className="text-center italic text-sm md:text-base">Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
          {user.isLoggedIn && (
            <p className="text-center">
              <a href="#">Contact us</a>
            </p>
        )}
      </div>
  );
}

export default Footer;