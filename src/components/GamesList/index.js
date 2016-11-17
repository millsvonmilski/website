import React, { PropTypes } from "react"

import styles from "./index.css"

const GamesList = ({ games }) => {
  return (
    <div className={ styles.listContainer}>
        {
          games.map((game) => (
              <a href={ game.__url } className={ styles.listItem }>
                <img src={ game.cover } />
                <h2 className={ styles.heading }>{ game.name }</h2>
                <p>{ game.description }</p>
              </a>
          ))
        }
    </div>
  )
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired,
}

export default GamesList
