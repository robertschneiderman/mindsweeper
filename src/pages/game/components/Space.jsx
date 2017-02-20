import React, {Component} from 'react';
class Space extends Component {
    constructor(props) {
        super(props);
        let state = {
            revealed: false,
            value: null
        };
        this.attackSpace = this.attackSpace.bind(this);
    }

    attackSpace() {
        let { x, y } = this.props;
        this.props.attackSpace({y, x});
    }

    getAdjacents() {
        let { x, y, boardSize } = this.props;
        let adjacents = [];
        for (let a = -1; a <= 1; a++) {
            for (let b = -1; b <= 1; b++) {
                if (a === 0 && b === 0 ) continue;
                let coordX = x + a;
                let coordY = y + b;
                if (coordX < 0 || coordX >= boardSize) continue;
                if (coordY < 0 || coordY >= boardSize) continue;
                adjacents.push([coordY, coordX]);
            }
        }
        return adjacents;
    }

    getAdacentBombCount() {
        let { grid } = this.props;
        let adjacents = this.getAdjacents();
        let bombs = adjacents.filter(adjacent => grid[adjacent[0], adjacent[1].value === 'bomb']);
        return bombs.length;
    }

    getValue() {
        let { revealed, value, flagged } = this.props;
        switch(revealed) {
            case true:
                if (value === 'bombed') {
                    return 'B!';
                } else {
                    return 'E';
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
        let adjacents = this.getAdjacents();
        return(
            <div className="space box-a" onClick={this.attackSpace}>
                
            </div>
        );
    }
}

export default Space;