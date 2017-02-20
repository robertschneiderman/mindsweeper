import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../pages/game/actions';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    setDifficulty(difficulty) {
        this.props.setDifficulty(difficulty);
    }
    
    render() {
        return(
            <div className="home">
                <h1 className="hl-a">What difficulty do you want?</h1>
                <button onClick={this.setDifficulty.bind(this, 'easy')} className="btn-a">Easy</button>
                <button onClick={this.setDifficulty.bind(this, 'medium')} className="btn-a">Medium</button>
                <button onClick={this.setDifficulty.bind(this, 'hard')} className="btn-a">Hard</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    setDifficulty: payload => dispatch(actions.setDifficulty(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);