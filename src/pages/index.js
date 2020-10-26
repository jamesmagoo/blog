import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    The Pilibeen Móna
    <br/>
    <div style={{ maxWidth: `300px`, margin: 'auto', marginTop: '75px'}}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
