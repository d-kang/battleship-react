import { createBoard } from '../helpers';
import { createReducer } from '../utils';
import {
  START_GAME,
  INITIALIZE_PIECES,
  RESTART_GAME,
  PLACE_PIECE,
} from '../actions/constants';

const initialState = {
  board_1: createBoard(),
  board_2: createBoard(),
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
    game_mode: 'restart',
    buttonText: 'restart',
    instruction: 'game has started, have fun',
  }),
  [RESTART_GAME]: (state, payload) => ({
    ...state,
    game_mode: 'start',
    buttonText: 'start game',
    instruction: 'press start to start the game'
  }),
  [PLACE_PIECE]: (state, { i, k }) => {
    const player = [...state.board_1];
    player[i][k] = 1;
    return {
      ...state,
      game_mode: state.game_mode,
      board_1: player,
    }
  }
})




