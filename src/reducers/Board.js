import { createBoard, createOpponentBoard } from '../helpers';
import { createReducer } from '../utils';
import {
  START_GAME,
  INITIALIZE_PIECES,
  RESTART_GAME,
  PLAYER_INITIALIZE_BOARD,
  PLAYER_MOVE,
} from '../actions/constants';

const initialState = {
  board_1: createBoard(),
  board_2: createOpponentBoard(),
  game_mode: 'start',
  buttonText: 'start game',
  instruction: 'press start to start the game',
};

export default createReducer(initialState, {
  [START_GAME]: (state, payload) => ({
    ...state,
    game_mode: 'initialize',
    buttonText: 'initialize pieces',
    instruction: 'please place your pieces then press the button',
  }),
  [INITIALIZE_PIECES]: (state, payload) => ({
    ...state,
    game_mode: 'game_on',
    buttonText: 'restart',
    instruction: 'game has started, have fun',
  }),
  [RESTART_GAME]: (state, payload) => ({
    ...state,
    game_mode: 'start',
    buttonText: 'start game',
    instruction: 'press start to start the game'
  }),
  [PLAYER_INITIALIZE_BOARD]: (state, { i, k }) => {
    const player = [...state.board_1];
    player[i][k] = [1, false];
    return {
      ...state,
      game_mode: state.game_mode,
      board_1: player,
    }
  },
  [PLAYER_MOVE]: (state, { i, k }) => {
    const opponent = [...state.board_2];
    opponent[i][k] = [opponent[i][k][0], true];
    return {
      ...state,
      game_mode: state.game_mode,
      board_2: opponent,
    }
  }
})




