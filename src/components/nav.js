import React, { useEffect, useState } from "react";


const Nav = () => {
  useEffect(() => {
    setInterval(handleScroll, 20);
  }, []);

  const [showMobileNav, setShowMobileNav] = useState(false);
  const [navBarFixed, setNavBarFixed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  let scrollBefore = 0;
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    scrollBefore = window.scrollY;
  }
  let shiftedDownBefore = false;

  function handleScroll() {
    if (window.scrollY === 0) {
      setScrolled(false);
      setNavBarFixed(false);
      shiftedDownBefore = false;
    } else if (scrollBefore !== window.scrollY) {
      let scrolledUp = scrollBefore > window.scrollY;
      if (navBarFixed !== scrolledUp) {
        setNavBarFixed(scrolledUp);
        shiftedDownBefore = scrolledUp;
      }
      if (scrolled === scrolledUp && shiftedDownBefore) {
        setScrolled(!scrolledUp);
        shiftedDownBefore = scrolledUp;
      }
    }

    scrollBefore = window.scrollY;
  }

  return (
    <nav
      className={`alt-section-dark ${
        scrolled && !showMobileNav ? "nav-default" : ""
      } ${navBarFixed || showMobileNav ? "nav-fixed" : ""}`}
    >
      <div className="nav-inner">
        <h4 className="style-headline">leonheuer</h4>
        <ul className="nav-links">
          <li>
            <a href="/#top">Home</a>
          </li>
          <li>
            <a href="/#about">About Me</a>
          </li>
          <li>
            <a href="/#services">Services</a>
          </li>
          <li>
            <a href="/#featured">Featured</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
        <div className="mobile-nav">
          <button className="mobile-nav-switcher" onClick={setShowMobileNav(it => !it)}>
            <i className={`fas ${showMobileNav ? "fa-times" : "fa-bars"}`}></i>
          </button>
          <ul
            className={`mobile-nav-links ${
              showMobileNav ? "mobile-nav-links-visible" : ""
            }`}
            onClick={setShowMobileNav(it => !it)}
          >
            <li>
              <a href="/#top">Home</a>
            </li>
            <li>
              <a href="/#about">About Me</a>
            </li>
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <a href="/#featured">Featured</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
