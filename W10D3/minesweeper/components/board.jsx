import React from 'react'
import * as Minesweeper from '../minesweeper'


class Board extends React.Component {
    render() {
        return (
            <div>{this.props.board.map((row) => {
                    return <div>{row}</div>
                    })
                }
            </div>
        )
    }
}

export default Board