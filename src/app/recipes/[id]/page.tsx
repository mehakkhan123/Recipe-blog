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
    <div className='flex flex-col w-full items-center px-6 max-w-[1536px] justify-center mt-2'>
      <div>
          <div className='flex flex-col md:flex-row w-full max-w-4xl gap-8'>
            <Image src={getItem.image} alt={getItem.title} width={300} height={300} className='object-cover' />
                <div className='bg-gray-100 p-6 rounded-lg  shadow-md'>  {/* recipe summary container */}
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
          <h1 className=''>{getItem.title}</h1>
          <p>{getItem.description}</p>
      </div>
    </div>
  )
}
