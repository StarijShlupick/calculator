import { ClearHistoryButton } from "@/components/ClearHistoryButton"
import { ThemeSelector } from "@/components/Select"
import React from "react"

export const SettingsPage = () => {
  return (
    <React.Fragment>
      <h1>Settings</h1>
      <ThemeSelector />
      <ClearHistoryButton />
    </React.Fragment>
  )
}