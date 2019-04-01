import { Link } from "gatsby"
import React, { Component } from "react"
import ReactDom from "react-dom"
import { css } from "glamor"

const styles = {
  menuContainer: {
    background: "#3C234E2b",
    background: "-moz-linear-gradient(-25deg, #3C234E 26%, #5C3678 100%)",
    background: "-webkit-linear-gradient(-25deg, #3C234E 26%, #5C3678 100%)",
    background: "linear-gradient(155deg, #3C234E 26%, #5C3678 100%)",
    filter:
      "progid:DXImageTransform.Microsoft.gradient( startColorstr='#3C234E', endColorstr='#5C3678',GradientType=1 )",
    width: "100%",
    borderTop: "1px solid #916eb16b",
    position: "absolute",
    bottom: "0",
    zIndex: 100,
    " ul": {
      textAlign: "center",
      maxWidth: "800",
      margin: "auto",
      padding: ".5rem 0",
      " li": {
        display: "inline-block",
        padding: "0 1rem",
        " a": {
          color: "#fff",
          textDecoration: "none",
        },
      },
    },
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  menuHome: {
    background: "#37204a",
    background: "-moz-linear-gradient(-25deg, #37204a 26%, #5a3575 100%)",
    background: "-webkit-linear-gradient(-25deg, #37204a 26%, #5a3575 100%)",
    background: "linear-gradient(155deg, #37204a 26%, #5a3575 100%)",
    filter:
      "progid:DXImageTransform.Microsoft.gradient( startColorstr='#37204a', endColorstr='#5a3575',GradientType=1 )",
    /*bottom: '0',*/
  },
}

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { props } = this
    const { isHome, className } = props
    return (
      <div
        className={
          (isHome
            ? css(styles.menuContainer) + " " + css(styles.menuHome)
            : css(styles.menuContainer)) +
          " " +
          className
        }
      >
        <ul>
          <li>
            <Link to="/usage">Usage</Link>
          </li>
          <li>
            <Link to="/changelog">Changelog</Link>
          </li>
          <li>
            <Link to="/license">MIT License</Link>
          </li>
          <li>
            <Link to="/contribute">Contribute</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu
