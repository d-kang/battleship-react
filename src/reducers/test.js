const initialState = {
  testing: 'testing testing'
}

function test(state = initialState, action) {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        testing: 123
      }
    default:
      return state
  }
}

export default test;
