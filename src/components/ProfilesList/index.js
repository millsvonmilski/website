import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const ProfilesList = ({ profiles }) => {
  return (
    <ul className={ styles.listContainer}>
        {
          profiles.map((profile) => (
            <li key={ profile.__url } className={ styles.listItem }>
              <Link to={ profile.__url }>
                <img src={ profile.icon } />
                <h2 className={ styles.heading }>{ profile.title }</h2>
              </Link>
              <p>{ profile.blurb }</p>
            </li>
          ))
        }
    </ul>
  )
}

ProfilesList.propTypes = {
  profiles: PropTypes.array.isRequired,
}

export default ProfilesList