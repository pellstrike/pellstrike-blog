import React from "react"
import PropTypes from "prop-types"

import styles from "./post.module.scss"

const Post = () => (
  <div className={styles.post}>
    <hgroup className={styles.post__header}>
      <h1>가나다라마바사</h1>
      <h2>가나다라마바사 가나다라마바사</h2>
    </hgroup>
    <span className={styles.post__date}>2020.01.14</span>
  </div>
)

Post.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Post
