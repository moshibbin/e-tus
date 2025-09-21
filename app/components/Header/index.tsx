"use client";
import { useCart } from "@/app/context/cart";
import { menuData, MenuItem } from "@/app/data/menu";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "../MobileNav";

const Header = () => {
  const { getCartItemsCount } = useCart();
  const cartCount = getCartItemsCount();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      {/* <div className="xc-header-two__top d-none d-lg-block">
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
      </div> */}
      <div className="xc-header-two base-bg" id="xc-header-sticky">
        <div className="container">
          <div className="xc-header-two__wrapper">
            <div className="xc-header-two__logo">
              <a href="index.html">
                <img
                  src="assets/img/logo/white-logo-2.png"
                  alt="logo"
                  width="158"
                />
              </a>
            </div>
            <div className="xc-header-two__right">
              <div className="xc-header-two__search d-none d-xl-block">
                <form action="#">
                  <input
                    type="search"
                    placeholder="Search cameras, lenses, accessories..."
                  />
                  <button type="submit">
                    <i className="icon-magnifying-glass"></i>
                  </button>
                </form>
              </div>
              <div className="xc-header-two__btns d-none d-lg-flex">
                <Link href="/cart" className="xc-header-two__btn">
                  <i className="icon-shopping-cart"></i>
                  {cartCount > 0 && (
                    <span className="xc-cart-count">{cartCount}</span>
                  )}
                </Link>
                <a href="#" className="xc-header-two__btn">
                  <i className="icon-love"></i>
                </a>
                <a href="#" className="xc-header-two__btn">
                  <i className="icon-user-1"></i>
                </a>
              </div>
            </div>
            <div className="xc-header-two__hamburger d-xl-none">
              <button
                type="button"
                className="xc-offcanvas-btn xc-header-two__btn"
                onClick={toggleMobileMenu}
              >
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
              {/* <select>
                <option value="1" selected disabled>
                  All category
                </option>
                <option value="2">Health & Beauty</option>
                <option value="3">Digital & Electronics</option>
                <option value="4">Tools, equipments</option>
              </select> */}
              <div className="xc-header-one__menu xc-main-menu">
                <nav id="mobile-menu">
                  <ul className="ul-0">
                    {menuData.map((item: MenuItem) => (
                      <li
                        key={item.id}
                        className={item.children ? "has-dropdown" : undefined}
                      >
                        <Link href={item.route || "#"}>{item.label}</Link>
                        {item.children && (
                          <ul className="submenu">
                            {item.children.map((sub: MenuItem) =>
                              sub.children ? (
                                <li key={sub.id} className="has-dropdown">
                                  <Link href={sub.route || "#"}>
                                    {sub.label}
                                  </Link>
                                  <ul className="submenu">
                                    {sub.children.map((subsub: MenuItem) => (
                                      <li key={subsub.id}>
                                        <Link href={subsub.route || "#"}>
                                          {subsub.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              ) : (
                                <li key={sub.id}>
                                  <Link href={sub.route || "#"}>
                                    {sub.label}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="xc-header-two__bottom-right">
              <div className="xc-header-two__cta">
                <a href="#">
                  <i className="icon-support"></i>Customer Support
                </a>
                <a href="#">
                  <i className="icon-info"></i>Need Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileNav isOpen={mobileMenuOpen} onToggle={toggleMobileMenu} />
    </header>
  );
};

export default Header;
