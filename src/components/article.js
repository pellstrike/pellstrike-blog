import React from "react"
import PropTypes from "prop-types"

import styles from "./article.module.scss"

const Article = ({ children }) => <article>{children}</article>

Article.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Article
