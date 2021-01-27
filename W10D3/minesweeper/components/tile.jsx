import React from 'react'
import * as Minesweeper from '../minesweeper'


class Tile extends React.Component {
        render() {
            let tileText = "";
            if(this.explored){

            }
            if(this.flagged){

            }
            if(this.bombed){
                
            }
            return(
                <div className='tile'>T</div>
            )
        }
}

export default Tile