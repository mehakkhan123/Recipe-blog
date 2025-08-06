"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'



export default function Hero() {
  const router = useRouter()
  return (
    <div className='flex flex-col w-full items-center px-6 max-w-[1536px] justify-center'> {/* main container */}
        <div className='w-full sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[700px] flex justify-center items-center relative border border-black'> {/* image and text container */}
          <Image src={"/images/hero/pizza.jpg"} alt='Delicious pizza' fill priority className='object-cover'/>
          <div className='z-10 text-white bg-black/50 flex flex-col items-center justify-center text-center sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[700px] w-full p-7 xl:p-9'> {/* text container */}
            <h1 className='text-2xl font-bold sm:text-4xl md:text-5xl xl:text-7xl'>Discover your Next Favourite Meal</h1>
            <p className='text-lg py-4 sm:text-xl md:text-2xl xl:text-5xl md:py-8'>Explore a world of flavours from quick weeknight dinners to gourmet delights.</p>
             <button onClick={()=>{
              router.push("/recipes")
             }} className='bg-green-600 py-2 px-5 md:py-4 md:px-6 rounded-full text-2xl xl:text-5xl cursor-pointer hover:bg-green-500 transition duration-500 ease-in-out font-semibold'>Browse Recipes</button>
          </div>
    
        </div>
    </div>
  )
}
