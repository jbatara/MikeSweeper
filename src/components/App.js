import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { directive } from '@babel/types';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.createGameBoard = this.createGameBoard.bind(this);
    this.generateMines = this.generateMines.bind(this);
    this.state ={
      size: 10,
      gameBoard: this.createGameBoard(10),
      mineCoords: this.generateMines(1)
    }
  }

  createGameBoard(size){
    let gameBoard = [];
    for(let i =0; i < size; i++)
    {
      let row=[];
      for(let j = 0; j<size; j++)
      {
        row.push('0');
      }
      gameBoard.push(row);
    }
    return gameBoard;
  }

  generateMines(quantity){
    const gameBoardSize = 10;
    let mineCoords = [];
    while(mineCoords.length < quantity)
    {
      let x = Math.floor(Math.random()*gameBoardSize);
      let y = Math.floor(Math.random()*gameBoardSize);
      let newCoord = [x,y];
      if(!mineCoords.includes(newCoord)){
        mineCoords.push(newCoord);
      }
    }
    return mineCoords;
  }

  addMines(gameBoard){
    const gameBoardSize = this.state.gameBoard.length;
    const mineCoords = this.state.mineCoords;
    for(let row = 0; row < gameBoardSize; row++)
    {
      for(let column = 0; column < gameBoardSize; column++)
      {
        const currentCoord = [row, column];
        if(mineCoords.includes(currentCoord))
        {
          gameBoard[row][colunn] = "mine";
        }
      }
    }
    return gameBoard;
  }

  coordinateEquality(coordinate1, coordinate2){
    if(coordinate1[0] === coordinate2[0] && coordinate1[1] === coordinate2[1]){
      return true;
    }
    else{
      return false;
    }
  }

  adjacentSquares(coordinates){ //this function will return all valid adjacent squares to the given coordinates
    let adjacentSquares = [];
    const originalX = coordinates[0];
    const originalY = coordinates[1];
    const newOriginX = originalX -1;
    const newOriginY = originalY -1;

    for(let row=0; row <3; row++){
      let squareX = newOriginX + row;
      for(let column=0; column<3; column++){
        let squareY = newOriginY+column;
        let square = [squareX, squareY];
        if(!this.coordinateEquality([originalX, originalY], square) && squareY >= 0 && squareX >= 0 && squareY <10 && squareX <10){
          adjacentSquares.push(square);
        }
      }
    }
    return adjacentSquares;
  }

  render() {
    return (
      <div>
        <Switch>
          
        </Switch>
      </div>
    );
  }
}

export default App;
