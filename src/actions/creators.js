import {
  START_GAME,
  INITIALIZE_PIECES,
  RESTART_GAME,
  PLAYER_INITIALIZE_BOARD,
  OPPONENT_INITIALIZE_BOARD,
  PLAYER_MOVE,
  OPPONENT_MOVE,
} from './constants';

const creators = {
  startGame: () => ({ type: START_GAME }),
  initialize: () => ({ type: INITIALIZE_PIECES }),
  restart: () => ({ type: RESTART_GAME }),
  playerInitializeBoard: (payload) => ({
    type: PLAYER_INITIALIZE_BOARD,
    payload,
  }),
  opponentInitializeBoard: (payload) => ({
    type: OPPONENT_INITIALIZE_BOARD,
    payload,
  }),
  playerMove: (payload) => ({
    type: PLAYER_MOVE,
    payload,
  }),
  opponentMove: () => ({
    type: OPPONENT_MOVE,
  }),
};

const {
  startGame,
  initialize,
  restart,
  playerInitializeBoard,
  opponentInitializeBoard,
  playerMove,
  opponentMove,
} = creators;

export {
  startGame,
  initialize,
  restart,
  playerInitializeBoard,
  opponentInitializeBoard,
  playerMove,
  opponentMove,
};