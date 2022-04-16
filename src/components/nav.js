import React, { useEffect } from "react";

let showMobileNav = false;
let navBarFixed = false;
let scrolled = false;
let scrollBefore = 0;

function toggleMobileNav(event) {
  event.preventDefault();
  showMobileNav = !showMobileNav;
}

const Nav = () => {
  useEffect(() => {
    scrollBefore = window.scrollY;
    setInterval(handleScroll, 20);
  });

  function handleScroll() {
    if (scrollBefore !== window.scrollY) {
      if (window.scrollY < 1) {
        scrolled = false;
        navBarFixed = false;
      } else {
        navBarFixed = scrollBefore > window.scrollY;
        scrolled = !navBarFixed;
      }
      scrollBefore = window.scrollY;
    }
  }
	
  return (
    <nav
      className={`alt-section-dark ${scrolled ? "nav-default" : ""} ${
        navBarFixed ? "nav-fixed" : ""
      }`}
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
