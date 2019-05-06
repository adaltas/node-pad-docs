import React, { Component } from "react"
import { Link } from "gatsby"
import { css } from "glamor"
const styles_nav = {
  link: {
    display: "block",
    lineHeight: "2rem",
    padding: ".2rem 0",
    fontSize: "1.4rem",
  },
  linkActive: {
    fontWeight: "bold",
  },
  icon_up: {
    transform: "rotate(-90deg)",
    transition: "transform .5s ease-out",
  },
  icon_down: {
    transform: "rotate(0deg)",
  },
}

const styles = {
  root: {
    fontWeight: 300,
    height: "100%",
    background: "rgb(44, 27, 60)",
    "@media (min-width: 960px)": {
      display: "flex",
      flexDirection: "column",
    },
    " a": {
      color: "#FFFFFF",
    },
  },
  menu: {
    flexGrow: 1,
    overflow: "auto",
    display: "block",
    padding: "1.5rem 1rem",
    "&:after": {
      content: " ",
      display: "block",
      height: "2rem",
    },
  },
  footer: {
    borderTop: "1px solid #916eb16b",
    padding: "1rem",
    textAlign: "normal",
    fontSize: "1rem",
    position: "absolute",
    bottom: "0",
    color: "#fff",
    background: "#3C234E",
    " a": {
      textDecoration: "underline",
    },
  },
}

class Menu extends Component {
  constructor(props) {
    super(props)
    this.menus = []

    props.pages.map(page => {
      this.menus.push(page)
    })
  }
  render() {
    const { onClickLink } = this.props
    const { menus } = this
    return (
      <aside className={css(styles.root)}>
        <div className={css(styles.menu)}>
          <nav className={css(styles_nav.root)}>
            <Link
              to={"/"}
              className={css(styles_nav.link)}
              activeClassName={css(styles_nav.linkActive).toString()}
              onClick={onClickLink}
            >
              Home
            </Link>
            {Object.keys(menus).map(i => {
              const page = menus[i]
              return (
                <Link
                  key={page.path}
                  to={page.path}
                  className={css(styles_nav.link).toString()}
                  activeClassName={css(styles_nav.linkActive).toString()}
                  onClick={onClickLink}
                >
                  {page.navtitle || page.title}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className={css(styles.footer)}>
          Help us{" "}
          <a
            href="https://github.com/adaltas/node-pad/issues"
            target="_blank"
            rel="noopener"
          >
            improve the docs
          </a>{" "}
          by proposing enhancements and fixing typos.
        </div>
      </aside>
    )
  }
}

export default Menu
