import { Command } from './command'

export class PassExpressionCommand extends Command{
  constructor(newChar) {
    super()
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
