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