import React from 'react'
import * as Minesweeper from '../minesweeper'
import Tile from './tile'


class Board extends React.Component {
    // constructor() {

    // }

    render() {
        console.log(this.props)
        return (
            <div >{this.props.board.grid.map((row, idx) => {
                    return(
                        <div key={idx}>{row.map((tileInst, idx2) =>
                            <div key={idx2}><Tile tileInst={tileInst} updateGame={this.updateGame}/></div>
                        )}</div>
                    )
                    })
                }
            </div>
        )
    }
}

export default Board
