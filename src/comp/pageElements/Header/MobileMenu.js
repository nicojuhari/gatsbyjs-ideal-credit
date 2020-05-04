import React, { useState } from 'react';
import { Link } from "gatsby";
import phoneIcon from '../../../static/phone-icon.svg';

export default function MobileMenu () {

        const [showMobileMenu, setShowMobileMenu] = useState(false);

        const toggleMenu = () => {
          setShowMobileMenu(prev => !prev);
        }

        const closeMobileMenu = () => {
          setShowMobileMenu(false);
        }
    
        return (
          <div className={'mobile-menu' + (showMobileMenu ? ' active' : '')}> 
              <div className="mobile-menu__icon" onClick={toggleMenu}>
                <span className='mobile-menu__wrapper'>
                  <span className="icon-line"></span>
                  <span className="icon-line"></span>
                  <span className="icon-line"></span>
                </span>
              </div>
              <div className="mobile-menu__content">
                <div className="close-menu"><span onClick={closeMobileMenu} className="close-menu__icon">&times;</span></div>
                <Link to="/despre-noi" className="menu-item">Despre Noi</Link>
                <Link to="/contacte" className="menu-item">Contacte</Link>
                <a href="tel:+37378805060" className="cta-mobile menu-item">
                    <div className='cta-title'>Sună acum și solicită un credit !!!</div>
                    <div className='cta-phone'>
                      <img className="phone-icon" src={phoneIcon} alt="phone-icon"/>
                      <span className="phone-number">078 805060</span>
                    </div>
                </a>
              </div>
              <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
          </div> 
        )
    
}
