import React from 'react'
import * as Minesweeper from '../minesweeper'


class Tile extends React.Component {
    handleClick(){
        this.props.updateGame()
    }


    render() {
        let tileText = "";
        let tileClass = 'tile';
        if(this.explored){
            tileClass = 'revealed'
            if(this.adjacentBombCount() > 0) {
                tileText = this.adjacentBombCount().toString();
            } 
        }
        if(this.flagged){
            tileClass = 'flagged'
            tileText = '🚩';
        }
        if(this.bombed){
            tileClass = 'bombed'
            tileText = '💣';
        }
        return(
            <div onClick={this.handleClick} className={tileClass}>{tileText}</div>
        )
    }
}

export default Tile