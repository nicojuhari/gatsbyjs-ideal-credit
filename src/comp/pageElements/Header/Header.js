import React from "react"
import { Link } from "gatsby"
import MobileMenu from "./MobileMenu";

import logo from '../../../static/ideal-credit-logo.png';
import phoneIcon from '../../../static/phone-icon.svg';


export default function Header() {

    return (
        <>
            <section className='header'>
                <div className="container header-block">
                    <Link to="/">
                        <img src={logo} alt='Ideal Credit Logo' title='Ideal Credit'/>
                    </Link>
                    <div className="header-menu desktop-flex-only flex-center-center">
                        <Link to="/despre-noi" className="menu-item">Despre Noi</Link>
                        <Link to="/contacte" className="menu-item">Contacte</Link>
                        <a href="tel:+37378805060" className="store-phone flex-center-center">
                            <img className="store-phone__icon" src={phoneIcon} alt="phone-icon"/>
                            <span className="store-phone__number">078 805060</span>
                        </a>
                    </div>
                    <div className="mobile-only">
                        <MobileMenu/>
                    </div>
                </div>
            </section>
        </>
        
    )
}
