import React from 'react';
import phoneIcon from '../phone-icon.svg';

export default function MobileCTA() {
    return (
        <div className="MobileCTA mobile-only">
              <a href="tel:+37378805060">
                <img className="phone-icon" src={phoneIcon} alt="call-ideal-credit"/>
              </a>
        </div>
    )
}
