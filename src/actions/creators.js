import {
  START_GAME,
  INITIALIZE_PIECES,
  RESTART_GAME,
  PLACE_PIECE,
} from './constants';

const creators = {
  startGame: () => ({ type: START_GAME }),
  initialize: () => ({ type: INITIALIZE_PIECES }),
  restart: () => ({ type: RESTART_GAME }),
  placePiece: (payload) => ({
    type: PLACE_PIECE,
    payload
  }),
};

const {
  startGame,
  initialize,
  restart,
  placePiece,
} = creators;

export {
  startGame,
  initialize,
  restart,
  placePiece,
}