
import React from 'react';

const MobileNav = () => {
    return (
        <div className="xc-mobile-nav__wrapper">
            <div className="xc-mobile-nav__overlay xc-close-toggler"></div>
            {/* /.mobile-nav__overlay */}
            <div className="xc-mobile-nav__content">
                <a href="#" className="xc-mobile-nav__close xc-search-popup__close xc-close-toggler"></a>
                <div className="logo-box">
                    <a href="index.html"><img src="assets/img/logo/white-logo.png" width="150" alt="" /></a>
                </div>
                {/* /.logo-box */}
                <div className="xc-mobile-nav__menu"></div>
                {/* /.mobile-nav__container */}

                <ul className="xc-mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:needhelp@swiftcart.com">needhelp@corpai.com</a>
                    </li>
                    <li>
                        <i className="fa fa-phone-alt"></i>
                        <a href="tel:666-888-0000">666 888 0000</a>
                    </li>
                </ul>{/* /.mobile-nav__contact */}
                <div className="xc-mobile-nav__top">
                    <div className="xc-mobile-nav__social">
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-facebook-square"></a>
                        <a href="#" className="fab fa-pinterest-p"></a>
                        <a href="#" className="fab fa-instagram"></a>
                    </div>{/* /.mobile-nav__social */}
                </div>{/* /.mobile-nav__top */}
            </div>
            {/* /.mobile-nav__content */}
        </div>
    );
};

export default MobileNav;
