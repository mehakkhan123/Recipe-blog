"use client"
import React from 'react'
import { recipe } from './RecipeCardDetail'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function RecipeCard() {
    const router = useRouter()
  return (
    <div className='flex flex-col w-full items-center px-6 max-w-[1536px] justify-center mt-2'>{/* main container */}
        <h2 className='text-3xl'>Our Recipes</h2>
        <div className='flex flex-col items-center justify-center pt-8 sm:flex-row gap-6 flex-wrap'> {/* card container */}
            {
                recipe.map((item)=>{
                    return(
                    <div key={item.id} className='flex flex-col items-center justify-center max-w-[300px] min-h-[600px] gap-3'>
                        <Image src={item.image} alt={item.title} width={500} height={500}/>
                        <h2>{item.title}</h2>
                        <p className='flex-grow'>{item.description}</p>
                        <div className='flex justify-between w-full'>
                            <h3>{item.time}</h3>
                            <h3>{item.servings}</h3>
                        </div>
                        <button onClick={()=>{
              router.push(`/recipes/${item.id}`)
             }} className='bg-green-600 w-full text-white py-2 px-5 rounded-lg cursor-pointer hover:bg-green-500 transition duration-500 ease-in-out font-semibold'>Browse Recipes</button>

                    </div>)
                })
            }

        </div>

    </div>
  )
}
