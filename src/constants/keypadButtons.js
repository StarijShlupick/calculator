import { ADD_SYMBOL, CALCULATE_SYMBOL, CLEAR_SYMBOL, REFRESH_SYMBOL } from '@/constants/calculatorActions'

export const KEYPAD_BUTTONS = [
  {
    value: 'C',
    type: CLEAR_SYMBOL,
  },
  {
    value: '7',
    type: ADD_SYMBOL,
  },
  {
    value: '8',
    type: ADD_SYMBOL,
  },
  {
    value: '9',
    type: ADD_SYMBOL,
  },
  {
    value: '*',
    type: ADD_SYMBOL,
  },
  {
    value: '-',
    type: ADD_SYMBOL,
  },
  {
    value: '4',
    type: ADD_SYMBOL,
  },
  {
    value: '5',
    type: ADD_SYMBOL,
  },
  {
    value: '6',
    type: ADD_SYMBOL,
  },
  {
    value: '/',
    type: ADD_SYMBOL,
  },
  {
    value: '+',
    type: ADD_SYMBOL,
  },
  {
    value: '1',
    type: ADD_SYMBOL,
  },
  {
    value: '2',
    type: ADD_SYMBOL,
  },
  {
    value: '3',
    type: ADD_SYMBOL,
  },
  {
    value: '=',
    type: CALCULATE_SYMBOL,
  },
  {
    value: '.',
    type: ADD_SYMBOL,
  },
  {
    value: '(',
    type: ADD_SYMBOL,
  },
  {
    value: '0',
    type: ADD_SYMBOL,
  },
  {
    value: ')',
    type: ADD_SYMBOL,
  },
  {
    value: 'CE',
    type: REFRESH_SYMBOL,
  },
]
