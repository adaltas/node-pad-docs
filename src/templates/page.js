import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data

  const { frontmatter, html, fields } = markdownRemark

  return (
    <Layout page={{ ...frontmatter, ...fields }}>
      <SEO
        title={frontmatter.title}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <section>
        <div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
      fields {
        edit_url
      }
    }
  }
`
