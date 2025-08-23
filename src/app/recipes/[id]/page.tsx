import React from 'react'
import { recipe } from '@/components/RecipeCardDetail'
import Image from 'next/image';
import { FaFolder } from "react-icons/fa6";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { PiChefHatFill } from 'react-icons/pi';
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaGlobeAmericas } from "react-icons/fa";


interface RecipeDetailParams  {
  id: string;
};

interface RecipeDetailPageProps {
  params: Promise<RecipeDetailParams>;
};
export default async function RecipeDetail({params}:RecipeDetailPageProps) {
  const {id} = await params
  
    const getItem = recipe.find((item)=>{
       return item.id===parseInt(id)
    })
    
    
  if (!getItem) {
    return (
      <div className='flex flex-col w-full items-center px-6 max-w-[1536px] justify-center mt-2'>
        <p>Recipe not found.</p>
      </div>
    );
  }

    
  return (
    
      <div className='flex flex-col w-full px-6 max-w-[1536px] justify-center mt-2 mx-auto'>
        <h1 className='font-bold text-2xl md:text-4xl text-center py-3'>{getItem.title}</h1>
          <p className='md:text-2xl text-center'>{getItem.description}</p>

          <div className='flex flex-col md:flex-row w-full items-center justify-center gap-8 mt-4'>
            <Image src={getItem.image} alt={getItem.title} width={300} height={300} />
                <div className=' p-6 rounded-lg flex flex-col justify-between md:justify-center md:gap-7 shadow-md w-full max-w-[400px] h-[300px] text-sm sm:text-lg md:text-xl text-green-700'>  {/* recipe summary container */}
                  <div className='flex justify-between'>   {/* category */}
                    <div className='flex items-center gap-2'><FaFolder /> <h3>Category</h3></div>
                    <h3>{getItem.category}</h3>
                  </div>
                  <div className='flex justify-between'>   {/* total time */}
                    <div className='flex items-center gap-2'><FaRegHourglassHalf /> <h3>Total Time</h3></div>
                    <h3>{getItem.totalTime}</h3>
                  </div>
                  <div className='flex justify-between'>   {/* difficulty */}
                    <div className='flex items-center gap-2'><PiChefHatFill /> <h3>Difficulty</h3></div>
                    <h3>{getItem.difficulty}</h3>
                  </div>
                  <div className='flex justify-between'>   {/* yields */}
                    <div className='flex items-center gap-2'><GiForkKnifeSpoon /> <h3>Yields</h3></div>
                    <h3>{getItem.servings}</h3>
                  </div>
                  <div className='flex justify-between'>   {/* cuisine */}
                    <div className='flex items-center gap-2'><FaGlobeAmericas /> <h3>Cuisine</h3></div>
                    <h3>{getItem.cuisine}</h3>
                  </div>
                </div>
          </div>


          <div className='mt-7 px-6'>   {/* ingredients container */}
            <h2 className='font-bold text-xl'>Ingredients</h2>
            {
              getItem.ingredients.map((item)=>{
                return(
                  <li key={item} className='text-amber-600 list-image-none text-md md:text-2xl font-semibold'>{item}</li>
                )
              })
            }
          </div>

                    <div className='mt-7 px-6'>   {/* instructions container */}
            <h2 className='font-bold text-xl'>Instructions</h2>
            {
              getItem.instructions.map((item)=>{
                return(
                  <li key={item} className='list-decimal mb-3'>{item}</li>
                )
              })
            }
          </div>
                    
      
    </div>
  )
}
