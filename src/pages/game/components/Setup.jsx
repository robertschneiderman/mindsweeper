import React, {Component} from 'react';

class Setup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardSize: 10,
            difficulty: null,
            stage: 'size',
            button: null
        };

        this.onDifficultyChange = this.onDifficultyChange.bind(this);
    }

    onBoardSizeChange(e) {
        this.setState({boardSize: e.target.value});
    }

    onDifficultyChange(difficulty) {
        this.setState({difficulty, button: difficulty});
    }

    stageChange() {
        if (this.state.boardSize > 15) {
            this.setState({boardSize: 15});
        }
        else if (this.state.boardSize < 8) {
            this.setState({boardSize: 8});
        } else {        
            this.setState({stage: 'difficulty'});
        }
    }

    getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getBombNumber(boardSize, difficulty) {
        let percent = difficulty === 'easy' ? .05 :
        difficulty === 'medium' ? .25 : .5;
        return Math.floor(boardSize * boardSize * percent);
    }

    getCoord(boardSize) {
        let x = this.getRandomInt(0, boardSize-1);
        let y = this.getRandomInt(0, boardSize-1);
        return [x, y];
    }

    hasCoord(coords, coord) {
        coords.forEach(cd => {
            if (cd[0] === coord[0] && cd[1] === coord[1]) return true;
        });
        return false;
    }

    generateBombs(boardSize, difficulty) {
        let bombNumber = this.getBombNumber(boardSize, difficulty);
        let coords = [];
        for (let i = 1; i <= bombNumber; i++) {
            let coord = this.getCoord(boardSize);
            while (this.hasCoord(coords, coord)) {
                coord = this.getCoord(boardSize);
            }
            coords.push(coord);
        }
        return coords;
    }

    generateGrid(boardSize, bombs) {
        let grid = [];
        for (let i = 1; i <= boardSize; i++) {
            grid.push([]);
            for (let j = 1; j <= boardSize; j++) {
                grid[grid.length-1].push({revealed: false, flagged: false, value: 'blank'});
            }
        }
        bombs.forEach(bomb => {
            grid[bomb[0]][bomb[1]].value = 'bomb';
        });
        return grid;
    }

    startGame() {
        let { boardSize, difficulty } = this.state;
        let bombs = this.generateBombs(boardSize, difficulty);
        let grid = this.generateGrid(boardSize, bombs);
        this.props.startGame({boardSize, bombs, grid});
    }

    renderPanel() {
        if (this.state.stage === 'size') {
            return (
                <div className="size-panel">
                    <h2 className="hl-a">How big of a board do you want? (8-15)</h2>
                    <input className="input-a" onChange={this.onBoardSizeChange.bind(this)} type="number" name="quantity" min="8" max="15" value={this.state.boardSize} />
                    <button onClick={this.stageChange.bind(this, 'hard')} className="btn-b">Done</button>
                </div>
            );
        } else {
            let easyClassName = this.state.button === 'easy' ? 'btn-a selected' : 'btn-a';
            let mediumClassName = this.state.button === 'medium' ? 'btn-a selected' : 'btn-a';
            let largeClassName = this.state.button === 'hard' ? 'btn-a selected' : 'btn-a';

            return (
                <div className="difficulty-panel">
                    <h2 className="hl-a">What difficulty would you like to play?</h2>
                    <div className="buttons-container c-b">
                        <button onClick={this.onDifficultyChange.bind(this, 'easy')} className={easyClassName}>Easy</button>
                        <button onClick={this.onDifficultyChange.bind(this, 'medium')} className={mediumClassName}>Medium</button>
                        <button onClick={this.onDifficultyChange.bind(this, 'hard')} className={largeClassName}>Hard</button>
                    </div>
                    <button onClick={this.startGame.bind(this)} className="btn-b">Done</button>
                </div>
            );
        }
    }

    render() {
        return(
            <div className="setup">
                <div className="c-a auto">
                    {this.renderPanel()}
                </div>

            </div>
        );
    }
}

export default Setup;