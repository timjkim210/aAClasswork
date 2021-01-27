import React from 'react'
import * as Minesweeper from '../minesweeper'


class Tile extends React.Component {
        render() {
            let tileText = "";
            if(this.explored){
                if(this.adjacentBombCount() > 0) {
                    tileText = this.adjacentBombCount().toString();
                } 
            }
            if(this.flagged){
               tileText = '🚩';
            }
            if(this.bombed){
                tileText = '💣';
            }
            return(
                <div className='tile'>{tileText}</div>
            )
        }
}

export default Tile