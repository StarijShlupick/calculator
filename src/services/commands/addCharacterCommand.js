import { Command } from './command'

export class AddCharacterCommand extends Command{
  constructor(newChar) {
    super()
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
