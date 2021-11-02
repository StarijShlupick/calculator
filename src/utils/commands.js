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