import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { directive } from '@babel/types';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.createGameBoard = this.createGameBoard.bind(this);
    this.state ={
      gameBoard: this.emptyGameBoard(10),
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
