import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import styles from "./layout.module.scss"

const Layout = ({ children }) => (
  <>
    <Header />
    <div className={styles.layout}>
      <main className={styles.layout__main}>{children}</main>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
