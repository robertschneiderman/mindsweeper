import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import Display from './Display';
import Board from './Board';

export class Game extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="game">
        <Display />
        <Board />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
