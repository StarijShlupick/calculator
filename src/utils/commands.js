import { compute } from "./compute"

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
    return compute(currentValue)
  }
  
  undo(currentValue) {
    return []
  }
}