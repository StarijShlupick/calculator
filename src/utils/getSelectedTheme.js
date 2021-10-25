export const getSelectedTheme = (themesObj, themeName) => {
  const selectedTheme = Object.values(themesObj).filter(theme => theme.name === themeName)
  return Object.keys(themesObj).find(key => themesObj[key] === selectedTheme[0])
}