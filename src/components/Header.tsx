"use client"
import Link from 'next/link'
import  React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetHeader
  
  
} from "@/components/ui/sheet"

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex justify-center">
        <header className='w-full max-w-[1536px] flex md:flex-row justify-between items-center px-6'>
            <h1 className='text-green-600 text-2xl font-bold cursor-pointer'>Recipe Blog</h1>
            <nav>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className='md:hidden py-3' aria-label='Open navigation menu'>
                {open?(<SheetClose asChild><button type='button'><Menu/></button></SheetClose>):(<button type='button'><Menu/></button>)}
              </SheetTrigger>
              <SheetContent className='bg-white border-none'>
                <SheetHeader>
              <SheetTitle className="sr-only">Portfolio Navigation</SheetTitle>
                            <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
                            <h1 className='text-green-600 text-lg font-bold cursor-pointer'>Recipe Blog</h1>
                            </SheetHeader>

                                <ul className='uppercase text-left px-3 '>
                                  
                    <li className='p-3' onClick={() => setOpen(false)}><Link href={"/"}>Home</Link></li>
                    <li className='p-3' onClick={() => setOpen(false)}><Link href={"/about"}>About</Link></li>
                    <li className='p-3' onClick={() => setOpen(false)}><Link href={"/recipes"}>Recipes</Link></li>
                </ul>
  
              </SheetContent>
            </Sheet>
                <ul className='hidden md:flex flex-row gap-5 font-medium'>
                    <li className='p-3 hover:text-green-600 text-lg transition-all duration-300 ease-in-out'><Link href={"/"}>Home</Link></li>
                    <li className='p-3 hover:text-green-600 text-lg transition-all duration-300 ease-in-out'><Link href={"/about"}>About</Link></li>
                    <li className='p-3 hover:text-green-600 text-lg transition-all duration-300 ease-in-out'><Link href={"/recipes"}>Recipes</Link></li>
                </ul>
                </nav>
  
    </header>
    </div>
  )
}



