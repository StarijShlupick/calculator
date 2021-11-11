import { Command } from './command'

export class ClearAllCommand extends Command{
  execute() {
    return []
  }

  undo(currentValue) {
    return currentValue
  }
}
