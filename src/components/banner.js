import React, { Component } from "react"
import ReactDom from "react-dom"
import { css } from "glamor"
import ArrowIcon from "../images/arrow.svg"

const styles = {
  bannerContainer: {
    position: "relative",
    textAlign: "center",
    padding: "8rem 0 4rem 0",
    background: "#1B0F27",
    background: "-moz-linear-gradient(-25deg, #1B0F27 26%, #673D88 100%)",
    background: "-webkit-linear-gradient(-25deg, #1B0F27 26%, #673D88 100%)",
    background: "linear-gradient(155deg, #1B0F27 26%, #673D88 100%)",
    filter:
      "progid:DXImageTransform.Microsoft.gradient( startColorstr='#1B0F27', endColorstr='#673D88',GradientType=1 )",
    color: "#fff",
  },
  taglineContainer: {
    margin: "auto",
    maxWidth: "600px",
    fontSize: "1.8rem",
    lineHeight: "2rem",
    marginBottom: "2rem",
    padding: "0rem 1rem",
  },
  badgeContainer: {
    padding: "4rem 0 1rem 0",
    " a": {
      padding: "0 .5rem",
    },
  },
  animationContainer: {
    margin: "auto",
    fontSize: "1rem",
    "> div": {
      textAlign: "left",
      display: "inline-block",
    },
    "> div:first-child": {
      "@media (max-width: 430px)": {
        display: "block",
        textAlign: "center",
      },
    },
    "> div > div": {
      padding: "10px 0",
    },
    " code": {
      background: "none !important",
      color: "#fff !important",
      fontSize: "1.2rem !important",
      transition: "opacity .5s ease-out",
      " span": {
        opacity: 0,
        transition: "opacity .02s ease",
      },
    },
    " code.fired, code.fired span": {
      opacity: "1 !important",
    },
    " img": {
      transition: "opacity .02s ease",
    },
    " img.fired": {
      opacity: "1 !important",
    },
  },
  arrowContainer: {
    margin: "0 40px",
    " img": {
      verticalAlign: "middle",
    },
    "@media (max-width: 430px)": {
      marginLeft: "0",
    },
  },
  resultContainer: {
    padding: "15px",
    background: "#ffffff34",
    borderRadius: "6px",
  },
  hiddenXS: {
    "@media (max-width: 452px)": {
      display: "none",
    },
  },
}

class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.timerIDs = []

    this.code_1 = React.createRef()
    this.code_2 = React.createRef()
    this.img_1 = React.createRef()
    this.img_2 = React.createRef()
    this.res_1 = React.createRef()
    this.res_2 = React.createRef()
  }

  fire(current) {
    const state = {}
    state["code" + current] = true
    this.setState(state)
  }

  componentDidMount() {
    var timer = 300
    timer = this.doAnimation(this.code_1, this.img_1, this.res_1, timer, 1)
    timer += 500
    timer = this.doAnimation(this.code_2, this.img_2, this.res_2, timer, 2)
  }

  doAnimation(code, img, res, timer, current) {
    const startTimer = timer

    if (code) {
      const codeArray = code.current.childNodes[0].textContent.split("")
      var codeArrayNew = []
      var delay = 50
      const items = [30, 70, 100]

      Object.keys(codeArray).map(i => {
        delay += items[Math.floor(Math.random() * items.length)]
        codeArrayNew.push(
          React.createElement(
            "span",
            { key: i, style: { transitionDelay: delay + "ms" } },
            codeArray[i]
          )
        )
      })

      ReactDom.render(codeArrayNew, code.current)
    }

    timer = delay + 400
    if (img) img.current.style.transitionDelay = timer + "ms"

    timer += 400
    if (res) res.current.style.transitionDelay = timer + "ms"

    this.timerIDs.push(setInterval(() => this.fire(current), startTimer))

    return timer
  }

  componentWillUnmount() {
    Object.keys(this.timerIDs).map(i => {
      clearInterval(this.timerIDs[i])
    })
  }

  render() {
    return (
      <div className={css(styles.bannerContainer)}>
        <p className={css(styles.taglineContainer)}>
          Simple and elegant function to&nbsp;pad strings in&nbsp;both left and
          right directions
        </p>
        <div className={css(styles.animationContainer)}>
          <div>
            <div>
              <code
                ref={this.code_1}
                className={this.state.code1 ? "fired" : ""}
              >
                pad("Hello", 8, ".")
              </code>
            </div>
            <div className={css(styles.hiddenXS)}>
              <code
                ref={this.code_2}
                className={this.state.code2 ? "fired" : ""}
              >
                pad(8, "pad!", ".")
              </code>
            </div>
          </div>
          <div className={css(styles.arrowContainer)}>
            <div>
              <img
                ref={this.img_1}
                style={{ opacity: "0" }}
                className={this.state.code1 ? "fired" : ""}
                src={ArrowIcon}
                alt={"Arrow right"}
              />
            </div>
            <div className={css(styles.hiddenXS)}>
              <img
                ref={this.img_2}
                style={{ opacity: "0" }}
                className={this.state.code2 ? "fired" : ""}
                src={ArrowIcon}
                alt={"Arrow right"}
              />
            </div>
          </div>
          <div className={css(styles.resultContainer)}>
            <div>
              <code
                ref={this.res_1}
                style={{ opacity: "0" }}
                className={this.state.code1 ? "fired" : ""}
              >
                Hello...
              </code>
            </div>
            <div className={css(styles.hiddenXS)}>
              <code
                ref={this.res_2}
                style={{ opacity: "0" }}
                className={this.state.code2 ? "fired" : ""}
              >
                ....pad!
              </code>
            </div>
          </div>
        </div>
        <div className={css(styles.badgeContainer)}>
          <div>
            <a
              alt={"View this project on NPM"}
              href={"https://www.npmjs.com/package/pad"}
            >
              <img
                alt={"NPM version"}
                src={"https://img.shields.io/npm/v/pad.svg?style=for-the-badge"}
              />
            </a>
            <a
              alt={"View this project on Travis"}
              href={"https://travis-ci.org/adaltas/node-pad"}
            >
              <img
                alt={"Travis build status"}
                src={
                  "https://img.shields.io/travis/adaltas/node-pad.svg?style=for-the-badge"
                }
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
