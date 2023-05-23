import React, { Component } from 'react'
import { players } from '../shared/ListOfPlayers';
import PlayersPresentation from './PlayersPresentation';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
           Players: players
        };
     }
  render() {
    return <PlayersPresentation players={this.state.Players}/>
  }
}
export default Main
