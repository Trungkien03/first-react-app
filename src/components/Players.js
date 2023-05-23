import React from 'react'
import { players } from '../shared/ListOfPlayers';
import { useState } from 'react'
export default function Players () {
  const [player, setPlayer] = useState([])
  return (
    <div className="container">
      {players.map((player) => (
        <div className="column" key={player.id}>
          <div className="card">
            <img src={player.img} />
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <button onClick={()=>{setPlayer(player)}}>
            <a href='#popup1' id='openPopUp'>Detail</a>
            </button>
          </div>
        </div>
      ))}
      <div id="popup1" className="overlay">
        <div className="popup">
          <img src={player.img} />
          <h2>{player.name}</h2>
          <a className="close" href="#">
            &times;
          </a>
          <div className="content">{player.info}</div>
        </div>
      </div>
    </div>
  );
}