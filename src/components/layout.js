import React, { Component } from "react"
import ReactDom from "react-dom"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Drawer from "./Drawer"
import MenuMobile from "./MenuMobile"
import TocToggleIcon from "../images/toc-toggle.svg"
import EditIcon from "../images/icon-edit.svg"
import "./layout.css"

require("prismjs/themes/prism-tomorrow.css")
import { css } from "glamor"
import MenuIcon from "../images/menu.svg"

const styles = {
  switcher: {
    position: "absolute",
  },
  buttonContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    position: "relative",
    "> div": {
      position: "absolute",
      textAlign: "right",
      width: "100%",
      top: "3.5rem",
      "> div": {
        display: "inline-block",
        " a": {
          cursor: "pointer",
        },
        " img": {
          width: "2rem",
        },
      },
    },
  },
}

require("typeface-roboto")

class Layout extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      mainContainer: {
        paddingTop: "0px !important",
        "& .toc": {
          display: "none",
          "& h2": {
            marginTop: 0,
          },
          "& ul": {
            marginTop: 0,
            marginBottom: 0,
          },
        },
        " h1": {
          maxWidth: "80%",
        },
      },
      open: false,
      breakpoint: 769,
    }
    this.toc = React.createRef()
    this.content = React.createRef()
  }
  componentDidMount() {
    this.headerNode = ReactDom.findDOMNode(this.refs.header)

    if (this.headerNode) {
      var paddingTop = 0
      this.headerNode.childNodes.forEach(item => {
        paddingTop += item.offsetHeight
      })

      this.setState({
        mainContainer: {
          paddingTop: paddingTop + "px !important",
        },
      })
    }

    if (this.props.intro) {
      this.setState({ open: false })
    } else if (window.innerWidth < this.state.breakpoint) {
      this.setState({ open: false })
    }
  }

  toggle() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { props } = this
    const toggle = this.toggle
    const { children, isHome, data, page } = props

    const handleClickLink = () => {
      if (window.innerWidth < this.state.breakpoint) {
        this.setState({ open: false })
      }
    }

    const pages = data.pages.edges.map(page => {
      return { ...page.node.fields, ...page.node.frontmatter }
    })

    const toggleToc = () => {
      if (!this.props.page) return
      const contentNode = ReactDom.findDOMNode(this.refs.content)
      const tocNode = contentNode.querySelector(".toc")
      if (!tocNode) return
      const display = window.getComputedStyle(tocNode).display
      tocNode.style.display = display === "none" ? "block" : "none"
    }
    return (
      <Drawer
        breakpoint={this.state.breakpoint}
        open={this.state.open}
        onClickModal={() => this.setState({ open: false })}
        width={"23%"}
        main={
          <div ref={this.content}>
            <Header
              onMenuClick={toggle}
              ref="header"
              siteTitle={data.site.siteMetadata.title}
              isHome={isHome}
            />
            <main
              ref="content"
              className={!isHome ? css(this.state.mainContainer) : ""}
            >
              {!isHome && (
                <div className={css(styles.buttonContainer)}>
                  <div>
                    <div>
                      <a
                        onClick={toggleToc}
                        aria-label="Toggle the TOC"
                        data-for="toc-toggle"
                        data-tip="Toggle the TOC"
                      >
                        <img src={TocToggleIcon} alt="Toc tool" />
                      </a>
                    </div>
                    {!page.edit_url && (
                      <div>
                        <a
                          target="_blank"
                          href={page.edit_url}
                          aria-label="Edit the content"
                          data-for="edit"
                          data-tip="Edit the content"
                        >
                          <img src={EditIcon} alt="Toc tool" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {children}
            </main>
            <Footer />
          </div>
        }
        drawer={<MenuMobile pages={pages} />}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const WrappedLayout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site: site {
          siteMetadata {
            title
          }
        }
        pages: allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___sort] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                navtitle
                path
                sort
              }
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

export default WrappedLayout
