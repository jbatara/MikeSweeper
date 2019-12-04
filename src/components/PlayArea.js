import React from 'react';
import Tile from './Tile';

function PlayArea(props)
{
  let gameBoard = props.gameBoard;
  let clickedBoard = props.clickedBoard;
  function makeRow(rowArray, rowIndex){
    var rowStyle = {
      padding: '0px',
      margin: '0px',
      fontSize: '0',
      border: '1px'
    }
    return(
      <div style={rowStyle} key={rowIndex}>
        {rowArray.map((pieces, colIndex) => <Tile content={pieces.content} clicked={pieces.clicked} key={`${rowIndex}-${colIndex}`} />)}
      </div>
    )
  }
  return (
    <div>
      {gameBoard.map((row, rowIndex) => {
          return(makeRow(row, rowIndex));
        })
      }
    </div>
  );
}
export default PlayArea;