import React, {Component} from 'react';
class Space extends Component {
    constructor(props) {
        super(props);
        this.attackSpace = this.attackSpace.bind(this);
    }

    // getAllRevealedSpaces(spacesToReveal, x, y) {
    //     let adjacents = this.getAdjacents(x, y);
    //     adjacents.forEach(adjacent => {
    //         let newY = adjacent[0]; 
    //         let newX = adjacent[1]; 
    //         let space = this.props.grid[newY][newX];
    //         if (space.value !== 'bomb' &&
    //             !space.revealed) {
    //                 spacesToReveal.push([newY, newX]);
    //                 this.getAllRevealedSpaces(spacesToReveal, adjacent[1], adjacent[0]);
    //             }
    //     });
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.revealed !== this.props.revealed) {
    //         let { x, y } = this.props;
    //         let adjacents = this.getAdjacents(x, y);
    //         adjacents.forEach(adjacent => {
    //             this.attackSpace();
    //         });
    //     }
    // }

    attackSpace() {
        let { x, y, grid, flagging } = this.props;
        if (flagging) {
            this.props.flagSpace({y, x});
        } else if (grid[y][x].value === 'bomb') {
            this.props.endGame();
        } else {
            this.props.attackSpace({y, x});            
        }
        // let spacesToReveal = [];
        // this.getAllSpacesToReveal(spacesToReveal, x, y);

    }

    getValue() {
        let { revealed, value, flagged, adjacentBombs } = this.props;
        switch(revealed) {
        case true:
            if (value === 'bomb') {
                return <img className="img-a" src="./static/images/bomb.svg" />;
            } else {
                return adjacentBombs === 0 ? '' : <span className="img-a">{adjacentBombs}</span>;
            }
        case false:
            if (flagged) {
                return <img className="img-a" src="./static/images/flag.svg" />;
            } else {
                return '';
            }
        }
    }

    revealAll() {
        let { value, flagged, adjacentBombs } = this.props;
        if (value === 'bomb') {
            return <img className="img-a" src="./static/images/bomb.svg" />;
        } else if (flagged) {
            return <img className="img-a" src="./static/images/flag.svg" />;
        } else {
            return adjacentBombs === 0 ? '' : <span className="img-a">{adjacentBombs}</span>;
        }        
    }

    render() {
        let { x, y, phase, revealed } = this.props;
        let className = !revealed ? "space box-a unrevealed" : "space box-a";
        return(
            <div className={className} onClick={this.attackSpace.bind(this, {x, y})}>
                {(phase === 'over') ? this.revealAll() : this.getValue()}
            </div>
        );
    }
}

export default Space;