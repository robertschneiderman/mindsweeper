import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import Display from './Display';
import Board from './Board';
import Setup from './Setup';

export class Game extends Component {

  newGame() {
    this.props.newGame();
  }

  render() {
    let {phase, bombs} = this.props;
    return (
      <div className="game" style={{width: '100%', height: '100%'}}>
        {
          (phase === 'setup') ?
            <Setup {...this.props} />
            :
            <div style={{width: '100%', height: '100%'}}>
              {(phase === 'over') ?
              <div className="c-c">
                <h1 className="hl-b">Game Over</h1>
                <button onClick={this.newGame.bind(this)} className="btn-c">Play Again?</button>
              </div>
              : ''}
              <Board {...this.props} />
            </div>
        }
      </div>
    );
  }
}

Game.PropTypes = {
    actions: PropTypes.object.isRequired,
};

/* istanbul ignore next */
function mapStateToProps(state) {
  
  return {
    phase: state.game.phase,
    boardSize: state.game.boardSize,
    bombs: state.game.bombs,
    grid: state.game.grid
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    startGame : payload => dispatch(actions.startGame(payload)),
    attackSpace : payload => dispatch(actions.attackSpace(payload)),
    endGame : payload => dispatch(actions.endGame(payload)),
    newGame : payload => dispatch(actions.newGame(payload))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
