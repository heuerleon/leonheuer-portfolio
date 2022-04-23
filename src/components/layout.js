import React from "react"
import Helmet from "react-helmet"
import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children }) => {
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
    </main>
  )
}

export default Layout;