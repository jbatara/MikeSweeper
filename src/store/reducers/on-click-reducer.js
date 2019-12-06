import Game from "../../components/Game";

const game = new Game();
const initialState = {
    size: 10,
    gameBoard: game.createGameBoard(10),
    mineCoords: game.generateMines(1)
}

const reducer = (state = initialState, action) => {
    const row = action.row;
    const column = action.column;
    const gameBoard = action.gameBoard;
    switch (action.type) {
        case 'LEFT_CLICK':
        if(!gameBoard[row][column].clicked)
            gameboard[row][column].clicked = true;
            return {
                ...state,
                gameBoard: gameBoard
            }
        case 'RIGHT_CLICK':
            return {
                ...state,

            }
    }
    return state
};

export default reducer;