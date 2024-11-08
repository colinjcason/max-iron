"use client"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { useState } from "react"
import { signIn } from "next-auth/react"

export function GoogleLoginButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    try {
      await signIn("google", { callbackUrl: "/dashboard" })
    } catch (error) {
      console.error("Error signing in with Google:", error)
    } finally {
      setIsLoading(false)
    }
  }

  
  return (
    <Button
      className="w-full m-6"
      onClick={handleGoogleSignIn}
      disabled={isLoading}
    >
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.google className="mr-2 h-6 w-6" />
      )}
      Google Sign In
    </Button>
  )
}
