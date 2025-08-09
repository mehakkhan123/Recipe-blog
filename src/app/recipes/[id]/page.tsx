import React from 'react'
import { recipe } from '@/components/RecipeCardDetail'
import Image from 'next/image';
import { Recipe } from '@/components/recipeInterface';

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
    
    
  return (
    <div className='flex flex-col w-full items-center px-6 max-w-[1536px] justify-center mt-2'>
      <div>
          <Image src={getItem?.image} alt={getItem?.title} width={300} height={300}/>
          <h1>{getItem?.title}</h1>
          <p>{getItem?.description}</p>
      </div>
    </div>
  )
}
