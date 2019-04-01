import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "glamor"
import ApiIcon from "../images/icon-api.svg"
import LightIcon from "../images/icon-light.svg"
import MoustacheIcon from "../images/icon-moustache.svg"
import LicenseIcon from "../images/icon-license.svg"

// Syntax
import SyntaxHighlighter, {
  registerLanguage,
} from "react-syntax-highlighter/dist/prism-light"
import javascript from "react-syntax-highlighter/dist/languages/prism/javascript"
import { tomorrow } from "react-syntax-highlighter/dist/styles/prism"
registerLanguage("javascript", javascript)

const codeString1 = `
npm install pad
`.trim()

const codeString2 = `
git clone http://github.com/wdavidw/node-pad.git
`.trim()

const codeString3 = `
const pad = require('pad')
pad('pad', 5)      // "pad  "
pad(5, 'pad')      // "  pad"
pad('pad', 5, '+') // "pad++"
pad(5, 'pad', '+') // "++pad"
`.trim()

const codeString4 = `
const pad = require('pad/lib/es5')
pad('pad', 5)      // "pad  "
`.trim()

const styles = {
  featureContainer: {
    maxWidth: 600,
    margin: "auto",
    "> div": {
      padding: "2rem 0",
      "> div": {
        width: "50%",
        display: "inline-block",
        padding: "1rem 2rem 1rem 3rem",
        position: "relative",
        verticalAlign: "top",
        "> div": {
          position: "absolute",
          width: "2.5rem",
          height: "2.5rem",
          top: ".5rem",
          left: "0rem",
        },
        "> div > img": {
          width: "100%",
          verticalAlign: "bottom",
        },
        "@media (max-width: 768px)": {
          width: "100%",
        },
      },
      "@media (max-width: 768px)": {
        padding: "0",
      },
    },
  },
}

const IndexPage = () => (
  <Layout isHome={true}>
    <SEO
      title="PAD for Node.js"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <div className={"home-page"}>
      <section>
        <div>
          <h2>Key features</h2>
          <div className={css(styles.featureContainer)}>
            <div>
              <div>
                <div>
                  <img src={ApiIcon} alt="Simple API" />
                </div>
                <span>Simple API</span>
              </div>
              <div
                className={css({
                  "@media (max-width: 768px)": {
                    position: "relative",
                    top: "15px",
                  },
                })}
              >
                <div>
                  <img src={LightIcon} alt="Light weight" />
                </div>
                <span className={css({ position: "relative", top: "-15px" })}>
                  Light weight with only one dependency
                </span>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <img src={MoustacheIcon} alt="Well tested, mature" />
                </div>
                <span>Well tested, mature</span>
              </div>
              <div>
                <div>
                  <img src={LicenseIcon} alt="MIT License" />
                </div>
                <span>MIT License</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2>Installing</h2>
          <p>
            Starting with version 1.1.0, Node.js PAD rely on Node.js 4.0.0 or
            more recent. Stick to version 1.0.x if using an older version of
            Node.js.
          </p>
          <p>Via npm:</p>
          <SyntaxHighlighter language="javascript" style={tomorrow}>
            {codeString1}
          </SyntaxHighlighter>
          <p>
            Via git (or downloaded tarball), copy or link the project from a
            discoverable Node.js directory:
          </p>
          <SyntaxHighlighter language="javascript" style={tomorrow}>
            {codeString2}
          </SyntaxHighlighter>
        </div>
      </section>
      <section>
        <div>
          <h2>Getting started</h2>
          <p>The API is quite simple:</p>
          <SyntaxHighlighter language="javascript" style={tomorrow}>
            {codeString3}
          </SyntaxHighlighter>
          <p>
            For TypeScript users, the type definition file is located in
            "./lib/index.d.ts" and declared inside the "package.json" file.
          </p>
          <p>
            This package is written for ES6 supported by Node.js version 7.5 and
            above. For older browsers or older versions of Node.js, use the
            modules inside "./lib/es5".
          </p>
          <SyntaxHighlighter language="javascript" style={tomorrow}>
            {codeString4}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
