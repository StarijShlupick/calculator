export class CalculatorLogic {
  constructor() {
    this.value = []
    this.commandHistory = []
  }

  execute(command) {
    this.value = command.execute(this.value)
    this.commandHistory.push(command)
  }

  undo() {
    const command = this.commandHistory.pop()
    this.value = this.commandHistory.length === 0 ? [] : command.undo(this.value)
  }
}