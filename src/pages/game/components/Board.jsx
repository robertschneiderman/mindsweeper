import React, {Component} from 'react';
import Row from './Row';

class Board extends Component {
    constructor(props) {
        super(props);
    }

    renderRows() {
        let rows = [];
        for (let i = 0; i < this.props.boardSize; i++) {
            rows.push(<Row y={i} {...this.props} flagging={this.props.flagging} />);
        }
        return rows;
    }    

    render() {
        return(
            <div className="board c-d">
                <p className="text-a">Press "f" to toggle flagging</p>            
                {this.renderRows()}
            </div>
        );
    }
}

export default Board;