"use client";
import { useCart } from "@/app/context/cart";
import { menuData } from "@/app/data/menu";
import Link from "next/link";

const Header2 = () => {
  const { getCartItemsCount } = useCart();
  const cartCount = getCartItemsCount();

  return (
    <header>
      <div className="xc-header-two base-bg" id="xc-header-sticky">
        <div className="container">
          <div className="xc-header-two__wrapper">
            <div className="xc-header-two__logo">
              <Link href="/">
                <img
                  src="/assets/img/logo/white-logo-2.png"
                  alt="logo"
                  width="158"
                />
              </Link>
            </div>
            <div className="xc-header-two__right">
              <div className="xc-header-two__search d-none d-xl-block">
                <form action="#">
                  <input type="search" placeholder="Search for anything..." />
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
                <Link href="/wishlist" className="xc-header-two__btn">
                  <i className="icon-love"></i>
                </Link>
                {/* <a href="/profile" className="xc-header-two__btn">
                  <i className="icon-user-1"></i>
                </a> */}
                <div className="xc-header-two__hamburger d-xl-none">
                  <button
                    type="button"
                    className="xc-offcanvas-btn xc-header-two__btn"
                  >
                    <i className="icon-menu"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="xc-header-two__hamburger d-lg-none">
              <button
                type="button"
                className="xc-offcanvas-btn xc-header-two__btn"
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
                    {menuData.map((item: any) => (
                      <li
                        key={item.label}
                        className={item.submenu ? "has-dropdown" : undefined}
                      >
                        <Link href={item.route}>{item.label}</Link>
                        {item.submenu && (
                          <ul className="submenu">
                            {item.submenu.map((sub: any) =>
                              sub.submenu ? (
                                <li key={sub.label} className="has-dropdown">
                                  <Link href={sub.route}>{sub.label}</Link>
                                  <ul className="submenu">
                                    {sub.submenu.map((subsub: any) => (
                                      <li key={subsub.label}>
                                        <Link href={subsub.route}>
                                          {subsub.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              ) : (
                                <li key={sub.label}>
                                  <Link href={sub.route}>{sub.label}</Link>
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
                <Link href="/contact">
                  <i className="icon-support"></i>Customer Support
                </Link>
                <Link href="/contact">
                  <i className="icon-info"></i>Need Help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
