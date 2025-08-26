"use client"
import React from 'react'
import { recipe } from './RecipeCardDetail'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaClock } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";


export default function RecipeCard() {
    const router = useRouter()
  return (
    <div className='flex flex-col w-full items-center px-6 max-w-[1536px] justify-center mt-2'>{/* main container */}
        <h2 className='text-3xl mt-4'>Our Recipes</h2>
        <div className='flex flex-col items-center justify-center pt-8 sm:flex-row gap-6 flex-wrap'> {/* card container */}
            {
                recipe.map((item)=>{
                    return(
                    <div key={item.id} className='flex flex-col items-center justify-center shadow-lg max-w-[300px] '>
                        <Image src={item.image} alt={item.title} width={500} height={500}/>
                        <div className='flex flex-col items-center justify-center min-h-[300px] gap-3 p-4'>
                            <h2 className='font-bold text-lg text-center'>{item.title}</h2>
                        <p className='flex-grow'>{item.description}</p>
                        <div className='flex justify-between w-full'>
                            <div className='flex items-center gap-2'><FaClock /> <h3>{item.time}</h3></div>
                            <div className='flex items-center gap-2'><IoPeople /> <h3>{item.servings}</h3></div>
                        </div>
                        <button onClick={()=>{
              router.push(`/recipes/${item.id}`)
             }} className='bg-green-600 w-full text-white py-2 px-5 rounded-lg cursor-pointer hover:bg-green-500 transition duration-500 ease-in-out font-semibold shadow-md'>View Recipe</button>
                        </div>

                    </div>)
                })
            }

        </div>

    </div>
  )
}
