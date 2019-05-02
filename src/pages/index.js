import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "glamor"
import IconApi from "../images/icon-api.svg"
import IconLight from "../images/icon-light.svg"
import IconMoustache from "../images/icon-moustache.svg"
import IconLicense from "../images/icon-license.svg"
import IconBundles from "../images/icon-bundles.svg"
import IconDocs from "../images/icon-docs.svg"

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
                  <img src={IconApi} alt="Simple API" />
                </div>
                <span>Simple API</span>
              </div>
              <div>
                <div>
                  <img src={IconLight} alt="Light weight" />
                </div>
                <span>
                  Light weight, 1 dependency
                </span>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img src={IconBundles} alt="CJS, ESM and UMD bundles" />
                </div>
                <span>CJS, ESM and UMD bundles</span>
              </div>
              <div>
                <div>
                  <img src={IconDocs} alt="Documented and tested" />
                </div>
                <span>Documented and tested</span>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img src={IconMoustache} alt="Well tested, mature" />
                </div>
                <span>Well tested, mature</span>
              </div>
              <div>
                <div>
                  <img src={IconLicense} alt="MIT License" />
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
            Bundles in multiple formats are available: CommonJS, ESM and UMD.
            Node.js and ESM-aware tools will automatically discover the
            appropriate bundle format from the `package.json` declaration file.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
