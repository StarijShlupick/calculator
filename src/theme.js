import { css } from 'styled-components'

const font = 'sans-serif'

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

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
    spaces: [0, 4, 8, 16, 32, 64, 128],
    fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 64, 72, 80],
    colors: {
      primary: '#434343',
      secondary: '#707070',
      secondaryLight: '#F2F2F2',
      textPrimary: '#000000',
      textSecondary: '#ffffff',
      backgound: '#ffffff',
    },
  },
  colored: {
    name: 'Colored theme',
    above,
    below,
    boxShadows,
    font,
    spaces: [0, 4, 8, 16, 32, 64, 128],
    fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 64, 72, 80],
    colors: {
      primary: '#434343',
      secondary: '#707070',
      secondaryLight: '#F2F2F2',
      textPrimary: '#000fff',
      textSecondary: '#000fff',
      backgound: '#ffffff',
    },
  },
  dark: {
    name: 'Dark theme',
    above,
    below,
    boxShadows,
    font,
    spaces: [0, 4, 8, 16, 32, 64, 128],
    fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 64, 72, 80],
    colors: {
      primary: '#151515',
      secondary: '#301B3F',
      secondaryLight: '#3C415C',
      textPrimary: '#000000',
      textSecondary: '#B4A5A5',
      backgound: '#ffffff',
    },
  },
}
