import { isValidInput } from '@/services/computeLogic'
import { store } from '@/store'
import { addToHistory } from '@/actions'
import { compute } from '@/services/compute'
import { Command } from './command'

export class ComputeCommand extends Command{
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
