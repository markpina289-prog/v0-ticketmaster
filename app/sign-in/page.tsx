"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import Link from "next/link"
import { Eye, EyeOff, AlertCircle } from "lucide-react"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    setLoading(true)
    try {
      console.log("[v0] Sign in attempt with:", email || "demo@ticketmaster.com")
      // Accept any email and password for demo purposes
      const success = await login(email || "demo@ticketmaster.com", password || "demo")
      console.log("[v0] Login returned:", success)
      if (success) {
        console.log("[v0] Attempting to navigate to /my-tickets")
        router.push("/my-tickets")
      }
    } catch (err) {
      console.log("[v0] Sign in error:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="flex h-16 items-center border-b border-border bg-[#02122b]">
        <div className="mx-auto flex w-full max-w-[1400px] items-center px-4">
          <Link href="/" className="flex items-center gap-2" aria-label="Ticketmaster Home">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <circle cx="16" cy="16" r="16" fill="hsl(211, 97%, 44%)" />
              <path d="M10 12h12v2H10zM10 16h8v2h-8zM10 20h10v2H10z" fill="white" />
            </svg>
            <span className="text-xl font-bold text-foreground tracking-tight">ticketmaster</span>
          </Link>
        </div>
      </header>

      {/* Sign In Form */}
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-lg border border-border bg-card p-8">
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-2xl font-bold text-card-foreground">Sign In</h1>
              <p className="text-sm text-muted-foreground">
                Sign in to your Ticketmaster account
              </p>
            </div>

            {error && (
              <div className="mb-6 flex items-center gap-2 rounded-md bg-destructive/10 border border-destructive/20 p-3" role="alert">
                <AlertCircle className="h-4 w-4 text-destructive flex-shrink-0" />
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email (or leave blank)"
                  className="h-12 rounded-md border border-border bg-input px-4 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  autoComplete="email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-card-foreground">
                    Password
                  </label>
                  <a href="#" className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password (or leave blank)"
                    className="h-12 w-full rounded-md border border-border bg-input px-4 pr-12 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-border bg-input accent-primary"
                />
                <label htmlFor="remember" className="text-sm text-muted-foreground">
                  Keep me signed in
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex h-12 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground hover:bg-[hsl(211,97%,38%)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                    Signing In...
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-card px-3 text-xs text-muted-foreground">or</span>
              </div>
            </div>

            {/* Social sign-in */}
            <div className="flex flex-col gap-3">
              <button className="flex h-12 items-center justify-center gap-3 rounded-md border border-border bg-secondary text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
              <button className="flex h-12 items-center justify-center gap-3 rounded-md border border-border bg-secondary text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.18 0-.36-.02-.53-.06-.01-.18-.04-.56-.04-.95 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.22.06.56.06.82 0 .06-.003.12-.003.18zm3.063 18.3c-.51.72-1.09 1.38-1.86 1.38-.38 0-.66-.13-.97-.27-.34-.15-.72-.32-1.33-.32-.64 0-1.04.18-1.41.33-.3.13-.58.25-.92.27-.02 0-.04 0-.07 0-.74 0-1.38-.75-1.99-1.5-1.54-1.91-2.72-5.43-1.13-7.8.79-1.17 2.11-1.89 3.44-1.93.54-.01 1.06.18 1.52.35.36.13.69.26.97.26.25 0 .56-.12.93-.26.55-.2 1.24-.46 2-.4 1.14.08 2.13.58 2.78 1.48-1.09.69-1.82 1.9-1.72 3.43.1 1.54.95 2.73 2.07 3.29-.24.65-.5 1.28-.87 1.87l.05.06z"/>
                </svg>
                Continue with Apple
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              {"New to Ticketmaster? "}
              <a href="#" className="font-medium text-primary hover:text-primary/80 transition-colors">
                Create an account
              </a>
            </p>
          </div>

          {/* Legal text */}
          <p className="mt-4 text-center text-xs text-muted-foreground leading-relaxed">
            {"By signing in, you agree to our "}
            <a href="#" className="text-primary hover:text-primary/80">Terms of Use</a>
            {" and "}
            <a href="#" className="text-primary hover:text-primary/80">Privacy Policy</a>.
          </p>
        </div>
      </main>
    </div>
  )
}
