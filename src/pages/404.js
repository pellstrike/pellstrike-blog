import React from "react"

import styles from "./404.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <div className={styles.notfound}>
      <h1>404</h1>
      <p>페이지를 찾을 수 없습니다.</p>
    </div>
  </Layout>
)

export default NotFoundPage
