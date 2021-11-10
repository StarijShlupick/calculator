import { css } from 'styled-components'

const font = 'sans-serif'

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

const spaces = [0, 4, 8, 16, 32, 64, 128]

const fontSizes = [12, 14, 16, 20, 24, 32, 40, 56, 64, 72, 80]

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const themes = {
  light: {
    name: 'Light theme',
    above,
    below,
    boxShadows,
    font,
    spaces,
    fontSizes,
    colors: {
      primary: '#434343',
      secondary: '#707070',
      secondaryLight: '#F2F2F2',
      textPrimary: '#000000',
      textSecondary: '#FFFFFF',
      background: '#FFFFFF',
    },
  },
  colored: {
    name: 'Colored theme',
    above,
    below,
    boxShadows,
    font,
    spaces,
    fontSizes,
    colors: {
      primary: '#125C13',
      secondary: '#3E7C17',
      secondaryLight: '#E9F7F7',
      textPrimary: '#000000',
      textSecondary: '#FFFFFF',
      background: '#F7FFFF',
    },
  },
  dark: {
    name: 'Dark theme',
    above,
    below,
    boxShadows,
    font,
    spaces,
    fontSizes,
    colors: {
      primary: '#707070',
      secondary: '#363636',
      secondaryLight: '#515151',
      textPrimary: '#FFFFFF',
      textSecondary: '#FFFFFF',
      background: '#434343',
    },
  },
}
