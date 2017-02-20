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
        let { x, y } = this.props;
        // let spacesToReveal = [];
        // this.getAllSpacesToReveal(spacesToReveal, x, y);

        this.props.attackSpace({y, x});
    }

    getValue() {
        let { revealed, value, flagged, adjacentBombs } = this.props;
        switch(revealed) {
        case true:
            if (value === 'bomb') {
                return 'B!';
            } else {
                return adjacentBombs === 0 ? '' : adjacentBombs;
            }
        case false:
            if (flagged) {
                return 'F';
            } else {
                return 'O';
            }
        }
    }

    render() {
        let { x, y } = this.props;
        return(
            <div className="space box-a" onClick={this.attackSpace.bind(this, {x, y})}>
                {this.getValue()}
            </div>
        );
    }
}

export default Space;