import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Authentication - YourApp",
  description: "Authentication pages for YourApp",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Auth Form Container */}
      <div className="w-full max-w-[400px] px-4">
        {children}
      </div>
    </div>
  )
}
