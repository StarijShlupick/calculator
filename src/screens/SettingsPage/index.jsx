import { ClearHistoryButton } from "@/components/ClearHistoryButton"
import { ThemeSelector } from "@/components/Select"
import { ContainerLayout } from "@/layouts"
import React from "react"
import { SettingsHeader, SettingsContentWrapper, SwitchThemeHeader } from "./components"

export const SettingsPage = () => {
  return (
    <ContainerLayout padding={84}>
      <SettingsHeader>Settings</SettingsHeader>
      <SwitchThemeHeader>Switch Theme</SwitchThemeHeader>
      <SettingsContentWrapper>
        <ThemeSelector />
        <ClearHistoryButton />
      </SettingsContentWrapper>
    </ContainerLayout>
  )
}