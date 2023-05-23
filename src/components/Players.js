import React, { Component } from 'react';
import {players} from '../shared/ListOfPlayers';

export default function Players() {
  return(
    <div className='container'>
        {players.map((player, index) => (
          <div className='column' key={index}>
            <div className='card'>
              <img src={player.img} alt={player.name} />
              <h3>{player.name}</h3>
              <p className='title'>{player.club}</p>
              <p>
                <button>Detail</button>
              </p>
            </div>
          </div>
        ))}
      </div>
  )
}