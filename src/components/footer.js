import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "glamor"

const styles = {
  root: {
    background: `#1E1633`,
    backgroundSize: "cover",
    padding: "2rem 0",
  },
  container: {
    maxWidth: 800,
    display: "flex",
    flexWrap: "wrap",
    color: "white",
    margin: "0 auto",
    "@media (max-width: 960px)": {
      padding: "0rem 1rem",
    },
    "& h2": {
      margin: "1.5rem 0 1rem 0",
      fontWeight: "normal",
      fontSize: "1.4rem",
      // textAlign: 'left',
    },
    "& ul, & p": {
      margin: "0 0 0 0",
    },
    "& li": {
      margin: 0,
      textIndent: 0,
      listStyleType: "none",
    },
    "& a": {
      textDecoration: "none",
      color: "white",
      // ':hover': {
      //   color: '#34BF1C',
      // },
    },
    "& p a": {
      textDecoration: "underline",
    },
  },
  navigate: {
    // width: '25%',
    flex: "1",
    "@media (max-width: 960px)": {
      // width: '50%',
      flex: "0 0 50%",
    },
  },
  contribute: {
    // width: '25%',
    flex: "1",
    "@media (max-width: 960px)": {
      // width: '50%',
      flex: "0 0 50%",
    },
  },
  about: {
    // width: '100%',
    flex: "2",
    "@media (max-width: 960px)": {
      // width: '100%',
      flex: "0 0 100%",
    },
  },
}

const Footer = () => (
  <footer className={css(styles.root)}>
    <div className={css(styles.container)}>
      <div className={css(styles.navigate)}>
        <h2>Navigate</h2>
        <ul>
          <li>
            <Link to="/usage/">Usage</Link>
          </li>
          <li>
            <Link to="/changelog/">Changelog</Link>
          </li>
          <li>
            <Link to="/contribute/">Contribute</Link>
          </li>
        </ul>
      </div>

      <div className={css(styles.contribute)}>
        <h2>Contribute</h2>
        <ul>
          <li>
            <a
              href="https://github.com/adaltas/node-pad/"
              rel="noopener"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://github.com/adaltas/node-pad/issues/"
              rel="noopener"
              target="_blank"
            >
              Issue Tracker
            </a>
          </li>
          <li>
            <Link to="/license/">MIT License</Link>
          </li>
        </ul>
      </div>

      <div className={css(styles.about)}>
        <h2>About</h2>
        <p>
          Node.js Pad is&nbsp;a&nbsp;simple and elegant function to&nbsp;pad
          strings in&nbsp;both left and right directions.
        </p>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
