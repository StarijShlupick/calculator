const { ADD_TO_HISTORY } = require("@/constants")

const historyStack = []

export const historyReducer = (state = historyStack, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return [...state, action.payload]
      /* eslint-disable no-unreachable */
      break
      /* eslint-enable no-unreachable */
    default:
      return state
  }
}
