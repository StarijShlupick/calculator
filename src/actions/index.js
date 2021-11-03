const { ADD_TO_HISTORY, CLEAR_HISTORY } = require("@/constants")

export const addToHistory = expressionString => {
  return {
    type: ADD_TO_HISTORY,
    payload: expressionString,
  }
}
export const clearHistory = () => {
  return {
    type: CLEAR_HISTORY,
  }
}