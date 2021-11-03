import { compute } from "./compute"
import { store } from "@/store"
import { addToHistory } from "@/actions"

export class AddCharacterCommand {
  constructor(newChar) {
    this.newChar = newChar
  }

  execute(currentValue) {
    return [...currentValue, this.newChar.toString()]
  }

  undo(currentValue) {
    const prevStack = [...currentValue]
    prevStack.pop()
    return prevStack
  }
}

export class ClearAllCommand {
  execute(currentValue) {
    return []
  }

  undo(currentValue) {
    return currentValue
  }
}

export class ComputeCommand {
  execute(currentValue) {
    const currentValueString = currentValue.join('')
    if (currentValue.length !== 0 && 
      /\+|-|\*|\//g.test(currentValueString) && 
      currentValueString !== '.' && 
      currentValueString !== '+' && 
      currentValueString !== '-' && 
      currentValueString !== '*' && 
      currentValueString !== '/') {
      store.dispatch(addToHistory(currentValue.join('')))
    }
    return compute(currentValue)
  }
  
  undo(currentValue) {
    return []
  }
}