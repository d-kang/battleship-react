import { createReducer } from '../utils';
import {
  createBoard,
  createOpponentBoard,
  generateOpponentMove } from '../helpers';
import {
  START_GAME,
  INITIALIZE_PIECES,
  RESTART_GAME,
  PLAYER_INITIALIZE_BOARD,
  PLAYER_MOVE,
  OPPONENT_MOVE,
} from '../actions/constants';

const initialState = {
  player_board_1: createBoard(),
  opponent_board_2: createOpponentBoard(),
  game_mode: 'start',
  buttonText: 'start game',
  instruction: 'press start to start the game',
  generateMove: generateOpponentMove(),
};

export default createReducer(initialState, {
  [START_GAME]: (state) => ({
    ...state,
    game_mode: 'initialize',
    buttonText: 'initialize pieces',
    instruction: 'Please place your pieces then press the button',
  }),
  [INITIALIZE_PIECES]: (state) => ({
    ...state,
    game_mode: 'game_on',
    buttonText: 'restart',
    instruction: 'Game has started, have fun',
  }),
  [RESTART_GAME]: (state) => ({
    ...state,
    game_mode: 'start',
    buttonText: 'start game',
    instruction: 'Press start to start the game',
    player_board_1: createBoard(),
    opponent_board_2: createOpponentBoard(),
  }),
  [PLAYER_INITIALIZE_BOARD]: (state, { i, k }) => {
    const player = [...state.player_board_1];
    player[i][k] = [1, false];
    return {
      ...state,
      game_mode: state.game_mode,
      player_board_1: player,
    };
  },
  [PLAYER_MOVE]: (state, { i, k }) => {
    const opponent = [...state.opponent_board_2];
    opponent[i][k] = [opponent[i][k][0], true];
    return {
      ...state,
      game_mode: state.game_mode,
      opponent_board_2: opponent,
    };
  },
  [OPPONENT_MOVE]: (state) => {
    const { i, k } = state.generateMove();
    const player = [...state.player_board_1];
    player[i][k] = [...[player[i][k][0], true]];
    return {
      ...state,
      game_mode: state.game_mode,
      player_board_1: player,
    };
  },
});