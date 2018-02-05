import {
  START_GAME,
  INITIALIZE_PIECES,
  RESTART_GAME,
  PLAYER_PLACE_PIECE,
  COMPUTER_PLACE_PIECE,
} from './constants';

const creators = {
  startGame: () => ({ type: START_GAME }),
  initialize: () => ({ type: INITIALIZE_PIECES }),
  restart: () => ({ type: RESTART_GAME }),
  playerPlacePiece: payload => ({
    type: PLAYER_PLACE_PIECE,
    payload,
  }),
  computerPlacePiece: payload => ({
    type: COMPUTER_PLACE_PIECE,
    payload,
  }),
  guessOpponentPiece: payload => ({
    type: 'GUESS_OPPONENT_PIECE',
    payload,
  }),


};

const {
  startGame,
  initialize,
  restart,
  playerPlacePiece,
  computerPlacePiece,
  guessOpponentPiece,
} = creators;

export {
  startGame,
  initialize,
  restart,
  playerPlacePiece,
  computerPlacePiece,
  guessOpponentPiece,
}