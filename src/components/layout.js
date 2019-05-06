import React, { Component } from "react"
import ReactDom from "react-dom"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Drawer from "./Drawer"
import MenuMobile from "./MenuMobile"
import "./layout.css"

import { css } from "glamor"
import MenuIcon from "../images/menu.svg"
require("prismjs/themes/prism-tomorrow.css")

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

    return (
      <Drawer
        breakpoint={this.state.breakpoint}
        open={this.state.open}
        onClickModal={() => this.setState({ open: false })}
        width={"23%"}
        main={
          <>
            <Header
              onMenuClick={toggle}
              ref="header"
              siteTitle={data.site.siteMetadata.title}
              isHome={isHome}
            />
            <main className={!isHome ? css(this.state.mainContainer) : ""}>
              {children}
            </main>
            <Footer />
          </>
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
