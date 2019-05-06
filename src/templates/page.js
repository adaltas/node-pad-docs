import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "glamor"

import TocToggleIcon from "../images/toc-toggle.svg"
import EditIcon from "../images/icon-edit.svg"

const styles = {
  buttonContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    position: "relative",
    "> div": {
      position: "absolute",
      textAlign: "right",
      width: "100%",
      top: "1.5rem",
      " a": {
        marginLeft: ".5rem",
        cursor: "pointer",
      },
      " img": {
        width: "2rem",
      },
    },
  },
}

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, fields } = markdownRemark
  const contentRef = React.createRef()

  const toggleToc = () => {
    const tocNode = contentRef.current.querySelector(".toc")
    if (!tocNode) return
    const display = window.getComputedStyle(tocNode).display
    tocNode.style.display = display === "none" ? "block" : "none"
  }

  return (
    <Layout page={{ ...frontmatter, ...fields }}>
      <SEO
        title={frontmatter.title}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <section>
        <div className={css(styles.buttonContainer)}>
          <div>
            <a
              onClick={toggleToc}
              aria-label="Toggle the TOC"
              data-for="toc-toggle"
              data-tip="Toggle the TOC"
            >
              <img src={TocToggleIcon} alt="Toc tool" />
            </a>
            {fields.edit_url && (
              <a
                target="_blank"
                href={fields.edit_url}
                aria-label="Edit the content"
                data-for="edit"
                data-tip="Edit the content"
              >
                <img src={EditIcon} alt="Toc tool" />
              </a>
            )}
          </div>
        </div>
        <div ref={contentRef}>
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
