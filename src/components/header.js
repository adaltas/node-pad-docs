import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import ReactDom from "react-dom"
import Menu from "./menu"
import Topbar from "./topbar"
import Banner from "./banner"
import { css } from "glamor"

const styles = {
  header: {
    alignItems: "center",
    fontSize: "1.2rem",
    position: "relative",
    zIndex: 100,
  },
  floatMenu: {
    position: "fixed !important",
    bottom: "inherit !important",
  },
}

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      float: false,
    }
  }

  toggleFloat() {
    this.setState({ float: !this.state.float })
  }

  componentDidMount() {
    this.menuNode = ReactDom.findDOMNode(this.refs.menu)
    this.topbarNode = ReactDom.findDOMNode(this.refs.topbar)

    this.menuOffset = this.topbarNode.offsetHeight
    styles.floatMenu.top = this.menuOffset + "px !important"

    window.addEventListener("scroll", this.handleScroll.bind(this))
    this.handleScroll()
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this))
  }

  handleScroll() {
    if (this.menuNode && this.topbarNode) {
      const scrollTop = window.scrollY,
        opacityTop = this.topbarNode.parentElement.offsetHeight / 2

      const opacity = Math.min(
        1,
        1 - Math.floor((opacityTop - scrollTop) / opacityTop * 100) / 100
      )

      this.setState({
        topbarColor: {
          background: "rgba(44, 27, 60, " + opacity + ") !important",
        },
      })

      var toogleHeight =
        this.menuNode.parentElement.offsetHeight -
        this.menuOffset -
        this.menuNode.offsetHeight

      if (window.pageYOffset >= toogleHeight && !this.state.float) {
        this.toggleFloat()
      } else if (window.pageYOffset < toogleHeight && this.state.float) {
        this.toggleFloat()
      }
    }
  }
  render() {
    const { props } = this
    const { siteTitle, isHome, onMenuClick } = props
    return (
      <header className={css(styles.header)}>
        <Topbar
          ref="topbar"
          onMenuClick={onMenuClick}
          isHome={isHome}
          siteTitle={siteTitle}
          className={isHome ? css(this.state.topbarColor) : ""}
        />
        <Menu
          ref="menu"
          isHome={isHome}
          className={this.state.float ? css(styles.floatMenu) : ""}
        />
        {isHome && <Banner />}
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
