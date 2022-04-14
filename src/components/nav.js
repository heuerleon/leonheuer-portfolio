import React, { useEffect } from 'react';

let showMobileNav = false;
let navBarFixed = false;
let scrolled = false;
let scrollBefore = 0;

const handleScroll = () => {
    if (scrollBefore != window.screenY) {
        if (window.screenY < 1) {
            scrolled = false;
            navBarFixed = false;
        } else {
            navBarFixed = scrollBefore > window.screenY;
            scrolled = !navBarFixed;
        }

        scrollBefore = window.screenY;
    }
}

const Nav = () => {
    useEffect(() => {
        scrollBefore = window.screenY;
        setInterval(handleScroll, 1000 / 60);
    });
    return (
        <nav class="alt-section-dark" className={`${scrolled ? "nav-default" : ""} ${navBarFixed ? "nav-fixed" : ""}`}>
            <div class="nav-inner">
                <h4 class="style-headline">leonheuer</h4>
                <ul class="nav-links">
                    <li><a href='/#top'>Home</a></li
                    ><li><a href='/#about'>About Me</a></li
                    ><li><a href='/#featured'>Featured</a></li
                    ><li><a href='/#projects'>Projects</a></li
                    ><li><a href='/#services'>Services</a></li
                    ><li><a href='/#contact'>Contact</a></li>
                </ul>
                <div class="mobile-nav">
                    <span class="mobile-nav-switcher" onClick={() => showMobileNav = !showMobileNav}>
                        <i class="fas" className={showMobileNav ? "fa-times" : "fa-bars"}></i>
                        </span>
                    <ul class="mobile-nav-links" className={showMobileNav ? "mobile-nav-links-visible" : ""} onClick={() => showMobileNav = !showMobileNav}>
                        <li><a href='/#top'>Home</a></li
                        ><li><a href='/#about'>About Me</a></li
                        ><li><a href='/#featured'>Featured</a></li
                        ><li><a href='/#projects'>Projects</a></li
                        ><li><a href='/#services'>Services</a></li
                        ><li><a href='/#contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Nav;