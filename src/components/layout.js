import * as React from "react"
import PropTypes from "prop-types"
// styles. Import order here does not decide the emitted bundle order, so
// anything that has to beat bootstrap does it on specificity, not position.
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css"
// react components
import Navbar from "./Navbar"
import Foot from "./Foot"
import ContactBar from "./ContactBar"

const Layout = ({ children }) => {
  return (
    <>
      <ContactBar />
      <Navbar />
      <main>{children}</main>
      <Foot />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
