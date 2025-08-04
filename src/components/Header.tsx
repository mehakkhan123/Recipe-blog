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
              <SheetContent className='bg-gradient-to-br from-gray-50 to-white p-6 shadow-lg rounded--md border-none'>
                <SheetHeader className='border-b border-b-gray-300 mb-4 py-4 flex justify-between items-center'>
              <SheetTitle className="sr-only">Blog Navigation</SheetTitle>
                            <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
                            <h1 className='text-green-600 text-xl font-semibold cursor-pointer'>Recipe Blog</h1>
                            </SheetHeader>

                                <ul className='uppercase  space-y-2 '>
                                  
                    <li className='p-3' onClick={() => setOpen(false)}><Link href={"/"} className='block px-4 py-2 rounded-md text-gray-700 shadow-md hover:scale-[1.02] transform hover:text-green-600 transition duration-150 ease-in-out font-medium'>Home</Link></li>
                    <li className='p-3' onClick={() => setOpen(false)}><Link href={"/about"} className='block px-4 py-2 rounded-md text-gray-700 shadow-md hover:scale-[1.02] transform hover:text-green-600 transition duration-150 ease-in-out font-medium'>About</Link></li>
                    <li className='p-3' onClick={() => setOpen(false)}><Link href={"/recipes"} className='block px-4 py-2 rounded-md text-gray-700 shadow-md hover:scale-[1.02] transform hover:text-green-600 transition duration-150 ease-in-out font-medium'>Recipes</Link></li>
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



