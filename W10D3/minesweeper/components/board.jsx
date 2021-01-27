import React from 'react'
import * as Minesweeper from '../minesweeper'


class Board extends React.Component {
    // constructor() {

    // }

    render() {
        console.log(this.props)
        return (
            <div>{this.props.board.grid.map((row, idx) => {
                    return <div key={idx}>{row}</div>
                    })
                }
            </div>
        )
    }
}

export default Board