import { throwUnmatchedScopes, throughParenthesesRecursion, fixString, parseExpression } from './computeLogic'

export const compute = valueStack => {
  let resultString = valueStack.join('')

  throwUnmatchedScopes(resultString)
  resultString = throughParenthesesRecursion(resultString)
  resultString = fixString(resultString)

  return parseExpression(resultString).split('')
}
