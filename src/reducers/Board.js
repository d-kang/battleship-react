import { createBoard } from '../helpers';
import { createReducer } from '../utils';
import {
  START_GAME,
  INITIALIZE_PIECES,
  RESTART_GAME,
} from '../actions/constants';

const initialState = {
  board_1: createBoard(),
  board_2: createBoard(),
  buttonText: 'start game',
  instruction: 'press start to start the game',
};

export default createReducer(initialState, {
  [START_GAME]: (state, payload) => ({
    ...state,
    buttonText: 'initialize pieces',
    instruction: 'please place your pieces then press the button',
  }),
  [INITIALIZE_PIECES]: (state, payload) => ({
    ...state,
    buttonText: 'restart',
    instruction: 'game has started, have fun',
  }),
  [RESTART_GAME]: (state, payload) => ({
    ...state,
    buttonText: 'start game',
    instruction: 'press start to start the game'
  }),
})




