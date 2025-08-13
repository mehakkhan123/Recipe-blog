import React from 'react'
import { recipe } from '@/components/RecipeCardDetail'
import Image from 'next/image';
import { FaFolder } from "react-icons/fa6";
import { FaRegHourglassHalf } from "react-icons/fa6";


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
          <div className='flex'>
            <Image src={getItem.image} alt={getItem.title} width={300} height={300}/>
                <div>  {/* recipe summary container */}
                  <div className='flex gap-14'>   {/* category */}
                    <div className='flex items-center gap-2'><FaFolder /> <h3>Category</h3></div>
                    <h3>{getItem.category}</h3>
                  </div>
                  <div className='flex gap-14'>   {/* category */}
                    <div className='flex items-center gap-2'><FaFolder /> <h3>Category</h3></div>
                    <h3>{getItem.category}</h3>
                  </div>
                  
                </div>
          </div>
          <h1>{getItem.title}</h1>
          <p>{getItem.description}</p>
      </div>
    </div>
  )
}
