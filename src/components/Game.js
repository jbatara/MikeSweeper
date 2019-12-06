import React from 'react';
import PlayArea from './PlayArea';
import Header from './Header';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.createGameBoard = this.createGameBoard.bind(this);
        this.generateMines = this.generateMines.bind(this);
        this.adjacentSquares = this.adjacentSquares.bind(this);
        this.state = {
            size: 10,
            gameBoard: this.createGameBoard(10),
            mineCoords: this.generateMines(1)
        }
    }

    createGameBoard(size) {
        let gameBoard = [];
        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                const newObject = {
                    content: '0',
                    clicked: false,
                    rightClickStatus: null
                }
                row.push(newObject);
            }
            gameBoard.push(row);
        }
        return gameBoard;
    }

    generateMines(quantity) {
        const gameBoardSize = 10;
        let mineCoords = [];
        while (mineCoords.length < quantity) {
            let x = Math.floor(Math.random() * gameBoardSize);
            let y = Math.floor(Math.random() * gameBoardSize);
            let newCoord = [x, y];
            if (!mineCoords.includes(newCoord)) {
                mineCoords.push(newCoord);
            }
        }
        return mineCoords;
    }

    addMines(gameBoard, mineCoords) {
        const gameBoardSize = gameBoard.length;
        // const mineCoords = this.state.mineCoords;
        for (let row = 0; row < gameBoardSize; row++) {
            for (let column = 0; column < gameBoardSize; column++) {
                const currentCoord = [row, column];
                if (mineCoords.includes(currentCoord)) {
                    gameBoard[row][colunn].content = "mine";
                }
            }
        }
        return gameBoard;
    }

    coordinateEquality(coordinate1, coordinate2) {
        if (coordinate1[0] === coordinate2[0] && coordinate1[1] === coordinate2[1]) {
            return true;
        }
        else {
            return false;
        }
    }

    adjacentSquares(coordinates) { //this function will return all valid adjacent squares to the given coordinates
        let adjacentSquares = [];
        let gameBoardSize = 10;
        const originalX = coordinates[0];
        const originalY = coordinates[1];
        const newOriginX = originalX - 1;
        const newOriginY = originalY - 1;

        for (let row = 0; row < 3; row++) {
            let squareX = newOriginX + row;
            for (let column = 0; column < 3; column++) {
                let squareY = newOriginY + column;
                let square = [squareX, squareY];
                if (!this.coordinateEquality([originalX, originalY], square) && squareY >= 0 && squareX >= 0 && squareY < gameBoardSize && squareX < gameBoardSize) {
                    adjacentSquares.push(square);
                }
            }
        }
        return adjacentSquares;
    }

    calculateNumbers(mineCoords, gameBoard) {
        const gameBoardLength = this.state.gameBoard.length;
        for (let i = 0; i < gameBoardLength; i++) {
            for (let j = 0; j < gameBoardLength; j++) {
                const currentCoord = [i, j];
                const content = gameBoard[i][j].content;
                if (content !== "mine") {
                    const adjacentSquares = this.adjacentSquares([i, j]);
                    let counter = 0;
                    adjacentSquares.forEach(function (squareCoord) {
                        if (mineCoords.includes(squareCoord)) {
                            counter++
                        }
                    });
                    gameBoard[i][j].content = counter.toString();
                }
            }
        }
        return gameBoard;
    }



    render() {
        return (
            <div>
                <Header />
                <PlayArea gameBoard={this.state.gameBoard} onClick={this.props.handleLeftClick(event)} onContextMenu={this.props.handleRightClick(event)} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLeftClick: (event) => dispatch({type: 'LEFT_CLICK', gameBoard:this.state.gameBoard, row:event.target.key.split('-')[0].parseInt(), column: event.target.key.split('-')[1].parseInt()}),
        handleRightClick: (event) => dispatch({type: 'RIGHT_CLICK', gameBoard:this.state.gameBoard,row:event.target.key.split('-')[0].parseInt(), column: event.target.key.split('-')[1].parseInt()})
    }
}

export default connect(null, mapDispatchToProps)(Game);