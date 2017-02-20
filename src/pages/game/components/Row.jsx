import React, {Component} from 'react';
import Space from './space';

class Row extends Component {
    constructor(props) {
        super(props);
    }

    renderSpaces() {
        let spaces = [];
        for (let i = 0; i <= 9; i++) {
            let space = this.props.grid[this.props.y][i];
            let { revealed, attacked } = this.props;
            spaces.push(<Space x={i} y={this.props.y} revealed={revealed} attacked={attacked} {...this.props} />);
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