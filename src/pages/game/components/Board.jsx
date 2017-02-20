import React, {Component} from 'react';
import Row from './Row';

class Board extends Component {
    constructor(props) {
        super(props);
    }

    renderRows() {
        let rows = [];
        for (let i = 0; i <= 9; i++) {
            rows.push(<Row y={i} {...this.props} />);
        }
        return rows;
    }    

    render() {
        return(
            <div className="board">
                {this.renderRows()}
            </div>
        );
    }
}

export default Board;