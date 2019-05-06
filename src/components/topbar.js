import { Link } from "gatsby"
import React, { Component } from "react"
import { css } from "glamor"
import MenuIcon from "../images/menu.svg"
import BugIcon from "../images/bug.svg"
import GitIcon from "../images/git.svg"
import LogoIcon from "../images/logo-icon.svg"

const styles = {
  headerContainer: {
    background: "rgb(44, 27, 60)",
    width: "100%",
    padding: "1rem 0",
    position: "fixed",
    zIndex: 100,
    "> div": {
      padding: "0",
      maxWidth: "800",
      margin: "0 auto",
      boxSizing: "content-box",
      display: "flex",
      "@media (max-width: 768px)": {
        padding: "0 0 0 4rem",
      },
    },
    "@media (max-width: 960px)": {
      padding: "1rem 0",
    },
    "& *": {
      verticalAlign: "-webkit-baseline-middle",
    },
  },
  iconContainer: {
    display: "contents",
    " a": {
      color: "white",
      padding: "0rem 1rem",
      "@media (max-width: 400px)": {
        padding: "0rem .5rem",
        width: "25px",
      },
    },
  },
  headerHome: {
    zIndex: 100,
  },
  headerLogo: {
    margin: "0.5rem",
    color: "white",
    textDecoration: "none",
    fontSize: "1.75rem",
    fontWeight: "normal",
    "@media (max-width: 400px)": {
      fontSize: "1.3rem",
    },
  },
  grow: {
    flex: "1 1 auto",
  },
  menu: {
    position: "absolute",
    padding: ".5rem",
    top: "0",
    left: ".75rem",
    "@media (min-width: 769px)": {
      display: "none",
    },
  },
  logoIcon: {
    width: "23px",
    verticalAlign: "initial",
    marginLeft: ".75rem",
  },
}

class Topbar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { props } = this
    const { siteTitle, isHome, className, onMenuClick } = props
    return (
      <div
        className={
          (isHome
            ? css(styles.headerContainer) + " " + css(styles.headerHome)
            : css(styles.headerContainer)) +
          " " +
          className
        }
      >
        <div>
          <div className={css(styles.menu)}>
            <a
              onClick={onMenuClick}
              aria-label="Toggle the menu"
              data-for="header-tooltip"
              data-tip="Toggle the menu"
            >
              <img src={MenuIcon} alt="Bug tool" />
            </a>
          </div>

          <div>
            <Link className={css(styles.headerLogo)} to="/">
              {siteTitle}
              <img
                src={LogoIcon}
                alt="Node.js PAD"
                className={css(styles.logoIcon)}
              />
            </Link>
          </div>

          <div className={css(styles.grow)} />

          <div className={css(styles.iconContainer)}>
            <a
              href="https://github.com/adaltas/node-pad/issues"
              rel="noopener"
              target="_blank"
            >
              <img src={BugIcon} alt="Bug tool" />
            </a>
            <a
              href="https://github.com/adaltas/node-pad"
              rel="noopener"
              target="_blank"
            >
              <img src={GitIcon} alt="Bug tool" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Topbar
