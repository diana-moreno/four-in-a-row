export const instructions = {
    title: 'INSTRUCTIONS',
    clickOnAColumn: 'Click on a column to drop your piece.',
    goalLong: 'The goal is to connect four pieces vertically, horizontally or diagonally before your rival.',
    goalShort: 'Make four in a row to win!',
    playersShort: 'PLAYERS',
    playersLong: 'You can play against a friend in the same Pc or try your luck against the computer, up to you!',
}

export const singlePlayer = {
    pcTurn: 'PC',
    secondPlayer: 'Player 2',
    restart: 'Restart',
    endGame: 'End game',
    playerTurn: playerName =>
        `${playerName === 'Player 2' ? 'Player 2' : 'Player PC'}, is your turn.`,
    winOrDraw: (win, playerName) => win
        ? `${playerName} wins!`
        : 'This is a draw!',
}

export const twoPlayers = {
    ...singlePlayer,
    // override the player turn fn
    playerTurn: playerName => `${playerName}, is your turn.`,
    playerOne: 'Player 1',
    playerTwo: 'Player 2',
}