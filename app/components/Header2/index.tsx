import Link from 'next/link';
import React from 'react';

const Header2 = () => {
    return (
        <header>
            <div className="xc-header-two__top d-none d-lg-block">
                <div className="container">
                    <div className="xc-header-two__top-wrapper d-flex justify-content-between">
                        <div className="xc-header-two__top-left">
                            <p>Welcome to online eCommerce store.</p>
                        </div>
                        <div className="xc-header-two__top-right">
                            <div className="xc-header-two__lang">
                                <select className="xc-header-two__lang-select">
                                    <option value="en">Eng</option>
                                    <option value="ar">Ar</option>
                                    <option value="hi">Bd</option>
                                    <option value="ee">EEk</option>
                                </select>
                            </div>
                            <div className="xxc-header-two__currency">
                                <select className="xc-header-two__currency-select">
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="CZK">CZK</option>
                                    <option value="EEK">EEK</option>
                                </select>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="xc-header-two base-bg" id="xc-header-sticky">
                <div className="container">
                    <div className="xc-header-two__wrapper">
                        <div className="xc-header-two__logo">
                            <a href="index.html"><img src="/assets/img/logo/white-logo-2.png" alt="logo" width="158" /></a>
                        </div>
                        <div className="xc-header-two__right">
                            <div className="xc-header-two__search d-none d-xl-block">
                                <form action="#">
                                    <input type="search" placeholder="Search for anything..." />
                                    <button type="submit"><i className="icon-magnifying-glass"></i></button>
                                </form>
                            </div>
                            <div className="xc-header-two__btns d-none d-lg-flex">
                                <a href="#" className="xc-header-two__btn">
                                    <i className="icon-shopping-cart"></i>
                                    <span className="xc-cart-count">2</span>
                                </a>
                                <a href="#" className="xc-header-two__btn">
                                    <i className="icon-love"></i>
                                </a>
                                <a href="#" className="xc-header-two__btn">
                                    <i className="icon-user-1"></i>
                                </a>
                                <div className="xc-header-two__hamburger d-xl-none">
                                    <button type="button" className="xc-offcanvas-btn xc-header-two__btn">
                                        <i className="icon-menu"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="xc-header-two__hamburger d-lg-none">
                            <button type="button" className="xc-offcanvas-btn xc-header-two__btn">
                                <i className="icon-menu"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xc-header-two__bottom d-none d-lg-block">
                <div className="container">
                    <div className="xc-header-two__bottom-wrapper">
                        <div className="xc-header-two__bottom-left">
                            <select>
                                <option value="1" selected disabled>All category</option>
                                <option value="2">Health & Beauty</option>
                                <option value="3">Digital & Electronics</option>
                                <option value="4">Tools, equipments</option>
                            </select>
                            <div className="xc-header-one__menu xc-main-menu">
                                <nav id="mobile-menu">
                                    <ul className="ul-0">
                                        <li className="has-dropdown">
                                            <Link href="/">Home</Link>
                                            <ul className="submenu">
                                                <li><Link href="/">Home One</Link></li>
                                                <li><Link href="/index-2">Home Two</Link></li>
                                                <li><Link href="/index-3">Home Three</Link></li>

                                            </ul>
                                        </li>
                                        <li><Link href="/about">About</Link></li>
                                        <li className="has-dropdown"><Link href="/shop">Shop</Link>
                                            <ul className="submenu">
                                                <li><Link href="/shop">Shop</Link></li>
                                                <li><Link href="/product-details">Product Details</Link></li>
                                                <li><Link href="/cart">Cart</Link></li>
                                                <li><Link href="/checkout">Checkout</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-dropdown"><Link href="#">Page</Link>
                                            <ul className="submenu">
                                                <li><Link href="/product-landing">Product Landing</Link></li>
                                                <li><Link href="/vendor">Vendor</Link></li>
                                                <li><Link href="/faq">Faq</Link></li>
                                                <li><Link href="/404">404</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-dropdown">
                                            <Link href="/blog-list">Blog</Link>
                                            <ul className="submenu">
                                                <li>
                                                    <Link href="/blog-grid">Blog Grid</Link>
                                                </li>
                                                <li className="has-dropdown">
                                                    <Link href="/blog-list">Blog List</Link>
                                                    <ul className="submenu">
                                                        <li><Link href="/blog-list-no-sidebar">No Sidebar</Link></li>
                                                        <li><Link href="/blog-list">Right Sidebar</Link></li>
                                                        <li><Link href="/blog-list-left-sidebar">Left Sidebar</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/blog-details">Blog Details</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="xc-header-two__bottom-right">
                            <div className="xc-header-two__cta">
                                <a href="#"><i className="icon-support"></i>Customer Support</a>
                                <a href="#"><i className="icon-info"></i>Need Help</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header2;
