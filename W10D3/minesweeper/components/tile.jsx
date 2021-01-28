import React from 'react'
import * as Minesweeper from '../minesweeper'


class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.updateGame(this.props.tileInst)
    }


    render() {
        let tileInstance = this.props.tileInst
        let tileText = "";
        let tileClass = 'tile';
        if(tileInstance.explored){
            tileClass = 'revealed'
            if(tileInstance.adjacentBombCount() > 0) {
                tileText = tileInstance.adjacentBombCount().toString();
            } 
        }
        if(tileInstance.flagged){
            tileClass = 'flagged'
            tileText = '🚩';
        }
        if(tileInstance.bombed){
            tileClass = 'bombed'
            tileText = '💣';
        }
        return(
            <div onClick={this.handleClick} className={tileClass}>{tileText}</div>
        )
    }
}

export default Tile