import React, { useState, useRef } from "react"
import Helmet from "react-helmet"
import Nav from "./nav"
import Footer from "./footer"
import "../style/global.scss";

const Layout = ({ children }) => {
  const [showToTop, setShowToTop] = useState(false);
  const scrollBefore = useRef(0);
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    setInterval(() => handleScroll(), 10);
  }

  function handleScroll() {
    if (scrollBefore.current !== window.scrollY) {
      if (window.scrollY >= 600 && !showToTop) {
        setShowToTop(true);
      }
      if (window.scrollY < 600 && showToTop) {
        setShowToTop(false);
      }
      scrollBefore.current = window.scrollY;
    }
  }
  return (
    <main>
      <Helmet>
        <title>Leon Heuers Portfolio</title>
        <script
          src="https://kit.fontawesome.com/a01c807fba.js"
          crossorigin="anonymous"
        ></script>
        <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
      </Helmet>
      <Nav />
      {children}
      <Footer />
      <span className={`scroll-to-top ${showToTop ? "visible" : ""}`}>
        <a href="#top"><i className="fas fa-chevron-up"></i></a>
      </span>
    </main>
  )
}

export default Layout;