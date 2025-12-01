import React from 'react';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <div className="border-t-[3px] border-[#e1003c] p-5">
      <p className="text-center italic text-sm md:text-base">Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
    </div>
  );
}

export default Footer;