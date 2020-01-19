import { Link } from "gatsby"
import React from "react"

import styles from "./header.module.scss"

const Header = () => (
  <header className={styles.header}>
    <div className={styles.header__container}>
      <Link className={styles.header__brand} to="/">
        Pellstrike
      </Link>
    </div>
  </header>
)

export default Header
