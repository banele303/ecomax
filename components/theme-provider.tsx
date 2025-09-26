"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  enableSystem?: boolean
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  enableSystem = true,
  storageKey = "theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  // Load stored theme on first mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey) as Theme | null
      if (stored === "light" || stored === "dark" || stored === "system") {
        setTheme(stored)
      }
    } catch (e) {
      // ignore
    }
  }, [storageKey])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system" && enableSystem) {
      const mql = window.matchMedia("(prefers-color-scheme: dark)")
      const systemTheme = mql.matches ? "dark" : "light"
      root.classList.add(systemTheme)
      // React to system theme changes while on system mode
      const onChange = (e: MediaQueryListEvent) => {
        root.classList.remove("light", "dark")
        root.classList.add(e.matches ? "dark" : "light")
      }
      try {
        mql.addEventListener("change", onChange)
        return () => mql.removeEventListener("change", onChange)
      } catch {
        // Safari fallback
        // @ts-ignore
        mql.addListener(onChange)
        return () => {
          // @ts-ignore
          mql.removeListener(onChange)
        }
      }
    }

    root.classList.add(theme)
  }, [theme, enableSystem])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme)
      // Save to localStorage
      try {
        localStorage.setItem(storageKey, theme)
      } catch (e) {
        console.error(e)
      }
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}

