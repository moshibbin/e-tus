"use client";
import { menuData } from "@/app/data/menu";
import Link from "next/link";
import { useEffect } from "react";

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileNav = ({ isOpen, onToggle }: MobileNavProps) => {
  const closeMenu = () => {
    onToggle();
  };

  useEffect(() => {
    // Add event listeners for closing the menu
    const handleCloseTogglers = () => {
      closeMenu();
    };

    const closeTogglers = document.querySelectorAll(".xc-close-toggler");
    closeTogglers.forEach((toggler) => {
      toggler.addEventListener("click", handleCloseTogglers);
    });

    // Cleanup event listeners
    return () => {
      closeTogglers.forEach((toggler) => {
        toggler.removeEventListener("click", handleCloseTogglers);
      });
    };
  }, [closeMenu, isOpen]);

  return (
    <>
      {/* Mobile Menu */}
      <div className={`xc-mobile-nav__wrapper  ${isOpen ? "active" : ""}`}>
        <div
          className="xc-mobile-nav__overlay xc-close-toggler"
          onClick={closeMenu}
        ></div>
        <div className="xc-mobile-nav__content">
          <button
            className="xc-mobile-nav__close xc-search-popup__close xc-close-toggler"
            onClick={closeMenu}
          >
            <i className="icon-close"></i>
          </button>
          <div className="logo-box">
            <Link href="/" onClick={closeMenu}>
              <img
                src="/assets/img/logo/white-logo.png"
                width="150"
                alt="eTus Camera Store"
              />
            </Link>
          </div>

          <div className="xc-mobile-nav__menu">
            <nav className="xc-mobile-nav">
              <ul className="xc-mobile-nav__list">
                {menuData.map((item) => (
                  <li
                    key={item.id}
                    className={item.submenu ? "has-submenu" : ""}
                  >
                    <Link href={item.route || "#"} onClick={closeMenu}>
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <ul className="xc-mobile-nav__submenu">
                        {item.submenu.map((child) => (
                          <li key={child.id}>
                            <Link href={child.route || "#"} onClick={closeMenu}>
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <ul className="xc-mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:info@etus.com">info@etus.com</a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:+252637002225">+(252) 637002225</a>
            </li>
          </ul>

          <div className="xc-mobile-nav__top">
            <div className="xc-mobile-nav__social">
              <a href="https://facebook.com" className="fab fa-facebook-f"></a>
              <a href="https://twitter.com" className="fab fa-x-twitter"></a>
              <a href="https://instagram.com" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
