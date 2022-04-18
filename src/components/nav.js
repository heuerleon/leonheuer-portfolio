import React, { useEffect, useState } from "react";


const Nav = () => {
  useEffect(() => {
    scrollBefore = window.scrollY;
    setInterval(handleScroll, 10);
  });

  const [showMobileNav, setShowMobileNav] = useState(false);
  const [navBarFixed, setNavBarFixed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  let scrollBefore = 0;
  let shiftedDownBefore = false;

  function handleScroll() {
    if (window.scrollY == 0) {
      setScrolled(false);
      setNavBarFixed(false);
      shiftedDownBefore = false;
    } else if (scrollBefore !== window.scrollY) {
      let scrolledUp = scrollBefore > window.scrollY;
      if (navBarFixed != scrolledUp) {
        setNavBarFixed(scrolledUp);
        shiftedDownBefore = scrolledUp;
      }
      if (scrolled == scrolledUp && shiftedDownBefore) {
        setScrolled(!scrolledUp);
        shiftedDownBefore = scrolledUp;
      }
    }

    scrollBefore = window.scrollY;
  }

  function toggleMobileNav(event) {
    event.preventDefault();
    setShowMobileNav(it => !it);
  }

  return (
    <nav className={`alt-section-dark ${scrolled ? "nav-default" : ""} ${navBarFixed ? "nav-fixed" : ""}`}>
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
            <a href="/#featured">Featured</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#services">Services</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
        <div className="mobile-nav">
          <button className="mobile-nav-switcher" onClick={toggleMobileNav}>
            <i className={`fas ${showMobileNav ? "fa-times" : "fa-bars"}`}></i>
          </button>
          <ul
            className={`mobile-nav-links ${
              showMobileNav ? "mobile-nav-links-visible" : ""
            } onClick={toggleMobileNav}`}
          >
            <li>
              <a href="/#top">Home</a>
            </li>
            <li>
              <a href="/#about">About Me</a>
            </li>
            <li>
              <a href="/#featured">Featured</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#services">Services</a>
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
