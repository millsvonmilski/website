import React, { PropTypes } from "react"

import Page from "../Page"

import styles from "./index.css"

const PageError = ({ error, errorText }) => (
  <Page
    head={{
      hero: "/assets/404.jpg",
      title: error,
      blurb: errorText
    }}
  >
    <div className={ styles.container }>
      <div className={ styles.text }>
        {
          error === 404 &&
          <div>
            { "It seems you found a broken link. " }
            { "Sorry about that. " }
            <br />
            { "Do not hesitate to report this page 😁." }
          </div>
        }
      </div>
    </div>
  </Page>
)

PageError.propTypes = {
  error: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  errorText: PropTypes.string,
}

PageError.defaultProps = {
  error: 404,
  errorText: "Page Not Found",
}

export default PageError
