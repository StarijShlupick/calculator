export const getSelectedTheme = (themesObj, themeName) => {
  const selectedTheme = Object.values(themesObj).find(theme => theme.name === themeName)
  return Object.keys(themesObj).find(key => themesObj[key] === selectedTheme)
}
