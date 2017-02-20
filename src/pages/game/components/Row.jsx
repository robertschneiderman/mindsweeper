import React, {Component} from 'react';
import Space from './Space';

class Row extends Component {
    constructor(props) {
        super(props);
    }

    renderSpaces() {
        let spaces = [];
        for (let i = 0; i < this.props.boardSize; i++) {
            let space = this.props.grid[this.props.y][i];
            spaces.push(<Space x={i} y={this.props.y} revealed={space.revealed} adjacentBombs={space.adjacentBombs} value={space.value} flagged={space.flagged} flagging={this.props.flagging} {...this.props} />);
        }

        return spaces;
    }

    render() {
        return(
            <div className="grid-row fb">
                {this.renderSpaces()}
            </div>
        );
    }
}

export default Row;