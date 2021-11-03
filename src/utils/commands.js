import { compute } from "./compute"
import { store } from "@/store"
import { addToHistory } from "@/actions"
import { isValidInput } from "./computeLogic"

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
  execute() {
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
      isValidInput(currentValueString)) {
      store.dispatch(addToHistory(currentValue.join('')))
    }
    return compute(currentValue)
  }

  undo() {
    return []
  }
}

export class PassExpressionFromHistory {
  constructor(newChar) {
    this.newChar = newChar
  }

  execute() {
    return [this.newChar]
  }

  undo(currentValue) {
    const prevStack = [...currentValue]
    prevStack.pop()
    return prevStack
  }
}