import { ADDITION_AND_SUBTRACTION, MULTIPLICATION_AND_DIVISION } from "@/constants/calculationType"

export const fixString = string => {
  return string
    .replace(/\(\)/g, "") // clear empty parentheses
    .replace(/--/g, "+")  // -- => +
    .replace(/(\+\+|\*\*|\/\/)/g, (mathc, operator) => operator[0]) // multiple operetors in a row => operator
    .replace(/\+-|-\+/g, "-") // +-,-+ => -
    .replace(/\)\(/g, ")*(") // )( => )*(
    .replace(/(\d)\(/g, "$1*(") // parentheses after digit => multiply
    .replace(/\)(\d)/g, ")*$1") // digit after parentheses => multiply
    .replace(/(\/|\*)\+/g, "$1") // *+, /+ => *, /
}

const calculate = {
  "+": (x, y) => Number(x) + Number(y),
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => {
    if (y === "0") {
      alert('You can not divide by zero')
    }

    return +(x / y).toFixed(3)
  },
}

const calculateExpression = (calculationType = ADDITION_AND_SUBTRACTION, string) => {
  const length = calculationType === MULTIPLICATION_AND_DIVISION
    ? (string.match(/\/|\*/g) || []).length // length of / and *
    : (string.match(/\+|-/g) || []).length // length of - and +
  if (!length) return string

  const regExp = calculationType === MULTIPLICATION_AND_DIVISION
    ? /(\d+(?:\.\d+)?)(\/|\*)(-?\d+(?:\.\d+)?)/ // regexp of / and *
    : /((?:^-)?\d+(?:\.\d+)?)(\+|-)(\d+(?:\.\d+)?)/ // regexp of - and +

  for (let i = 0; i < length; i++) {
    string = string.replace(
      regExp,
      (match, a, oper, b) => calculate[oper](a, b),
    )
    string = fixString(string)
  }

  return string
}

export const throwUnmatchedScopes = string => {
  const paranthesesOpened = (string.match(/\(/g) || []).length
  const paranthesesClosed = (string.match(/\)/g) || []).length

  if (paranthesesOpened !== paranthesesClosed) {
    alert("Incorrect parentheses in " + string)
  }
}

export const isValidInput = string => {
  return string !== '.' &&
  string !== '+' &&
  string !== '-' &&
  string !== '*' &&
  string !== '/'
}

export const throughParenthesesRecursion = string => {
  string = fixString(string)

  const index = string.indexOf("(")
  if (index === -1) return parseExpression(string)

  let scope = "("
  let open = 1

  for (let i = index + 1; i <= string.length; i++) {
    scope += string[i]

    if (string[i] === "(") {
      open++
    } else if (string[i] === ")") {
      open--
    }

    if (open === 0) {
      return throughParenthesesRecursion(
        string.replace(
          scope,
          throughParenthesesRecursion(scope.slice(1, -1)),
        ),
      )
    }
  }
}

export const parseExpression = string => {
  string = fixString(string)
  string = calculateExpression(MULTIPLICATION_AND_DIVISION, string)
  string = calculateExpression(ADDITION_AND_SUBTRACTION, string)
  return string
}