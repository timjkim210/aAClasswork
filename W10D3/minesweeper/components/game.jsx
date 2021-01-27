import React from 'react'
import * as Minesweeper from '../minesweeper'
import Tile from './tile'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: new Minesweeper.Board 
        }
    };

    updateGame() {

    };

    render() {
        return(
            <Tile />
        )
    };
}

export default Game;