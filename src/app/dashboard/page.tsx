"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()
  const handleSignOut = async () => {
    try {
      await signOut({ 
        callbackUrl: "/login",
        redirect: false 
      })
      // Force a hard reload of the page
      window.location.href = "/login"
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="mt-6">
        <p>Welcome to your dashboard</p>
      </div>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  )
}
