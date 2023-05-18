import React, { Component } from 'react';
import {Players} from '../shared/ListOfPlayers';

export default class PlayersComponent extends Component {
  render() {
    return (
      <div className='container'>
        {Players.map((player, index) => (
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
    );
  }
}