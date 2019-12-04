import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import adjacentSquares from './components/App'

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('returns an empty gameboard',() =>{
  const app = new App();
  const size = 10;
  let emptyGameBoard = [];
  for(let i = 0; i<size; i++)
  {
    let row = [];
    for(let j = 0; j<size;j++)
    {
      row.push('0');
    }
    emptyGameBoard.push(row);
  }
  expect(app.createGameBoard(size)).toEqual(emptyGameBoard);
});

it('returns a list of the adjacent squares',() =>{
  const app = new App();
  const coord = [0,0];
  const squares=[[0,1],[1,0],[1,1]];
  expect(app.adjacentSquares(coord)).toEqual(squares);
});

it('returns a gameBoard with number of mines around that square',() =>{
  const app = new App();
  
  //create empty game board
  let gameBoard = app.createGameBoard(10);

  //make bomb coordinate at origin
  let mineCoordinates = [[0,0]];

  //copy game board for board with just the mine
  let gameBoardWithMine = [...gameBoard];
  //add mine to copied game board
  app.addMines(gameBoardWithMine, mineCoordinates);

  //make 2nd copy of game board that is used as the expected value of test
  let expectedGameBoard = [...gameBoard];
  //add expected values in the 2nd copy of game board
  expectedGameBoard[1][0] = "1";
  expectedGameBoard[1][1] = "1";
  expectedGameBoard[1][0] = "1";


  expect(app.calculateNumbers(mineCoordinates,gameBoardWithMine)).toEqual(expectedGameBoard);
});