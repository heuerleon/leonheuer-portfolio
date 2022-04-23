import React, { useState } from "react";

const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [invisible, setInvisible] = useState(false);
  let scrollBefore = 0;
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    setInterval(handleScroll, 10);
  }

  const Direction = {
    UP: 0,
    DOWN: 1,
    NONE: 2
  }

  function handleScroll() {
    if (scrollBefore !== window.scrollY) {
      if (window.scrollY === 0) {
        setInvisible(false);
        setFixed(false);
      } else {
        let direction = Direction.NONE;
        if (window.scrollY > scrollBefore) {
          direction = Direction.DOWN;
        }
        if (window.scrollY < scrollBefore) {
          direction = Direction.UP;
        }

        if (direction === Direction.UP) {
          if (!fixed) {
            setInvisible(false);
            setFixed(true);
          }
        }

        if (direction === Direction.DOWN) {
          if (!invisible) {
            setFixed(false);
            setInvisible(true);
          }
        }
      }
    }

    scrollBefore = window.scrollY;
  }

  return (
    <nav
      className={`alt-section-dark ${
        invisible && !showMobileNav ? "nav-default" : ""
      } ${fixed || showMobileNav ? "nav-fixed" : ""}`}
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
          <button className="mobile-nav-switcher" onClick={() => setShowMobileNav(it => !it)}>
            <i className={`fas ${showMobileNav ? "fa-times" : "fa-bars"}`}></i>
          </button>
          <ul
            className={`mobile-nav-links ${
              showMobileNav ? "mobile-nav-links-visible" : ""
            }`}
            onClick={() => setShowMobileNav(it => !it)}
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
