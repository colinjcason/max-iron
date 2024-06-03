"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link";


export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <>


      <Drawer direction="left" >
        <DrawerTrigger asChild>
          <Button variant="ghost">Schedule</Button>
        </DrawerTrigger>
        <DrawerContent className="w-1/3 h-full">

          
          <div className="p-4 pb-0">
            <div className="flex flex-col items-center justify-center gap-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
              <Link href="/monday" className="text-lg font-semibold">Monday</Link>
              <Link href="/tuesday" className="text-lg font-semibold">Tuesday</Link>
              <Link href="/wednesday" className="text-lg font-semibold">Wednesday</Link>
              <Link href="/thursday" className="text-lg font-semibold">Thursday</Link>
              <Link href="/friday" className="text-lg font-semibold">Friday</Link>
              <Link href="/saturday" className="text-lg font-semibold">Saturday</Link>
              <Link href="/sunday" className="text-lg font-semibold">Sunday</Link>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}
