import { ADD_TO_HISTORY, CLEAR_HISTORY } from '@/constants'

const historyStack = []

export const historyReducer = (state = historyStack, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return [...state, action.payload]
    case CLEAR_HISTORY:
      return []
    default:
      return state
  }
}
