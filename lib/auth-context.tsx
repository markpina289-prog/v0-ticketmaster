"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

interface User {
  email: string
  firstName: string
  lastName: string
}

interface AuthContextType {
  user: User | null
  isLoggedIn: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = useCallback(async (email: string, _password: string): Promise<boolean> => {
    // Simulated auth for presentation purposes
    await new Promise((resolve) => setTimeout(resolve, 800))
    const name = email.split("@")[0]
    setUser({
      email,
      firstName: name.charAt(0).toUpperCase() + name.slice(1),
      lastName: "",
    })
    return true
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
