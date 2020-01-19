import React from "react"

import Layout from "../components/layout"
import Post from "../components/post"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Post />
    <Post />
    <Post />
  </Layout>
)

export default IndexPage
