import React, { PropTypes } from "react"

import styles from "./index.css"

const GamesList = ({ games }) => {
  return (
    <div className={ styles.listContainer}>
        {
          games.map((game) => (
              <a href={ game.__url } className={ styles.listItem } key={ game.__url }>
                <video className={ styles.cover_video } src={game.video} autoPlay loop muted playsInline></video>
                <h2 className={ styles.heading }>{ game.name }</h2>
                <p>{ game.blurb }</p>
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
